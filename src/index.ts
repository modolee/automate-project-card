import * as core from '@actions/core';
import * as github from '@actions/github';
import { EventHandlerFactory } from './event-handlers';

function run(): void {
  try {
    const eventName = github.context.eventName;
    core.info(`eventName: ${eventName}`);

    const eventHandler = EventHandlerFactory.getEventHandler(eventName);
    if (eventHandler) eventHandler.handleEvent();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
