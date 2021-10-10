import {Element} from '../../../types/enums/element';
import {UnitType} from '../../../types/enums/unitType';
import {transformOfficialEntry} from '../base/transform';
import {UnitAssetEntry, UnitOriginal} from './type';


export const transformUnitEntry = <T extends UnitType>(type: T, entry: UnitOriginal): UnitAssetEntry<T> => ({
  ...transformOfficialEntry(entry),
  unitType: type,
  element: Element[Element[entry._ElementalType] as keyof typeof Element],
  rarity: entry._Rarity,
  cvLabel: {
    en: entry._CvInfoEn,
    jp: entry._CvInfo,
  },
  releaseEpoch: Date.parse(entry._ReleaseStartDate) / 1000,
  isPlayable: entry._IsPlayable,
});
