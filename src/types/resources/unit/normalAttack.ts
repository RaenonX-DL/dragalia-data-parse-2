import {Condition} from '../../enums/condition';
import {CancelUnit} from './cancel';
import {AssetText} from './text';


export type AutoCombo = {
  cancelActions: Array<CancelUnit>,
  cancelToNextSec: number | null,
  mods: Array<number>,
  odRate: Array<number>,
  crisisMod: Array<number>,
  sp: number,
  utp: number,
};

export type AutoChainBranch = {
  conditions: Array<Condition>,
  combos: Array<AutoCombo>,
  hasUtp: boolean,
  hasCrisis: boolean,
};

export type AutoChain = {
  chainName: AssetText,
  chain: Array<AutoChainBranch>,
};
