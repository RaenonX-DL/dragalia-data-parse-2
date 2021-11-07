import {LocalEnvironment} from './process/env/local';
import {AssetProcessor} from './process/processor';
import {loadYaml} from './utils/load';


const command = process.argv[2];
const environment = new LocalEnvironment(loadYaml(process.argv[3] || 'config.yaml'));
const processor = new AssetProcessor(environment);

const main = async () => {
  if (command === 'export') {
    processor.export();
  } else if (command === 'build') {
    await processor.build();
  } else {
    console.log('Available commands are `export` and `build`.');
  }
};

(async () => {
  await main();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
