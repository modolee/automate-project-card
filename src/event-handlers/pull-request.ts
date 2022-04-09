import * as core from '@actions/core';
import * as github from '@actions/github';
import { PullRequestEvent } from '@octokit/webhooks-definitions/schema';

export const handlePullRequestEvent = (): void => {
  const regExpString = core.getInput('pull-request-title');
  const regExp = new RegExp(regExpString);

  const payload = <PullRequestEvent>github.context.payload;
  const pullRequestTitle = payload.pull_request.title;

  if (regExp.test(pullRequestTitle)) {
    core.info(`Pull request title is ${pullRequestTitle}`);
  }
};
