import {combinations, product} from './iter';


describe('Iter tools', () => {
  it('returns correct combinations', async () => {
    const comb = combinations([1, 2, 3]);

    expect(comb).toStrictEqual([
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });

  it('returns correct cartesian products depth 0', async () => {
    const prod = product([1, 2], [4, 5]);

    expect(prod).toStrictEqual([
      [1, 4],
      [1, 5],
      [2, 4],
      [2, 5],
    ]);
  });

  it('returns correct cartesian products depth 1', async () => {
    const prod = product([[1, 2], [3]], [[4], [5, 6]]);

    expect(prod).toStrictEqual([
      [1, 2, 4],
      [1, 2, 5, 6],
      [3, 4],
      [3, 5, 6],
    ]);
  });

  it('returns correct cartesian products with empty element', async () => {
    const prod = product([1, 2], []);

    expect(prod).toStrictEqual([
      [1],
      [2],
    ]);
  });
});
