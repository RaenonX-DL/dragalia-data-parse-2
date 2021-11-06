import {fixture} from '../../../../tests/fixtures';
import {HitDataCollection} from './hitDataCollection';


describe('Hit data collection', () => {
  it('returns correct possible conditions if no any other conditions', async () => {
    const hitDataCollection = new HitDataCollection({
      manager: fixture.manager,
      data: (await fixture.manager.custom.skill.getCollectionOfUnit(10750404))[0],
    });

    expect(hitDataCollection.toPossibleConditions()).toStrictEqual([
      [],
    ]);
  });

  it('returns correct possible conditions if punisher is available', async () => {
    const hitDataCollection = new HitDataCollection({
      manager: fixture.manager,
      data: (await fixture.manager.custom.skill.getCollectionOfUnit(10550203))[0],
    });

    expect(hitDataCollection.toPossibleConditions()).toStrictEqual([
      ['TARGET_FROSTBITTEN'],
      [],
    ]);
  });
});
