// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fastCartesianProduct from 'fast-cartesian-product';


export const combinations = <T, >(array: T[]): T[][] => {
  return new Array(1 << array.length)
    .fill(null)
    .map((_, i) => array.filter((_, j) => i & 1 << j))
    .filter((arr) => arr.length > 0);
};

export const product = <T, >(...arr: T[][]): T[][] => fastCartesianProduct(arr.filter((item) => item.length > 0));
