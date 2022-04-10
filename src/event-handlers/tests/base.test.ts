import { getGpaToken } from '../../helpers/test.helper';
import { BaseEventHandler } from '../base';
import {
  inProgressColumn,
  orgName,
  projectId,
  reviewColumn
} from './constants';

describe('Base Event Handler Test', () => {
  // GIVEN
  const gpaToken = getGpaToken();
  if (!gpaToken) return;

  const baseEventHandler = new BaseEventHandler(
    gpaToken,
    orgName,
    projectId,
    inProgressColumn,
    reviewColumn
  );

  test('getProjectList', async () => {
    // GIVEN

    // WHEN
    const projectList = await baseEventHandler.getProjectList();

    // THEN
    console.log({ projectList });
  });

  test.skip('getProjectColumnList', async () => {
    // GIVEN

    // WHEN
    const columnList = await baseEventHandler.getProjectColumnList();

    // THEN
    console.log({ columnList });
  });
});
