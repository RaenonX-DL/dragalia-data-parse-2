import {Status} from '../../../types/enums/status';
import {AssetManager} from '../../manager/main';
import {MasterEntry} from '../base/entry';
import {EnemyParamOriginal} from './type';


export class EnemyParamEntry extends MasterEntry<number> {
  private readonly _dataId: number;

  readonly hp: number;
  readonly def: number;

  readonly gauge: {
    toBk: number;
  };

  readonly resistance: {[status in Status]?: number};

  readonly branch: {
    form2: number
  };

  constructor(entry: EnemyParamOriginal) {
    super(entry);

    this._dataId = entry._DataId;

    this.hp = entry._HP;
    this.def = entry._Def;

    this.gauge = {
      toBk: entry._BaseBreak,
    };

    this.resistance = {
      [Status.POISON]: entry._RegistAbnormalRate01,
      [Status.BURN]: entry._RegistAbnormalRate02,
      [Status.FREEZE]: entry._RegistAbnormalRate03,
      [Status.PARALYZE]: entry._RegistAbnormalRate04,
      [Status.BLIND]: entry._RegistAbnormalRate05,
      [Status.STUN]: entry._RegistAbnormalRate06,
      [Status.CURSE]: entry._RegistAbnormalRate07,
      [Status.BOG]: entry._RegistAbnormalRate08,
      [Status.SLEEP]: entry._RegistAbnormalRate09,
      [Status.FROSTBITE]: entry._RegistAbnormalRate10,
      [Status.FLASHBURN]: entry._RegistAbnormalRate11,
      [Status.STORMLASH]: entry._RegistAbnormalRate12,
      [Status.SHADOWBLIGHT]: entry._RegistAbnormalRate13,
      [Status.SCORCHREND]: entry._RegistAbnormalRate14,
    };

    this.branch = {
      form2: entry._Form2nd,
    };
  }

  getBkDefRate(manager: AssetManager): number {
    return manager.master.enemy.data.getDataOfIdThrow(this._dataId).bkRate.def;
  }

  getResistancePctOf(status: Status): number {
    return this.resistance[status] || 0;
  }
}
