export function describeIf(condition: boolean): jest.Describe {
  return condition ? describe : describe.skip;
}

export function testIf(condition: boolean): jest.It {
  return condition ? test : test.skip;
}

export const itIf = testIf;

export function getGpaToken(): string {
  let gpaToken = process.env['GPA_TOKEN'];

  if (!gpaToken || gpaToken.length < 40) {
    gpaToken = '';
    console.warn(
      'Skipping GitHub tests. Set $GPA_TOKEN to run REST client tests.'
    );
  }

  return gpaToken;
}
