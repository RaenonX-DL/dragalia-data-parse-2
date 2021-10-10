import {UnitEntry} from '../entry';
import {CharaOriginal} from './type';


export class CharaEntry extends UnitEntry {
  ssId: number;
  ssCost: number;

  constructor(entry: CharaOriginal) {
    super(entry);

    this.ssId = entry._EditSkillId;
    this.ssCost = entry._EditSkillCost;
  }
}
