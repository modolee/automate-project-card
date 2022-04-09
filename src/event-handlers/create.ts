import * as core from '@actions/core';
import * as github from '@actions/github';
import { CreateEvent } from '@octokit/webhooks-definitions/schema';
import { isNumeric } from '../helpers/number.helper';
import { IEventHandler } from './event-handler.interface';

export class CreateEventHandler implements IEventHandler {
  private regExp = /^.+#(\d+)$/;

  /**
   * 이벤트 핸들 메인
   */
  handleEvent(): void {
    const issueNumber = this.getIssueNumber();
    if (!issueNumber) {
      core.warning('This event is not valid event.');
      return;
    }

    this.changeStatus(issueNumber);
  }

  /**
   * 유효성 검사
   * @returns
   */
  getIssueNumber(): number | null {
    const event = <CreateEvent>github.context.payload;
    const branchName = this.getBranchName(event);
    if (!branchName) {
      return null;
    }
    core.info(`Branch name is ${branchName}`);

    const issueNumber = this.parseIssueNumber(branchName);
    if (!issueNumber) {
      return null;
    }
    core.info(`Issue number is ${issueNumber}`);

    return issueNumber;
  }

  /**
   * 상태 변경
   * @param issueNumber
   */
  async changeStatus(issueNumber: number): Promise<void> {
    const gpaToken = core.getInput('gpa-token');
    const octokit = github.getOctokit(gpaToken);
    const { repo } = github.context;

    const repoList = await octokit.rest.issues.listForRepo(repo);
    console.log({ repoList });
  }

  /**
   * 브랜치 이름 가져오기
   * @param event
   * @returns
   */
  getBranchName(event: CreateEvent): string | null {
    const branchName = event.ref;
    const isMatched = this.regExp.test(branchName);
    if (!isMatched) {
      core.warning('Branch name is not matched.');
      return null;
    }

    return branchName;
  }

  /**
   * 이슈번호 파싱하기
   * @param text
   * @returns
   */
  parseIssueNumber(text: string): number | null {
    const issueNumber = text.split('#').pop();
    if (!issueNumber) {
      core.warning('Issue number is not exist.');
      return null;
    }

    const isIssueNumberNumeric = isNumeric(issueNumber);
    if (!isIssueNumberNumeric) {
      core.warning('Issue number is not numeric.');
      return null;
    }

    return parseInt(issueNumber);
  }
}
