import fs from 'fs';

import * as yaml from 'js-yaml';


export const loadFileContent = (filePath: string): string => {
  return fs.readFileSync(filePath, 'utf-8');
};

export const loadYaml = <T>(filePath: string): T => {
  return toYaml(loadFileContent(filePath)) as T;
};

export const toYaml = <T>(content: string): T => {
  return yaml.load(content) as T;
};

export const toJson = <T>(content: string): T => {
  return JSON.parse(content) as T;
};
