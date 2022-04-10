import * as core from '@actions/core';
import * as github from '@actions/github';
import { EventHandlerFactory } from './event-handlers';

function run(): void {
  try {
    const eventName = github.context.eventName;
    core.info(`eventName: ${eventName}`);

    const gpaToken = core.getInput('gpa-token');
    const orgName = core.getInput('org-name');
    const projectNumber = parseInt(core.getInput('project-number'));
    const inProgressColumn = core.getInput('in-progress-column');
    const reviewColumn = core.getInput('review-column');

    const eventHandler = EventHandlerFactory.getEventHandler(
      eventName,
      gpaToken,
      orgName,
      projectNumber,
      inProgressColumn,
      reviewColumn
    );

    if (eventHandler) eventHandler.handleEvent();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
