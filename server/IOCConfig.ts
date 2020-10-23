import { Container } from 'inversify';
import { Db } from 'mongodb';
import { DependencyType } from './Constant/DependencyType';
import { AdminController } from './Controllers/AdminController';
import { LibraryController } from './Controllers/LibraryController';
import { MediaController } from './Controllers/MediaController';
import { ServerController } from './Controllers/ServerController';
import { LibraryEngine } from './Engines/LibraryEngine';
import { MediaEngine } from './Engines/MediaEngine';
import { MongoFactory } from './Factories/MongoFactory';
import { FileSystemManager } from './Managers/FileSystemManager';
import { LibraryManager } from './Managers/LibraryManager';
import { MediaManager } from './Managers/MediaManager';
import { FileSystemRA } from './ResourceAccess/FileSystemRA';
import LibraryRA from './ResourceAccess/LibraryRA';
import MediaRA from './ResourceAccess/MediaRA';
import { Configuration } from './Utilities/ConfigUtil';

const container = new Container();

async function setupIoc(config: Configuration) {
  // Database connection needs to be set up before everything else
  const mongo = await MongoFactory.init(config);
  container.bind<Db>(DependencyType.External.MongoDB).toConstantValue(mongo);

  container.bind(DependencyType.ResourceAccess.Library).to(LibraryRA);
  container.bind(DependencyType.ResourceAccess.Media).to(MediaRA);
  container.bind(DependencyType.ResourceAccess.FileSystem).to(FileSystemRA);

  container.bind(DependencyType.Engines.Library).to(LibraryEngine);
  container.bind(DependencyType.Engines.Media).to(MediaEngine);

  container.bind(DependencyType.Managers.Library).to(LibraryManager);
  container.bind(DependencyType.Managers.Media).to(MediaManager);
  container.bind(DependencyType.Managers.FileSystem).to(FileSystemManager);

  container.bind(DependencyType.Controller.Admin).to(AdminController);
  container.bind(DependencyType.Controller.Library).to(LibraryController);
  container.bind(DependencyType.Controller.Media).to(MediaController);
  container.bind(DependencyType.Controller.Server).to(ServerController);

  return container;
}

export { setupIoc };
