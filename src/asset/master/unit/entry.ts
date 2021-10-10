import {Element} from '../../../types/enums/element';
import {MasterEntry} from '../base/entry';
import {UnitOriginal} from './type';


export class UnitEntry extends MasterEntry<number> {
  id: number;
  element: Element;
  rarity: number;
  cvLabel: {
    en: string,
    jp: string,
  };
  releaseEpoch: number;
  isPlayable: boolean;

  constructor(entry: UnitOriginal) {
    super(entry);

    this.id = entry._Id;
    this.element = entry._ElementalType;
    this.rarity = entry._Rarity;
    this.cvLabel = {
      en: entry._CvInfoEn,
      jp: entry._CvInfo,
    };
    this.releaseEpoch = Date.parse(entry._ReleaseStartDate) / 1000;
    this.isPlayable = entry._IsPlayable;
  }
}
