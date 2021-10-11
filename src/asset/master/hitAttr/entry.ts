import {MasterEntry} from '../base/entry';
import {HitAttrOriginal} from './type';


export class HitAttrEntry extends MasterEntry<string> {
  mod: number;
  actionCondId: number;

  constructor(entry: HitAttrOriginal) {
    super(entry);

    this.mod = entry._DamageAdjustment;
    this.actionCondId = entry._ActionCondition1;
  }
}
