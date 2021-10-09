import {Environment} from '../process/env';
import {TextAsset} from './master/text/main';
import {CharaAsset} from './master/unit/chara/main';


export class AssetManager {
  chara: CharaAsset;
  text: TextAsset;

  constructor(environment: Environment) {
    this.chara = new CharaAsset(environment);
    this.text = new TextAsset(environment);
  }
}
