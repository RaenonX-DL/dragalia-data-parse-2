export const isNonNil = <T>(value: T | null | undefined | void): value is T => value != null;
