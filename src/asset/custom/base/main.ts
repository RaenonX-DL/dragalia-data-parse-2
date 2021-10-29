import * as fs from 'fs';

import {dumpJson} from '../../../utils/dump';
import {loadJson} from '../../../utils/load';
import {LoaderIndex} from './type';


export type LoaderInitOptions = {
  indexPath: string,
};

export abstract class Loader<T> {
  readonly indexPath: string;
  readonly index: LoaderIndex;

  readonly data: {[key: string]: T};

  constructor({indexPath}: LoaderInitOptions) {
    this.data = {};
    this.indexPath = indexPath;
    this.index = fs.existsSync(indexPath) ? loadJson(indexPath) : {};
  }

  abstract buildPathIndex(dataDir: string): Promise<{[name: string]: string}>;

  async build(dataDir: string): Promise<void> {
    dumpJson(await this.buildPathIndex(dataDir), this.indexPath);
  }

  getDataOfKey(key: string, fnConstruct: (filePath: string) => T): T {
    if (key in this.data) {
      return this.data[key];
    }

    const filePath = this.index[key];

    if (!filePath) {
      throw new Error(`Data of key ${key} did not list in the index`);
    } else if (!fs.existsSync(filePath)) {
      throw new Error(`Data file of key ${key} does not exist (${filePath})`);
    }

    this.data[key] = fnConstruct(filePath);
    return this.data[key];
  }
}
