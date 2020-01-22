import GIF from 'gif.js';
import gifWorker from '../workers/gif.worker';

import { size } from '../constants';

let blob;

try {
  blob = new Blob([gifWorker], { type: 'application/javascript' });
} catch (e) {
  const BlobBuilder = (window as any).BlobBuilder || (window as any).WebKitBlobBuilder || (window as any).MozBlobBuilder;

  blob = new BlobBuilder();
  blob.append(gifWorker);
  blob = blob.getBlob();
}

interface Options {
  emptyImage?: HTMLImageElement;
  animationFrames?: NodeList;
  interval?: number;
}

const generateFile = (
  context: CanvasRenderingContext2D | CanvasRenderingContext2D[],
  {
    emptyImage,
    animationFrames,
    interval = 100,
  }: Options
) => {
  return new Promise<string>((resolve) => {
    const gif = new GIF({
      workers: 4,
      workerScript: URL.createObjectURL(blob),
      quality: 10,
      background: 'transparent',
      transparent: 'transparent',
      width: size,
      height: size,
    });

    const images = Array.isArray(context) ? context : [
      context, context, context, context, emptyImage, emptyImage,
      context, context, context, emptyImage, emptyImage,
      context, emptyImage, emptyImage,
      context, emptyImage,
      context, emptyImage,
      context, emptyImage,
      context, emptyImage,
      ...Array.from(animationFrames),
    ].filter(el => el != null);

    images.forEach((image) => {
      gif.addFrame(image, { delay: interval });
    });

    gif.on('finished', (blob) => {
      const url = URL.createObjectURL(blob);

      resolve(url);
    });

    gif.render();
  });
};

export default generateFile;
