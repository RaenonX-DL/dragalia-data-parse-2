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
  boost: {
    buff: {
      count: BuffCountBoost,
    },
    enmity: number,
  },
};

export type TimingData = {
  earliest: number,
};

export type AttackingSkillInfoExclusive = {
  mods: ModsUnit[],
  afflictions: AfflictionUnit[],
  boost: {
    buff: {
      field: BuffFieldBoost,
    }
  }
  dispel: boolean,
  timing: TimingData,
  cancelActions: CancelUnit[],
};

export type AttackingSkillInfo = CommonSkillInfo & AttackingSkillInfoExclusive;
