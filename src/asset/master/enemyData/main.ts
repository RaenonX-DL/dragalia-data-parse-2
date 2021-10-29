import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {EnemyDataEntry} from './entry';
import {EnemyDataOriginal} from './type';


export class EnemyDataAsset extends MasterAsset<number, EnemyDataOriginal, EnemyDataEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'EnemyData',
      transform: (entry) => new EnemyDataEntry(entry),
    });
  }
}
