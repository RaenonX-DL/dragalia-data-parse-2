import {Element} from '../../../types/enums/element';
import {UnitType} from '../../../types/enums/unitType';
import {UnitAssetEntry} from './type';


export class UnitEntry<T extends UnitType> implements UnitAssetEntry<T> {
  id: number;
  unitType: T;
  element: Element;
  rarity: number;
  cvLabel: {
    en: string,
    jp: string,
  };
  releaseEpoch: number;
  isPlayable: boolean;

  constructor(entry: UnitAssetEntry<T>) {
    this.id = entry.id;
    this.unitType = entry.unitType;
    this.element = entry.element;
    this.rarity = entry.rarity;
    this.cvLabel = entry.cvLabel;
    this.releaseEpoch = entry.releaseEpoch;
    this.isPlayable = entry.isPlayable;
  }
}
