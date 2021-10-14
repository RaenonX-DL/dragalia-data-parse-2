import {AssetManager} from '../../../asset/manager/main';
import {ActionCondEntry} from '../../../asset/master/actionCond/entry';
import {HitAttrEntry} from '../../../asset/master/hitAttr/entry';
import {TargetSimple} from '../../../types/enums/target';
import {AfflictionUnit} from '../../../types/resources/unit/skill/atk';
import {isAbnormalStatus} from '../../../utils/enums/status';


type HitDataInitOptions = {
  manager: AssetManager,
  hitAttr: HitAttrEntry,
};

export class HitData {
  hitAttr: HitAttrEntry;

  actionCond: ActionCondEntry | null;

  constructor({manager, hitAttr}: HitDataInitOptions) {
    this.hitAttr = hitAttr;

    this.actionCond = hitAttr.actionCondId ?
      manager.master.actionCond.getDataOfIdThrow(hitAttr.actionCondId) :
      null;
  }

  toAfflictionUnit(): AfflictionUnit | null {
    if (
      !this.actionCond ||
      this.hitAttr.targetSimple === TargetSimple.ENEMY ||
      !isAbnormalStatus(this.actionCond.infliction)
    ) {
      return null;
    }

    return {
      status: this.actionCond.infliction,
      probabilityPct: this.actionCond.probabilityPct,
      duration: this.actionCond.duration.sec,
      stackable: this.actionCond.duration.maxCount !== 1,
    };
  }
}
