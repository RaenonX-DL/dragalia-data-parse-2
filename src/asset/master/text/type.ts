import {MasterEntry, OfficialEntry} from '../types';


export type TextOriginal = OfficialEntry<string> & {
  _Text: string,
};

export type TextEntry = MasterEntry<string> & {
  text: string,
};
