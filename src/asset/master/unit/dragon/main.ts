import {Environment} from '../../../../process/env';
import {UnitAsset} from '../asset';
import {transformDragonEntry} from './transform';
import {DragonEntry, DragonOriginal} from './type';


export class DragonAsset extends UnitAsset<DragonOriginal, DragonEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'DragonData',
      transform: transformDragonEntry,
    });
  }
}
