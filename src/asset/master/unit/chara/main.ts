import {Environment} from '../../../../process/env';
import {OfficialAsset} from '../../base';
import {CharaEntry, CharaOriginal} from './type';


export class CharaAsset extends OfficialAsset<number, CharaOriginal, CharaEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'CharaData',
      transform: (entry) => ({
        id: entry._Id,
      }),
    });
  }
}
