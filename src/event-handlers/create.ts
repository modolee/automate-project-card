import * as core from '@actions/core';
import * as github from '@actions/github';
import { CreateEvent } from '@octokit/webhooks-definitions/schema';

export const handleCreateEvent = (): void => {
  const regExpString = core.getInput('branch-name');
  const regExp = new RegExp(regExpString);

  const payload = <CreateEvent>github.context.payload;
  const branchName = payload.ref;

  if (regExp.test(branchName)) {
    core.info(`Branch name is ${branchName}`);
  }
};
