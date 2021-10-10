import {transformOfficialEntry} from '../base/transform';
import {SkillEntry, SkillOriginal} from './type';


export const transformSkillEntry = (entry: SkillOriginal): SkillEntry => ({
  ...transformOfficialEntry(entry),
  nameLabel: entry._Name,
  sp: entry._SpLv4,
  ssSp: entry._SpLv4Edit,
});
