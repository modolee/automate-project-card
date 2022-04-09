import { IEventHandler } from './event-handler.interface';
import { CreateEventHandler } from './create';
import { PullRequestEventHandler } from './pull-request';

export class EventHandlerFactory {
  static getEventHandler(eventName: string): IEventHandler | null {
    switch (eventName) {
      case 'create':
        return new CreateEventHandler();
      case 'pull_request':
        return new PullRequestEventHandler();
      default:
        return null;
    }
  }
}
