import path from 'path';

import {loadJson} from '../../../utils/load';
import {walk} from '../../../utils/path';
import {Loader} from '../base/main';
import {Action} from './data';


export class ActionLoader extends Loader<Action> {
  async getActionData(actionId: number): Promise<Action> {
    return this.getDataOfKey(
      ActionLoader.getActionFileName(actionId),
      (filePath) => new Action(loadJson(filePath)),
    );
  }

  static getActionFileName(actionId: number): string {
    return `PlayerAction_${actionId.toString().padStart(8, '0')}.prefab.json`;
  }

  async buildPathIndex(dataDir: string): Promise<{[name: string]: string}> {
    const index: {[name: string]: string} = {};

    for await (const filePath of walk(dataDir)) {
      index[path.basename(filePath)] = filePath;
    }

    return index;
  }
}
