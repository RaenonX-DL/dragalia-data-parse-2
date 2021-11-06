/**
 * View the difference between the local data and a remote data version.
 */
import {AssetManager} from '../../src/asset/manager/main';
import {LocalEnvironment} from '../../src/process/env/local';
import {RemoteEnvironment} from '../../src/process/env/remote';
import {Config} from '../../src/types/config';
import {UnitType} from '../../src/types/enums/unitType';
import {loadYaml} from '../../src/utils/load';


const getAssetFromManager = (manager: AssetManager) => {
  return manager.master.unitData[UnitType.CHARACTER];
};

const config: Config = loadYaml('config.yaml');
const localAssets = new AssetManager(new LocalEnvironment(config));
const remoteAssets = new AssetManager(new RemoteEnvironment(config, '2021.09.21-KKAtp8GrkgrG4Y72'));

const localIds = getAssetFromManager(localAssets).allIds;
const remoteIds = getAssetFromManager(remoteAssets).allIds;

const localNewIds = localIds.filter((localId) => !remoteIds.includes(localId));
const remoteNewIds = remoteIds.filter((localId) => !localIds.includes(localId));

console.log(`IDs available at local only:\n${localNewIds.join('\n')}`);
console.log();
console.log(`IDs available at remote only:\n${remoteNewIds.join('\n')}`);
