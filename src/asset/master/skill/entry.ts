import {MasterEntry} from '../base/entry';
import {SkillOriginal} from './type';


export class SkillEntry extends MasterEntry<number> {
  nameLabel: string;
  sp: number;
  ssSp: number;
  abilityId: number;

  constructor(entry: SkillOriginal) {
    super(entry);

    this.nameLabel = entry._Name;
    this.sp = entry._SpLv4;
    this.ssSp = entry._SpLv4Edit;
    this.abilityId = entry._Ability4;
  }
}
