import { join } from 'path';
import { createReadStream, createWriteStream, promises } from 'fs';
import { injectable } from 'inversify';
import { IMediaContentRA } from './IMediaContentRA';
import { Stream } from 'stream';

/**
 * Default implementation of IMediaContentRA. Uses file system to save and read media items.
 */
@injectable()
export class FileSystemMediaContentRA implements IMediaContentRA {
  getFile(
    path: string,
    filename: string,
    range?: { start: number; end: number }
  ) {
    const vPath = join(path, filename);
    const file = createReadStream(vPath, range);
    return file;
  }

  async saveFile(path: string, stream: Stream, filename: string) {
    const fullpath = join(path, filename);
    const writeStream = stream.pipe(createWriteStream(fullpath));
    return new Promise<void>((res, rej) => {
      writeStream.on('finish', () => {
        res();
      });
      writeStream.on('error', rej);
    });
  }
}
