import * as fs from 'fs';

import {Environment} from '../../../process/env/base';
import {dumpJson} from '../../../utils/dump';
import {toJson} from '../../../utils/load';
import {LoaderIndex} from './type';


export type LoaderInitOptions = {
  environment: Environment,
  indexPath: string,
};

export abstract class Loader<T> {
  readonly data: {[key: string]: T};

  readonly environment: Environment;
  readonly indexPath: string;
  readonly index: LoaderIndex;

  constructor({environment, indexPath}: LoaderInitOptions) {
    this.data = {};

    this.environment = environment;
    this.indexPath = indexPath;
    this.index = fs.existsSync(indexPath) ? toJson(environment.loadLocalContentAsString(indexPath)) : {};
  }

  abstract buildPathIndex(dataDir: string): Promise<{[name: string]: string}>;

  async build(dataDir: string): Promise<void> {
    dumpJson(await this.buildPathIndex(dataDir), this.indexPath);
  }

  async getDataOfKey(key: string, fnConstruct: (filePath: string) => Promise<T>): Promise<T> {
    if (key in this.data) {
      return this.data[key];
    }

    const filePath = this.index[key];

    if (!filePath) {
      throw new Error(`Data of key ${key} did not list in the index`);
    } else if (!fs.existsSync(filePath)) {
      throw new Error(`Data file of key ${key} does not exist (${filePath})`);
    }

    this.data[key] = await fnConstruct(filePath);
    return this.data[key];
  }
}
