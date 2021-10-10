import {DataIdType, MasterEntry, OfficialEntry} from './type';


export const transformOfficialEntry = <K extends DataIdType>(entry: OfficialEntry<K>): MasterEntry<K> => ({
  id: entry._Id,
});
