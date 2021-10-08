export type DataIdType = string | number;

export type OfficialData<K extends DataIdType, T extends OfficialEntry<K>> = {
  dict: {
    entriesValue: Array<T>,
  }
};

export type OfficialEntry<K extends DataIdType> = {
  _Id: K,
};

export type MasterEntry<K extends DataIdType> = {
  id: K,
};
