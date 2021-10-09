import {transformUnitEntry} from '../transform';
import {CharaEntry, CharaOriginal} from './type';


export const transformCharaEntry = (entry: CharaOriginal): CharaEntry => ({
  ...transformUnitEntry(entry),
});
