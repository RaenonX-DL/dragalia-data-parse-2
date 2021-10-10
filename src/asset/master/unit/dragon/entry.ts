import {UnitEntry} from '../entry';
import {DragonOriginal} from './type';


export class DragonEntry extends UnitEntry {
  constructor(entry: DragonOriginal) {
    super(entry);
  }

  get iconName(): string {
    return `${this.baseId}_${this.variationId.toString().padStart(2, '0')}`;
  }
}
