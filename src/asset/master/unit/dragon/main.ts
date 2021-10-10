import {Environment} from '../../../../process/env';
import {UnitType} from '../../../../types/enums/unitType';
import {UnitAsset} from '../asset';
import {DragonEntry} from './entry';
import {DragonOriginal} from './type';


export class DragonAsset extends UnitAsset<UnitType.DRAGON, DragonOriginal, DragonEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'DragonData',
      transform: (entry) => new DragonEntry(entry),
    });
  }
}
