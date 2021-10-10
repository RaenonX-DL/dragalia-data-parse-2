import {UnitType} from '../../../types/enums/unitType';
import {OfficialAsset, OfficialAssetInitOptions} from '../base/main';
import {UnitEntry} from './entry';
import {UnitOriginal} from './type';


export class UnitAsset<
  T extends UnitType,
  D extends UnitOriginal,
  E extends UnitEntry<T>
> extends OfficialAsset<number, D, E> {
  constructor(options: OfficialAssetInitOptions<D, E>) {
    super(options);
  }
}
