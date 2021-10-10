import {MasterEntry, OfficialEntry} from '../base/type';


export type TextOriginal = OfficialEntry<string> & {
  _Text: string,
};

export type TextEntry = MasterEntry<string> & {
  text: string,
};
