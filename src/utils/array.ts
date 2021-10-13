type IsNonNilOptions = {
  throwIfNil: false,
  errorMessage: never,
} | {
  throwIfNil: true,
  errorMessage: string,
};

export const isNonNil = <T>(
  options?: IsNonNilOptions,
) => (
  value: null | undefined | void | T,
): value is T => {
  const isNil = value == null;

  if (isNil && options?.throwIfNil) {
    throw new Error(options.errorMessage);
  }

  return !isNil;
};
