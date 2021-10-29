import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {EnemyParamEntry} from './entry';
import {EnemyParamOriginal} from './type';


export class EnemyParamAsset extends MasterAsset<number, EnemyParamOriginal, EnemyParamEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'EnemyParam',
      transform: (entry) => new EnemyParamEntry(entry),
    });
  }
}
