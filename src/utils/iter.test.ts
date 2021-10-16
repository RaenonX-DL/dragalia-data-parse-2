import {expectArrayEquivalent} from '../../tests/utils/array';
import {ConditionComposite} from '../types/enums/condition';
import {combinations, product} from './iter';


describe('Iter tools', () => {
  it('returns correct combinations', async () => {
    const comb = combinations([1, 2, 3]);

    expectArrayEquivalent(
      comb,
      [
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3],
      ],
    );
  });

  it('returns correct cartesian products depth 0', async () => {
    const prod = product(
      [1, 2],
      [4, 5],
    );

    expectArrayEquivalent(
      prod,
      [
        [1, 4],
        [1, 5],
        [2, 4],
        [2, 5],
      ],
    );
  });

  it('returns correct cartesian products depth 1', async () => {
    const prod = product<number[]>(
      [
        [1, 2],
        [3],
      ],
      [
        [4],
        [5, 6],
      ],
    );

    expectArrayEquivalent(
      prod,
      [
        [[1, 2], [4]],
        [[1, 2], [5, 6]],
        [[3], [4]],
        [[3], [5, 6]],
      ]);
  });

  it('returns correct cartesian products depth 1 with empty element', async () => {
    const prod = product(
      [
        [1, 2],
        [3],
      ],
      [
        [],
        [5, 6],
      ],
    );

    expectArrayEquivalent(
      prod,
      [
        [[1, 2], []],
        [[1, 2], [5, 6]],
        [[3], []],
        [[3], [5, 6]],
      ],
    );
  });

  it('returns correct cartesian products with empty element', async () => {
    const prod = product(
      [1, 2],
      [],
    );

    expectArrayEquivalent(
      prod,
      [
        [1],
        [2],
      ],
    );
  });

  it('returns correct cartesian product for conditions', async () => {
    const elements: ConditionComposite[][] = [
      // OD boost
      [['TARGET_OD_STATE'], []],
      // Elemental target
      [['TARGET_FLAME'], []],
      // Punisher
      [['TARGET_FROSTBITTEN'], []],
    ];

    const results = product(...elements).map((conditionComp) => (
      conditionComp.reduce((prev, curr) => [...prev, ...curr])
    ));

    expectArrayEquivalent(
      results,
      [
        ['TARGET_OD_STATE', 'TARGET_FLAME', 'TARGET_FROSTBITTEN'],
        ['TARGET_OD_STATE', 'TARGET_FLAME'],
        ['TARGET_OD_STATE', 'TARGET_FROSTBITTEN'],
        ['TARGET_OD_STATE'],
        ['TARGET_FLAME', 'TARGET_FROSTBITTEN'],
        ['TARGET_FLAME'],
        ['TARGET_FROSTBITTEN'],
        [],
      ],
    );
  });
});
