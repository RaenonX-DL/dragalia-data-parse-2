import {transformOfficialEntry} from '../transform';
import {TextEntry, TextOriginal} from './type';


export const transformTextEntry = (entry: TextOriginal): TextEntry => ({
  ...transformOfficialEntry(entry),
  text: entry._Text,
});
