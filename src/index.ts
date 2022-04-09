import * as core from '@actions/core';
import * as github from '@actions/github';
import { getEventHandler } from './event-handlers';

function run(): void {
  try {
    const eventName = github.context.eventName;
    core.info(`eventName: ${eventName}`);

    const eventHandler = getEventHandler(eventName);
    if (eventHandler) eventHandler();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
