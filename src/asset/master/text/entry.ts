import {MasterEntry} from '../base/entry';
import {TextOriginal} from './type';


export class TextEntry extends MasterEntry<string> {
  text: string;

  constructor(entry: TextOriginal) {
    super(entry);

    this.text = entry._Text;
  }
}
