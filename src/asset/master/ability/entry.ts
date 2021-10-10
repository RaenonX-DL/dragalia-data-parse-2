import {MasterEntry} from '../base/entry';
import {AbilityOriginal} from './type';
import {AbilityVariant} from './variant';


export class AbilityEntry extends MasterEntry<number> {
  variants: [AbilityVariant, AbilityVariant, AbilityVariant];

  constructor(entry: AbilityOriginal) {
    super(entry);

    this.variants = [
      new AbilityVariant({
        type: entry._AbilityType1,
        id: [entry._VariousId1a, entry._VariousId1b, entry._VariousId1c],
        str: entry._VariousId1str,
        upValue: entry._AbilityType1UpValue,
      }),
      new AbilityVariant({
        type: entry._AbilityType2,
        id: [entry._VariousId2a, entry._VariousId2b, entry._VariousId2c],
        str: entry._VariousId2str,
        upValue: entry._AbilityType2UpValue,
      }),
      new AbilityVariant({
        type: entry._AbilityType3,
        id: [entry._VariousId3a, entry._VariousId3b, entry._VariousId3c],
        str: entry._VariousId3str,
        upValue: entry._AbilityType3UpValue,
      }),
    ];
  }

  get childAbilityIds(): Array<number> {
    return this.variants
      .map((variant) => variant.otherAbilityId)
      .filter((abilityId) => abilityId !== undefined) as Array<number>;
  }
}
