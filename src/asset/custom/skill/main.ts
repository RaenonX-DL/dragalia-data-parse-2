import * as path from 'path';

import {toYaml} from '../../../utils/load';
import {walk} from '../../../utils/path';
import {Loader} from '../base/main';
import {SkillDataCollection} from './type';
import {validateCollection} from './util';


export class SkillLoader extends Loader<SkillDataCollection> {
  async getCollectionOfUnit(unitId: number): Promise<SkillDataCollection> {
    return this.getDataOfKey(
      unitId.toString(),
      async (filePath) => {
        const collection = toYaml<SkillDataCollection>(this.environment.loadContentAsString(filePath));

        validateCollection(collection);

        return collection;
      },
    );
  }

  async buildPathIndex(dataDir: string): Promise<{[path: string]: string}> {
    const index: {[name: string]: string} = {};

    for await (const filePath of walk(dataDir)) {
      index[path.basename(filePath, '.yaml')] = filePath;
    }

    return index;
  }
}
