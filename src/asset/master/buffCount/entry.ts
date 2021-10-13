import {MasterEntry} from '../base/entry';
import {BuffCountOriginal} from './type';


export class BuffCountEntry extends MasterEntry<number> {
  limit: number;
  base: number;

  constructor(entry: BuffCountOriginal) {
    super(entry);

    this.limit = entry._LimitRate;
    this.base = entry._BaseRate;
  }
}
