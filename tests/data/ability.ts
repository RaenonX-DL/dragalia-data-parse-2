import {AbilityEntry} from '../../src/asset/master/ability/entry';
import {AbilityVariantType} from '../../src/types/enums/abilityVariant';


type GenerateAbilityOptions = {
  otherAbilityId1?: number,
  otherAbilityId2?: number,
  otherAbilityId3?: number,
};

export const generateAbilityEntry = (id: number, options?: GenerateAbilityOptions): AbilityEntry => {
  return new AbilityEntry({
    _Id: id,
    _AbilityType1: 0,
    _VariousId1a: 0,
    _VariousId1b: 0,
    _VariousId1c: 0,
    _VariousId1str: '',
    _AbilityLimitedGroupId1: 0,
    _TargetAction1: 0,
    _AbilityType1UpValue: 0,
    _AbilityType2: 0,
    _VariousId2a: 0,
    _VariousId2b: 0,
    _VariousId2c: 0,
    _VariousId2str: '',
    _AbilityLimitedGroupId2: 0,
    _TargetAction2: 0,
    _AbilityType2UpValue: 0,
    _AbilityType3: 0,
    _VariousId3a: 0,
    _VariousId3b: 0,
    _VariousId3c: 0,
    _VariousId3str: '',
    _AbilityLimitedGroupId3: 0,
    _TargetAction3: 0,
    _AbilityType3UpValue: 0,
    ...(options?.otherAbilityId1 ? {
      _AbilityType1: AbilityVariantType.OTHER_ABILITY.valueOf(),
      _VariousId1a: options.otherAbilityId1,
      _VariousId1b: 0,
      _VariousId1c: 0,
    } : {}),
    ...(options?.otherAbilityId2 ? {
      _AbilityType2: AbilityVariantType.OTHER_ABILITY.valueOf(),
      _VariousId2a: options.otherAbilityId2,
      _VariousId2b: 0,
      _VariousId2c: 0,
    } : {}),
    ...(options?.otherAbilityId3 ? {
      _AbilityType3: AbilityVariantType.OTHER_ABILITY.valueOf(),
      _VariousId3a: options.otherAbilityId3,
      _VariousId3b: 0,
      _VariousId3c: 0,
    } : {}),
  });
};
