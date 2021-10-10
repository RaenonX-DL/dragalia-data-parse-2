import {generateAbilityEntry} from '../../../../tests/data/ability';
import {fixture} from '../../../../tests/fixtures';
import {AbilityEntry} from './entry';
import {AbilityAsset} from './main';


describe('Ability asset', () => {
  const abilityLookup: {[id in number]: AbilityEntry} = {
    1: generateAbilityEntry(1, {otherAbilityId1: 2}),
    2: generateAbilityEntry(2, {otherAbilityId1: 3, otherAbilityId2: 4, otherAbilityId3: 5}),
    3: generateAbilityEntry(3, {otherAbilityId1: 6}),
    4: generateAbilityEntry(4),
    5: generateAbilityEntry(5),
    6: generateAbilityEntry(6),
  };

  beforeEach(() => {
    jest.spyOn(AbilityAsset.prototype, 'getDataOfId').mockImplementation((id: number) => abilityLookup[id]);
  });

  it('gets all related abilities', async () => {
    const asset = new AbilityAsset(fixture.environment);

    const abilities = asset.getAllAbilityOf(1);

    expect(abilities.map((ability) => ability.id)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
