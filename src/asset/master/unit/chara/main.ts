import {Environment} from '../../../../process/env';
import {UnitType} from '../../../../types/enums/unitType';
import {UnitAsset} from '../asset';
import {transformCharaEntry} from './transform';
import {CharaEntry, CharaOriginal} from './type';


export class CharaAsset extends UnitAsset<UnitType.CHARACTER, CharaOriginal, CharaEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'CharaData',
      transform: transformCharaEntry,
    });
  }
}
