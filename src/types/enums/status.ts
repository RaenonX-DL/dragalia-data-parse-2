export enum Status {
  NONE = 0,
  // Afflictions
  POISON = 1,
  BURN = 2,
  FREEZE = 3,
  PARALYZE = 4,
  BLIND = 5,
  STUN = 6,
  CURSE = 7,
  REBORN = 8, // `AbsRebirth = 8` officially
  BOG = 9,
  SLEEP = 10,
  FROSTBITE = 11,
  FLASHBURN = 12,
  STORMLASH = 13,
  SHADOWBLIGHT = 14,
  SCORCHREND = 15,
  // Afflictions special
  AFFLICTED = 99,
  // Status down
  HP_DOWNED = 101,
  ATK_DOWNED = 102,
  DEF_DOWNED = 103,
  CRT_DOWNED = 104,
  SKILL_DMG_DOWNED = 105,
  FS_DMG_DOWNED = 106,
  RP_DOWNED = 107,
  BLEEDING = 108,
  // Status change
  BUFFED_OR_DEBUFFED = 197,
  BUFFED = 198,
  DEBUFFED = 199,
  // State
  BK_STATE = 201,
}
