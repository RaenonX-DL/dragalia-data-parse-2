import {Status} from '../../../types/enums/status';
import {Target, TargetSimple, TargetToSimple} from '../../../types/enums/target';
import {CurveObject, parseCurveObject} from '../../../utils/curve';
import {MasterEntry} from '../base/entry';
import {HitAttrOriginal} from './type';


export class HitAttrEntry extends MasterEntry<string> {
  target: Target;
  mod: number;

  actionCondId: number;

  killer: {
    status: Array<Status>,
    rate: {
      fixed: number,
      combo: CurveObject | null,
    },
  };

  boost: {
    state: {
      od: number,
      bk: number,
    }
  };

  constructor(entry: HitAttrOriginal) {
    super(entry);

    this.target = entry._TargetGroup;
    this.mod = entry._DamageAdjustment;
    this.actionCondId = entry._ActionCondition1;
    this.killer = {
      status: [entry._KillerState1, entry._KillerState2, entry._KillerState3]
        .filter((status) => status !== Status.NONE),
      rate: {
        fixed: entry._KillerStateDamageRate,
        combo: parseCurveObject(entry._KillerStateDamageRateCurveDependsOnHitCount),
      },
    };
    this.boost = {
      state: {
        od: entry._ToOdDmgRate,
        bk: entry._ToBreakDmgRate,
      },
    };
  }

  get targetSimple(): TargetSimple {
    return TargetToSimple[this.target];
  }

  get boostInOd(): boolean {
    return this.mod > 0 && this.boost.state.od !== 1;
  }
}
