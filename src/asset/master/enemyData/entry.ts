import {MasterEntry} from '../base/entry';
import {EnemyDataOriginal} from './type';


export class EnemyDataEntry extends MasterEntry<number> {
  readonly bkRate: {
    readonly atk: number,
    readonly def: number,
  };

  constructor(entry: EnemyDataOriginal) {
    super(entry);

    this.bkRate = {
      atk: entry._BreakAtkRate,
      def: entry._BreakDefRate,
    };
  }
}
