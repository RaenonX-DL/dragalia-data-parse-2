import {DataIdType, MasterOriginal} from './type';


export class MasterEntry<K extends DataIdType> {
  id: K;

  constructor(entry: MasterOriginal<K>) {
    this.id = entry._Id;
  }
}
