import * as core from '@actions/core';
import * as github from '@actions/github';
import { getEventHandler } from './event-handler';

function run(): void {
  try {
    const regExpString = core.getInput('reg-exp');
    console.log({ regExpString });
    const regExp = new RegExp(regExpString);

    const eventName = github.context.eventName;
    core.info(`eventName: ${eventName}`);

    const eventHandler = getEventHandler[eventName];
    if (eventHandler) eventHandler(regExp);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
