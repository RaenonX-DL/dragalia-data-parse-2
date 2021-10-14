import {Status} from '../../../types/enums/status';
import {MasterOriginal} from '../base/type';


export type HitAttrOriginal = MasterOriginal<string> & {
  _TargetGroup: number,
  _DamageAdjustment: number,
  _ToOdDmgRate: number,
  _ToBreakDmgRate: number,
  _CrisisLimitRate: number,
  _KillerState1: Status,
  _KillerState2: Status,
  _KillerState3: Status,
  _KillerStateDamageRate: number,
  _KillerStateDamageRateCurveDependsOnHitCount: string,
  _DamageUpRateByBuffCount: number,
  _DamageUpDataByBuffCount: number,
  _ActionCondition1: number,
};
