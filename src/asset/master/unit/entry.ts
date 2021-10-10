import {Element} from '../../../types/enums/element';
import {AssetText} from '../../../types/resources/unit/text';
import {AssetManager} from '../../manager/main';
import {MasterEntry} from '../base/entry';
import {UnitOriginal} from './type';


export abstract class UnitEntry extends MasterEntry<number> {
  id: number;
  nameLabels: [string, string];
  element: Element;
  rarity: number;
  baseId: number;
  variationId: number;
  cvLabel: {
    en: string,
    jp: string,
  };
  releaseEpoch: number;
  isPlayable: boolean;

  protected constructor(entry: UnitOriginal) {
    super(entry);

    this.id = entry._Id;
    this.nameLabels = [entry._SecondName, entry._Name];
    this.rarity = entry._Rarity;
    this.element = entry._ElementalType;
    this.baseId = entry._BaseId;
    this.variationId = entry._VariationId;
    this.cvLabel = {
      en: entry._CvInfoEn,
      jp: entry._CvInfo,
    };
    // Release start date has to be patched to treat as UTC
    this.releaseEpoch = Date.parse(`${entry._ReleaseStartDate}+00:00`) / 1000;
    this.isPlayable = entry._IsPlayable;
  }

  abstract readonly iconName: string;

  getName(manager: AssetManager): AssetText {
    try {
      return manager.master.text.getAssetText(this.nameLabels[0]);
    } catch (e) {
      return manager.master.text.getAssetText(this.nameLabels[1]);
    }
  }
}
