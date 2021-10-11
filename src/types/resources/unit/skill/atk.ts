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
  probabilityPct: number,
  duration: number,
  stackable: boolean
};

export type ModsUnit = {
  damage: number,
  crisis: number,
};

export type TimingData = {
  earliest: number,
};

export type AttackingSkillInfoExclusive = {
  mods: Array<ModsUnit>,
  afflictions: Array<AfflictionUnit>,
  boost: {
    count: BuffCountBoost,
    field: BuffFieldBoost,
  }
  dispel: boolean,
  timing: TimingData,
  cancelActions: Array<CancelUnit>,
};

export type AttackingSkillInfo = CommonSkillInfo & AttackingSkillInfoExclusive;
