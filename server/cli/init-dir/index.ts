import * as fs from 'fs';
import 'colors';
import * as path from 'path';
import { ask, askProceed, eject, printHeader } from '../util';
import pickFiles from './pick-files';
import initFiles from './init-files';

const getFiles = (dir: string): Array<string> => {
  return fs
    .readdirSync(dir)
    .filter(file => !fs.statSync(path.join(dir, file)).isDirectory());
};

async function main() {
  printHeader();

  const initDir = await ask('Enter a path to init:\n');

  if (!fs.existsSync(initDir) || !fs.statSync(initDir).isDirectory()) {
    throw `Not a directory: [${initDir}]`;
  }
  const files = getFiles(initDir);
  console.log('Found the following files:');
  console.log(files.join('\r\n'));

  await askProceed();

  const initMethod = await ask(
    'Init all files [all], or select which ones to init? [select]\n'
  );
  if (initMethod.includes('all')) {
    await initFiles(files, initDir);
  } else if (initMethod.includes('select')) {
    await pickFiles(files, initDir);
  } else if (!initMethod.includes('all') && !initMethod.includes('select')) {
    eject();
  }
  eject();
}

export default main;
