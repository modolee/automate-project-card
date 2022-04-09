import { handleCreateEvent } from './create';
import { handlePullRequestEvent } from './pull-request';

interface IEventHandler {
  [key: string]: Function;
}

const eventHandlers: IEventHandler = {
  create: handleCreateEvent,
  pull_request: handlePullRequestEvent
};

export const getEventHandler = (eventName: string): Function => {
  return eventHandlers[eventName];
};
