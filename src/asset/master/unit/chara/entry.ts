import {UnitEntry} from '../entry';
import {CharaOriginal} from './type';


export class CharaEntry extends UnitEntry {
  readonly ssId: number;
  readonly ssCost: number;

  constructor(entry: CharaOriginal) {
    super(entry);

    this.ssId = entry._EditSkillId;
    this.ssCost = entry._EditSkillCost;
  }

  get iconName(): string {
    return `${this.baseId}_${this.variationId.toString().padStart(2, '0')}_r${this.rarity.toString().padStart(2, '0')}`;
  }
}
