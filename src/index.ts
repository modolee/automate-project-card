import * as core from '@actions/core';
import * as github from '@actions/github';
import { CreateEvent } from '@octokit/webhooks-definitions/schema';

function run(): void {
  try {
    const status = core.getInput('status');
    console.log({ status });

    const eventName = github.context.eventName;
    core.info(`eventName: ${eventName}`);

    if (eventName === 'create') {
      const payload = <CreateEvent>github.context.payload;
      core.info(JSON.stringify(payload));
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
