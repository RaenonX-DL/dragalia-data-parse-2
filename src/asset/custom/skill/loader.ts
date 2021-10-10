import * as fs from 'fs';
import * as path from 'path';

import * as yaml from 'js-yaml';

import {walk} from '../../../utils/path';
import {SkillDataCollection} from './type';


export class SkillLoader {
  data: {[unitId in number]?: SkillDataCollection};
  pathIndex: {[unitId in number]?: string};

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
      const fileName = path.basename(filePath, '.yaml');
      this.pathIndex[+fileName] = filePath;
    }
  }

  async getCollectionOfUnit(unitId: number): Promise<SkillDataCollection> {
    if (!this._init) {
      await this.init();
    }

    const filePath = this.pathIndex[unitId];

    if (!filePath) {
      throw new Error(`Unit #${unitId} does not have associated skill data file`);
    }

    return yaml.load(fs.readFileSync(filePath, 'utf-8')) as SkillDataCollection;
  }
}
