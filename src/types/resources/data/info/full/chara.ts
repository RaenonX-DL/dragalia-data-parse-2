import {UnitType} from '../../../../enums/unitType';
import {AbilityInfo} from '../../../unit/ability';
import {AttackingSkillInfo} from '../../../unit/skill/atk';
import {SkillInfoBundle} from '../../../unit/skill/common';
import {BasicCharaInfo} from '../basic/chara';


export type CharaAbilityInfo = AbilityInfo;

export type FullCharaInfo = {
  type: UnitType.CHARACTER,
  basic: BasicCharaInfo,
  skill: SkillInfoBundle<AttackingSkillInfo>,
  ability: CharaAbilityInfo,
};
