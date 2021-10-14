export type Condition =
  'NONE' |
  // region 1xx - Target
  // region Afflicted
  'TARGET_POISONED' |
  'TARGET_BURNED' |
  'TARGET_FROZEN' |
  'TARGET_PARALYZED' |
  'TARGET_BLINDED' |
  'TARGET_STUNNED' |
  'TARGET_CURSED' |
  'TARGET_BOGGED' |
  'TARGET_SLEPT' |
  'TARGET_FROSTBITTEN' |
  'TARGET_FLASHBURNED' |
  'TARGET_STORMLASHED' |
  'TARGET_SHADOWBLIGHTED' |
  'TARGET_SCORCHRENT' |
  // endregion

  // region Element
  'TARGET_FLAME' |
  'TARGET_WATER' |
  'TARGET_WIND' |
  'TARGET_LIGHT' |
  'TARGET_SHADOW' |
  'TARGET_ELEM_NEUTRAL' |
  'TARGET_ELEM_WEAK' |
  'TARGET_ELEM_EFFECTIVE' |
  // endregion

  // region State
  'TARGET_BK_STATE' |
  'TARGET_OD_STATE' |
  // endregion

  // region Abnormal
  'TARGET_AFFLICTED' |
  'TARGET_DEF_DOWN' |
  'TARGET_BUFFED' |
  'TARGET_DEBUFFED' |
  'TARGET_ATK_OR_DEF_DOWN' |
  'TARGET_BLEEDING' |
  // endregion
  // endregion

  // region 2xx - Self status (general)
  // region HP
  'SELF_HP_1' |
  'SELF_HP_EQ_10' |
  'SELF_HP_EQ_20' |
  'SELF_HP_EQ_30' |
  'SELF_HP_EQ_50' |
  'SELF_HP_EQ_70' |
  'SELF_HP_FULL' |

  'SELF_HP_LT_40' |
  'SELF_HP_LT_30' |
  'SELF_HP_GTE_30' |
  'SELF_HP_GTE_40' |
  'SELF_HP_GTE_50' |
  'SELF_HP_GTE_60' |
  'SELF_HP_GTE_70' |
  'SELF_HP_GTE_80' |
  'SELF_HP_GTE_85' |
  // endregion

  // region Combo count
  'COMBO_GTE_0' |
  'COMBO_GTE_5' |
  'COMBO_GTE_10' |
  'COMBO_GTE_15' |
  'COMBO_GTE_20' |
  'COMBO_GTE_25' |
  'COMBO_GTE_30' |
  'COMBO_GTE_50' |
  // endregion

  // region Buff count
  'SELF_BUFF_0' |
  'SELF_BUFF_1' |
  'SELF_BUFF_2' |
  'SELF_BUFF_3' |
  'SELF_BUFF_4' |
  'SELF_BUFF_5' |
  'SELF_BUFF_6' |
  'SELF_BUFF_7' |
  'SELF_BUFF_8' |
  'SELF_BUFF_9' |
  'SELF_BUFF_10' |
  'SELF_BUFF_15' |
  'SELF_BUFF_20' |
  'SELF_BUFF_25' |
  'SELF_BUFF_30' |
  'SELF_BUFF_35' |
  'SELF_BUFF_40' |
  'SELF_BUFF_45' |
  'SELF_BUFF_50' |
  // endregion

  // region In buff field
  'IN_BUFF_FIELD_BY_SELF_0' |
  'IN_BUFF_FIELD_BY_SELF_1' |
  'IN_BUFF_FIELD_BY_SELF_2' |
  'IN_BUFF_FIELD_BY_ALLY_0' |
  'IN_BUFF_FIELD_BY_ALLY_1' |
  'IN_BUFF_FIELD_BY_ALLY_2' |
  'IN_BUFF_FIELD_BY_ALLY_3' |
  // endregion

  // region Weapon type
  'WEAPON_SWORD' |
  'WEAPON_BLADE' |
  'WEAPON_DAGGER' |
  'WEAPON_AXE' |
  'WEAPON_LANCE' |
  'WEAPON_BOW' |
  'WEAPON_ROD' |
  'WEAPON_STAFF' |
  'WEAPON_MANACASTER' |
  // endregion
  // endregion

  // region 3xx - Skill animation/effect
  // region Bullet hit count
  'BULLET_HIT_1' |
  'BULLET_HIT_2' |
  'BULLET_HIT_3' |
  'BULLET_HIT_4' |
  'BULLET_HIT_5' |
  'BULLET_HIT_6' |
  'BULLET_HIT_7' |
  'BULLET_HIT_8' |
  'BULLET_HIT_9' |
  'BULLET_HIT_10' |
  // endregion

  // region Count of teammates covered
  'COVER_TEAMMATE_0' |
  'COVER_TEAMMATE_1' |
  'COVER_TEAMMATE_2' |
  'COVER_TEAMMATE_3' |
  // endregion

  // region Bullets left on the map
  'BUTTERFLIES_ON_MAP_0' |
  'BUTTERFLIES_ON_MAP_1' |
  'BUTTERFLIES_ON_MAP_2' |
  'BUTTERFLIES_ON_MAP_3' |
  'BUTTERFLIES_ON_MAP_4' |
  'BUTTERFLIES_ON_MAP_5' |
  'BUTTERFLIES_ON_MAP_6' |
  'BUTTERFLIES_ON_MAP_7' |
  'BUTTERFLIES_ON_MAP_8' |
  'BUTTERFLIES_ON_MAP_9' |
  // endregion

  // region Additional inputs by user
  'ADDL_INPUT_0' |
  'ADDL_INPUT_1' |
  'ADDL_INPUT_2' |
  'ADDL_INPUT_3' |
  'ADDL_INPUT_4' |
  'ADDL_INPUT_5' |
  'ADDL_INPUT_6' |
  'ADDL_INPUT_7' |
  'ADDL_INPUT_8' |
  'ADDL_INPUT_9' |
  // endregion

  // region Miscellaneous variant
  'MARK_EXPLODES' |
  'COUNTER_RED_ATTACK' |
  // endregion
  // endregion

  // region 4xx - Self status (special)
  // region Action condition (Sigil released, lapis cards, etc.)
  'SELF_SIGIL_LOCKED' | // ACID: 1152
  'SELF_SIGIL_RELEASED' |
  'SELF_SMIKOTO_CEL_SUN_WAVE' | // ACID: 977 (Sun) / 978 (Wave)
  'SELF_GLEONIDAS_FULL_STACKS' | // ACID: 1380
  'SELF_SEIMEI_SHIKIGAMI_LV_1' |
  'SELF_SEIMEI_SHIKIGAMI_LV_2' |
  'SELF_LAPIS_CARD_0' | // ACID: 1319
  'SELF_LAPIS_CARD_1' | // ACID: 1319
  'SELF_LAPIS_CARD_2' | // ACID: 1319
  'SELF_LAPIS_CARD_3' | // ACID: 1319
  'SELF_SMYM_COMBO_NOT_BOOSTED' | // ACID: 1768
  'SELF_SMYM_COMBO_BOOSTED' | // ACID: 1768
  'SELF_GMASCULA_S1_LV1' | // ACID: 1750
  'SELF_GMASCULA_S1_LV2' | // ACID: 1751
  'SELF_GMASCULA_S1_LV3' | // ACID: 1752
  'SELF_FJOACHIM_CANCEL_S2' |
  // endregion

  // region Gauge-related
  'SELF_GAUGE_FILLED_0' |
  'SELF_GAUGE_FILLED_1' |
  'SELF_GAUGE_FILLED_2' |
  // endregion

  // region Dragon / Shapeshift
  'SELF_SHAPESHIFTED_1_TIME' |
  'SELF_SHAPESHIFTED_2_TIMES' |
  'SELF_SHAPESHIFTED_3_TIMES' |
  'SELF_SHAPESHIFTED_1_TIME_IN_DRAGON' |
  'SELF_SHAPESHIFTED_2_TIMES_IN_DRAGON' |
  'SELF_SHAPESHIFT_COMPLETED' |
  // endregion

  // region Skill usage
  'SKILL_USED_S1' |
  'SKILL_USED_S2' |
  'SKILL_USED_ALL' |
  // endregion

  // region Special (Energized, inspired, amp, mode switch)
  'SELF_ENERGIZED' |
  'SELF_TEAM_AMP_UP' |
  'SELF_PASSIVE_ENHANCED' |
  'MODE_0' |
  'MODE_1' |
  'MODE_2' |
  'MODE_3' |
  // endregion
  // endregion

  // region 8xx - Trigger
  // region Effect triggered by self
  // region Miscellaneous
  'ON_BUFFED_DEF' |
  'ON_REVIVED' |
  'ON_ENERGY_LV_UP' |
  'ON_ENTERED_BUFF_FIELD' |
  'ON_HEALED' |
  'ON_DODGE_SUCCESS' |
  // endregion

  // region HP change
  'ON_HP_LT_30' |
  'ON_HP_LT_40' |
  'ON_HP_LT_60' |
  'ON_HP_GTE_40' |
  'ON_HP_GTE_60' |
  // endregion

  // region Target on Enemy
  'ON_CAUSE_ENEMY_DEF_DOWN' |
  // endregion

  // region Infliction
  'ON_INFLICTED_POISON' |
  'ON_INFLICTED_BURN' |
  'ON_INFLICTED_FREEZE' |
  'ON_INFLICTED_PARALYZE' |
  'ON_INFLICTED_BLIND' |
  'ON_INFLICTED_STUN' |
  'ON_INFLICTED_CURSE' |
  'ON_INFLICTED_BOG' |
  'ON_INFLICTED_SLEEP' |
  'ON_INFLICTED_FROSTBITE' |
  'ON_INFLICTED_FLASHBURN' |
  'ON_INFLICTED_STORMLASH' |
  'ON_INFLICTED_SHADOWBLIGHT' |
  'ON_INFLICTED_SCORCHREND' |
  // endregion

  // region Combo count
  'ON_COMBO_RESET' |
  'ON_COMBO_GTE_10' |
  'ON_COMBO_DIV_BY_1_FS' |
  'ON_COMBO_DIV_BY_3_FS' |
  'ON_COMBO_DIV_BY_2_HUMAN_S1' |
  'ON_COMBO_DIV_BY_3_HUMAN_S1' |
  'ON_COMBO_DIV_BY_10_HUMAN_S1' |
  'ON_COMBO_DIV_BY_10' |
  'ON_COMBO_DIV_BY_15' |
  'ON_COMBO_DIV_BY_20' |
  'ON_COMBO_DIV_BY_30' |
  'ON_COMBO_DIV_BY_35' |
  'ON_COMBO_DIV_BY_50' |
  'ON_COMBO_DIV_BY_100' |
  // endregion

  // endregion

  // region Effect triggered by others
  'ON_HIT' |
  'ON_HIT_BY_POISON' |
  'ON_HIT_BY_BURN' |
  'ON_HIT_BY_FREEZE' |
  'ON_HIT_BY_PARALYZE' |
  'ON_HIT_BY_BLIND' |
  'ON_HIT_BY_STUN' |
  'ON_HIT_BY_CURSE' |
  'ON_HIT_BY_BOG' |
  'ON_HIT_BY_SLEEP' |
  'ON_HIT_BY_FROSTBITE' |
  'ON_HIT_BY_FLASHBURN' |
  'ON_HIT_BY_STORMLASH' |
  'ON_HIT_BY_SHADOWBLIGHT' |
  'ON_HIT_BY_SCORCHREND' |
  'ON_HIT_BY_ANY_AFFLICTION' |
  // endregion
  // endregion

  // region 9xx - Miscellaneous (e.g. quest start)
  'QUEST_START' |
  // region Probabilistic
  'PROB_25' |
  'PROB_33' |
  'PROB_50' |
  'PROB_67' |
  'PROB_75';
// endregion
// endregion

export type ConditionComposite = Condition[];
