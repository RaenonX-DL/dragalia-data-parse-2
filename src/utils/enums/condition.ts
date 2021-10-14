import {Condition} from '../../types/enums/condition';
import {ElementFlag} from '../../types/enums/element';
import {Status} from '../../types/enums/status';


export const TargetStatusCondition: {[status in Status]?: Condition} = {
  [Status.POISON]: 'TARGET_POISONED',
  [Status.BURN]: 'TARGET_BURNED',
  [Status.FREEZE]: 'TARGET_FROZEN',
  [Status.PARALYZE]: 'TARGET_PARALYZED',
  [Status.BLIND]: 'TARGET_BLINDED',
  [Status.STUN]: 'TARGET_STUNNED',
  [Status.CURSE]: 'TARGET_CURSED',
  [Status.BOG]: 'TARGET_BOGGED',
  [Status.SLEEP]: 'TARGET_SLEPT',
  [Status.FROSTBITE]: 'TARGET_FROSTBITTEN',
  [Status.FLASHBURN]: 'TARGET_FLASHBURNED',
  [Status.STORMLASH]: 'TARGET_STORMLASHED',
  [Status.SHADOWBLIGHT]: 'TARGET_SHADOWBLIGHTED',
  [Status.SCORCHREND]: 'TARGET_SCORCHRENT',
};

export const TargetElementCondition: {[element in ElementFlag]?: Condition} = {
  [ElementFlag.FLAME]: 'TARGET_FLAME',
  [ElementFlag.WATER]: 'TARGET_WATER',
  [ElementFlag.WIND]: 'TARGET_WIND',
  [ElementFlag.LIGHT]: 'TARGET_LIGHT',
  [ElementFlag.SHADOW]: 'TARGET_SHADOW',
};

export const CurrentComboCountCondition: {[combo in number]?: Condition} = {
  0: 'COMBO_GTE_0',
  5: 'COMBO_GTE_5',
  10: 'COMBO_GTE_10',
  15: 'COMBO_GTE_15',
  20: 'COMBO_GTE_20',
  25: 'COMBO_GTE_25',
  30: 'COMBO_GTE_30',
  50: 'COMBO_GTE_50',
};
