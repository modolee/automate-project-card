import * as core from '@actions/core';
import * as github from '@actions/github';
import {
  CreateEvent,
  PullRequestEvent
} from '@octokit/webhooks-definitions/schema';

interface IEventHandler {
  [key: string]: Function;
}

export const getEventHandler: IEventHandler = {
  create: handleCreateEvent,
  pull_request: handelPullRequestEvent
};

function handleCreateEvent(regExp: RegExp): void {
  const payload = <CreateEvent>github.context.payload;
  const branchName = payload.ref;
  core.info(JSON.stringify(payload));

  if (regExp.test(branchName)) {
    core.info(`Branch name is ${branchName}`);
  }
}

function handelPullRequestEvent(regExp: RegExp): void {
  const payload = <PullRequestEvent>github.context.payload;
  const pullRequestTitle = payload.pull_request.title;
  core.info(JSON.stringify(payload));

  if (regExp.test(pullRequestTitle)) {
    core.info(`Pull request title is ${pullRequestTitle}`);
  }
}
