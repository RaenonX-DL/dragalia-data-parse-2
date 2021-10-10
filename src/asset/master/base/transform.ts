import {DataIdType, MasterEntry, OfficialEntry} from './types';


export const transformOfficialEntry = <K extends DataIdType>(entry: OfficialEntry<K>): MasterEntry<K> => ({
  id: entry._Id,
});
