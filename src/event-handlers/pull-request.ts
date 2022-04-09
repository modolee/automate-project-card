import * as core from '@actions/core';
import * as github from '@actions/github';
import { PullRequestEvent } from '@octokit/webhooks-definitions/schema';
import { IEventHandler } from './event-handler.interface';

export class PullRequestEventHandler implements IEventHandler {
  private regExp = /^.+\(resolved #\d+\)$/;

  handleEvent(): void {
    const payload = <PullRequestEvent>github.context.payload;
    const pullRequestTitle = payload.pull_request.title;

    const isMatched = this.regExp.test(pullRequestTitle);

    if (isMatched) {
      core.info(`Pull request title is ${pullRequestTitle}`);
    }
  }

  getIssueNumber(): number | null {
    return null;
  }
  changeStatus(issueNumber: number): void {}
  parseIssueNumber(text: string): number | null {
    return null;
  }
}
