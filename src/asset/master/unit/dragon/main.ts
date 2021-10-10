import {Environment} from '../../../../process/env';
import {UnitType} from '../../../../types/enums/unitType';
import {UnitAsset} from '../asset';
import {transformDragonEntry} from './transform';
import {DragonEntry, DragonOriginal} from './type';


export class DragonAsset extends UnitAsset<UnitType.DRAGON, DragonOriginal, DragonEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'DragonData',
      transform: transformDragonEntry,
    });
  }
}
