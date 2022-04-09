import { CreateEventHandler } from '../event-handlers/create';

const eventHandler = new CreateEventHandler();

describe('Create Event Handler', () => {
  test('parseIssueNumber', () => {
    // GIVEN
    const branchName = 'feature/func/테스트-이슈1#2';
    const expectedIssueNumber = 2;

    // WHEN
    const issueNumber = eventHandler.parseIssueNumber(branchName);

    // THEN
    expect(issueNumber).toEqual(expectedIssueNumber);
  });
});
