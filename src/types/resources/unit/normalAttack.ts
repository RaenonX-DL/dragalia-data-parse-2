import {ConditionComposite} from '../../enums/condition';
import {CancelUnit} from './cancel';
import {AssetText} from './text';


export type AutoCombo = {
  cancelActions: CancelUnit[],
  cancelToNextSec: number | null,
  mods: number[],
  odRate: number[],
  crisisMod: number[],
  sp: number,
  utp: number,
};

export type AutoChainBranch = {
  conditions: ConditionComposite,
  combos: AutoCombo[],
  hasUtp: boolean,
  hasCrisis: boolean,
};

export type AutoChain = {
  chainName: AssetText,
  chain: AutoChainBranch[],
};
