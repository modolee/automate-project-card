import { isNumeric } from '../number.helper';

describe('Number Helper Test', () => {
  test('isNumeric', () => {
    // GIVEN
    const issueNumber = '2';

    // WHEN
    const result = isNumeric(issueNumber);

    console.log({ result });

    // THEN
    expect(result).toBeTruthy();
  });
});
