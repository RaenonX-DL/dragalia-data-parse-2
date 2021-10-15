export const expectArrayEquivalent = <T>(actual: T[], expected: T[]): void => {
  expect(actual).toEqual(expect.arrayContaining(expected));
  expect(expected).toEqual(expect.arrayContaining(actual));
};
