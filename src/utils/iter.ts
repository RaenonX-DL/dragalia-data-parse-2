export const combinations = <T, >(array: T[]): T[][] => {
  return new Array(1 << array.length)
    .fill(null)
    .map((_, i) => array.filter((_, j) => i & 1 << j))
    .filter((arr) => arr.length > 0);
};

export const product = <T, >(...arr: T[][]): T[][] => (
  arr
    .filter((item) => item.length > 0)
    .reduce<T[][]>(
      (a, b) => (
        a
          .map((x) => b.map((y) => x.concat(y)))
          .reduce((c, d) => c.concat(d), [])
      ),
      [[]],
    )
);
