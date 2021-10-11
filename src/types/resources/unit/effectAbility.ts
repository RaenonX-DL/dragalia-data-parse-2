import {ConditionComposite} from '../../enums/condition';
import {TargetAction} from '../../enums/targetAction';
import {Effect} from './effect';


export type AbilityEffect = Effect & {
  sourceAbilityId: number,
  conditions: ConditionComposite,
  cooldownSec: number,
  maxOccurrences: number,
  rateMax: number,
  targetAction: TargetAction,
};
