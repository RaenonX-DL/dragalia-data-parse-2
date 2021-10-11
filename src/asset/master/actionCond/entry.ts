import {EfficacyType} from '../../../types/enums/efficacy';
import {Status} from '../../../types/enums/status';
import {MasterEntry} from '../base/entry';
import {ActionCondOriginal} from './type';


export class ActionCondEntry extends MasterEntry<number> {
  infliction: Status;
  efficacy: EfficacyType;
  probabilityPct: number;
  duration: {
    sec: number,
    count: number,
    maxCount: number,
  };
  regenSpPct: number;

  constructor(entry: ActionCondOriginal) {
    super(entry);

    this.infliction = entry._Type;
    this.efficacy = entry._EfficacyType;
    this.probabilityPct = entry._Rate;
    this.duration = {
      sec: entry._DurationSec,
      count: entry._DurationNum,
      maxCount: entry._DurationNum ?
        (entry._IsAddDurationNum ? entry._MaxDurationNum : 1) :
        (entry._OverwriteGroupId || entry._OverwriteIdenticalOwner ? 1 : 0),
    };
    this.regenSpPct = entry._UniqueRegeneSp01 || entry._AutoRegeneS1 ?
      -entry._SlipDamageRatio * 100 / entry._SlipDamageIntervalSec :
      0;
  }
}
