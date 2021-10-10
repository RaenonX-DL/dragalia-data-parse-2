import {MasterEntry} from '../base/entry';
import {ActionCondOriginal} from './type';


export class ActionCondEntry extends MasterEntry<number> {
  regenSpPct: number;

  constructor(entry: ActionCondOriginal) {
    super(entry);

    this.regenSpPct = entry._UniqueRegeneSp01 || entry._AutoRegeneS1 ?
      -entry._SlipDamageRatio * 100 / entry._SlipDamageIntervalSec :
      0;
  }
}
