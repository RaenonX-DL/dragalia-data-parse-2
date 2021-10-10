import {DataIdType, MasterOriginal} from './type';


export abstract class MasterEntry<K extends DataIdType> {
  id: K;

  protected constructor(entry: MasterOriginal<K>) {
    this.id = entry._Id;
  }
}
