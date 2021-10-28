import {EfficacyType} from '../../../types/enums/efficacy';
import {ElementFlag} from '../../../types/enums/element';
import {Status} from '../../../types/enums/status';
import {MasterEntry} from '../base/entry';
import {ActionCondOriginal} from './type';


export class ActionCondEntry extends MasterEntry<number> {
  readonly infliction: Status;
  readonly efficacy: EfficacyType;
  readonly target: ElementFlag;
  readonly probabilityPct: number;
  readonly duration: {
    readonly sec: number,
    readonly count: number,
    readonly maxCount: number,
  };
  readonly regenSpPct: number;

  constructor(entry: ActionCondOriginal) {
    super(entry);

    this.infliction = entry._Type;
    this.efficacy = entry._EfficacyType;
    this.target = entry._TargetElemental;
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
