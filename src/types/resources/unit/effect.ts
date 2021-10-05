import {Parameter} from '../../enums/param';
import {ParameterUnit} from '../../enums/paramUnit';
import {Status} from '../../enums/status';
import {Target} from '../../enums/target';


export type Effect = {
  status: Status,
  target: Target,
  param: Parameter,
  paramUnit: ParameterUnit,
  probabilityPct: number,
  rate: number,
  slipInterval: number,
  slipDamageMod: number,
  durationCount: number,
  durationSec: number,
  maxStackCount: number,
  stackable: boolean
};
