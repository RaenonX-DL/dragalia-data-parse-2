import {SkillDataCollection} from './type';
import {validateCollection} from './util';


describe('Skill data utils', () => {
  it('fails on invalid condition', async () => {
    const invalidCollection: SkillDataCollection = [
      {
        identifier: [{
          cht: 'A',
          en: 'A',
          jp: 'A',
        }],
        conditions: [
          // Intend to be invalid
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ['INVALID'],
        ],
        skillDataId: 107504041,
        hitLabels: [],
      },
    ];

    const fnGetCollection = () => {
      validateCollection(invalidCollection);
    };

    expect(fnGetCollection).toThrow(Error);
  });

  it('succeeds on valid condition', async () => {
    const validCollection: SkillDataCollection = [
      {
        identifier: [{
          cht: 'A',
          en: 'A',
          jp: 'A',
        }],
        conditions: [
          ['TARGET_AFFLICTED'],
        ],
        skillDataId: 107504041,
        hitLabels: [],
      },
    ];

    const fnGetCollection = () => {
      validateCollection(validCollection);
    };

    expect(fnGetCollection).not.toThrow(Error);
  });
});
