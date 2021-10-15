import path from 'path';

import {loadJson} from '../../../utils/load';
import {walk} from '../../../utils/path';
import {Action} from './data';
import {ActionData} from './type';


export class ActionLoader {
  data: {[actionId in number]?: ActionData};
  pathIndex: {[fileName in string]?: string};

  _init: boolean;
  _dataDir: string;

  constructor(dataDir: string) {
    this.data = {};
    this.pathIndex = {};

    this._init = false;
    this._dataDir = dataDir;
  }

  async init(): Promise<void> {
    for await (const filePath of walk(this._dataDir)) {
      this.pathIndex[path.basename(filePath)] = filePath;
    }
  }

  async getActionData(actionId: number): Promise<Action> {
    if (!this._init) {
      await this.init();
    }

    const filePath = this.pathIndex[ActionLoader.getActionFileName(actionId)];

    if (!filePath) {
      throw new Error(`Action ID #${actionId} does not have corresponding action data file`);
    }

    return new Action(loadJson(filePath));
  }

  static getActionFileName(actionId: number): string {
    return `PlayerAction_${actionId.toString().padStart(8, '0')}.prefab.json`;
  }
}
