import { IEventHandler } from './interfaces/event-handler.interface';
import { CreateEventHandler } from './create';
import { PullRequestEventHandler } from './pull-request';

export class EventHandlerFactory {
  static getEventHandler(
    eventName: string,
    gpaToken: string,
    orgName: string,
    projectNumber: number,
    inProgressColumn: string,
    reviewColumn: string
  ): IEventHandler | null {
    switch (eventName) {
      case 'create':
        return new CreateEventHandler(
          gpaToken,
          orgName,
          projectNumber,
          inProgressColumn,
          reviewColumn
        );
      case 'pull_request':
        return new PullRequestEventHandler(
          gpaToken,
          orgName,
          projectNumber,
          inProgressColumn,
          reviewColumn
        );
      default:
        return null;
    }
  }
}
