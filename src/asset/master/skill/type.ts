import {MasterEntry, OfficialEntry} from '../types';


export type SkillOriginal = OfficialEntry<number> & {
  _Name: string,
  _SpLv4: number,
  _SpLv4Edit: number,
};

export type SkillEntry = MasterEntry<number> & {
  nameLabel: string,
  sp: number,
  ssSp: number,
};
