import {UnitType} from '../../../../enums/unitType';
import {AbilityInfo} from '../../../unit/ability';
import {AttackingSkillInfo} from '../../../unit/skill/atk';
import {SkillInfoBundle} from '../../../unit/skill/common';
import {BasicDragonInfo} from '../basic/dragon';


export type DragonAbilityInfo = AbilityInfo & {
  coAbility: never,
};

export type FullDragonInfo = {
  type: UnitType.DRAGON,
  basic: BasicDragonInfo,
  skill: SkillInfoBundle<AttackingSkillInfo>,
  ability: DragonAbilityInfo,
};
