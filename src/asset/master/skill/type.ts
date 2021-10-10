import {MasterEntry, OfficialEntry} from '../base/type';


export type SkillOriginal = OfficialEntry<number> & {
  _Name: string,
  _SpLv4: number,
  _SpLv4Edit: number,
};

export type SkillAssetEntry = MasterEntry<number> & {
  nameLabel: string,
  sp: number,
  ssSp: number,
};
