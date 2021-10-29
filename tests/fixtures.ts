import {AssetManager} from '../src/asset/manager/main';
import {LocalEnvironment} from '../src/process/env/local';
import {loadYaml} from '../src/utils/load';


type Fixture = {
  environment: LocalEnvironment,
  manager: AssetManager
};

const environment: LocalEnvironment = new LocalEnvironment(loadYaml('config.yaml'));

export const fixture: Fixture = {
  environment,
  manager: new AssetManager(environment),
};
