import {ExAbility} from './exAbility';
import {OfficialAbilityInfo} from './official';


export type AbilityInfo = {
  passive: Array<OfficialAbilityInfo>,
  coAbility?: {
    global: OfficialAbilityInfo,
    chained: OfficialAbilityInfo,
    parsed: ExAbility,
  }
};
