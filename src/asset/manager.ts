import {Environment} from '../process/env';
import {TextAsset} from './master/text/main';


export class AssetManager {
  text: TextAsset;

  constructor(environment: Environment) {
    this.text = new TextAsset(environment);
  }
}
