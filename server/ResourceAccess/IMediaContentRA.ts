import { Readable } from 'stream';

export interface IMediaContentRA {
  getFile(
    path: string,
    filename?: string,
    range?: { start: number; end: number }
  ): Readable;
  saveFile(path: string, stream: Readable, filename: string): Promise<void>;
}
