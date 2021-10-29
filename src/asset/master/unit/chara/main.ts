import {GeneralMasterAssetInitOptions} from '../../base/type';
import {UnitAsset} from '../asset';
import {CharaEntry} from './entry';
import {CharaOriginal} from './type';


export class CharaAsset extends UnitAsset<CharaOriginal, CharaEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'CharaData',
      transform: (entry) => new CharaEntry(entry),
    });
  }
}
