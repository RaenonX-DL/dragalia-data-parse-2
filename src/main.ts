import {LocalEnvironment} from './process/env/local';
import {AssetProcessor} from './process/processor';
import {loadYaml} from './utils/load';


const environment = new LocalEnvironment(loadYaml(process.argv[2]));
const processor = new AssetProcessor(environment);

processor.export();
