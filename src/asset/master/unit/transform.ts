import {Element} from '../../../types/enums/element';
import {transformOfficialEntry} from '../transform';
import {UnitEntry, UnitOriginal} from './type';


export const transformUnitEntry = (entry: UnitOriginal): UnitEntry => ({
  ...transformOfficialEntry(entry),
  element: Element[Element[entry._ElementalType] as keyof typeof Element],
  rarity: entry._Rarity,
  cvLabel: {
    en: entry._CvInfoEn,
    jp: entry._CvInfo,
  },
  releaseEpoch: Date.parse(entry._ReleaseStartDate) / 1000,
  isPlayable: entry._IsPlayable,
});
