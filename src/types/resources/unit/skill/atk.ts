import {Status} from '../../../enums/status';
import {CancelUnit} from '../cancel';
import {CommonSkillInfo} from './common';


export type BuffCountBoost = {
  each: number,
  inEffect: number,
  limit: number,
};

export type BuffFieldBoost = {
  self: number,
  ally: number,
};

export type AfflictionUnit = {
  status: Status,
  actionTime: number,
  probabilityPct: number,
  duration: number,
  stackable: boolean
};

export type AttackingSkillInfoExclusive = {
  modsMax: Array<number>,
  crisisMax: Array<number>,
  hitsMax: number,
  afflictions: Array<AfflictionUnit>,
  buffCountBoost: Array<BuffCountBoost>,
  buffZoneBoost: BuffFieldBoost,
  dispelMax: boolean,
  dispelTimingMax: Array<number>,
  hitTimingSecMax: Array<number>,
  cancelActionsMax: Array<CancelUnit>,
};

export type AttackingSkillInfo = CommonSkillInfo & AttackingSkillInfoExclusive;
