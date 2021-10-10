import {DataIdType, OfficialEntry} from './type';


export class MasterEntry<K extends DataIdType> {
  id: K;

  constructor(entry: OfficialEntry<K>) {
    this.id = entry._Id;
  }
}
