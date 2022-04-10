import { CreateEventHandler } from '../create';
import { getGpaToken } from '../../helpers/test.helper';
import {
  inProgressColumn,
  orgName,
  projectId,
  reviewColumn
} from './constants';

describe('Create Event Handler', () => {
  // GIVEN
  const gpaToken = getGpaToken();
  if (!gpaToken) return;

  const eventHandler = new CreateEventHandler(
    gpaToken,
    orgName,
    projectId,
    inProgressColumn,
    reviewColumn
  );

  test('parseIssueNumber', () => {
    // GIVEN
    const branchName = 'feature/func/테스트-이슈1#2';
    const expectedIssueNumber = 2;

    // WHEN
    const issueNumber = eventHandler.parseIssueNumber(branchName);

    // THEN
    expect(issueNumber).toEqual(expectedIssueNumber);
  });

  test('changeStatus', async () => {
    // GIVEN
    // WHEN
    // THEN
  });
});
