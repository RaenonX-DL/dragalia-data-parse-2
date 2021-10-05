import {ExAbility} from '../unit/exAbility';
import {BasicCharaInfo} from './info/basic/chara';


export type CharaExAbility = ExAbility & {
  chara: BasicCharaInfo,
};
