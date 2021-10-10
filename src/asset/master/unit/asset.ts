import {MasterAsset, MasterAssetInitOptions} from '../base/main';
import {UnitEntry} from './entry';
import {UnitOriginal} from './type';


export class UnitAsset<D extends UnitOriginal, E extends UnitEntry> extends MasterAsset<number, D, E> {
  constructor(options: MasterAssetInitOptions<D, E>) {
    super(options);
  }
}
