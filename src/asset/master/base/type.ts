import {Environment} from '../../../process/env/base';


export type DataIdType = string | number;

export type MasterData<K extends DataIdType, T extends MasterOriginal<K>> = {
  dict: {
    entriesValue: T[],
  }
};

export type MasterOriginal<K extends DataIdType> = {
  _Id: K,
};

export type GeneralMasterAssetInitOptions = {
  environment: Environment,
};
