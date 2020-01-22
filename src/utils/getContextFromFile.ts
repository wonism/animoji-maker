import { size } from '../constants';

interface Options {
  hue?: number;
  alpha?: number;
}

const getContextFromFile = (file: File, options?: Options) => new Promise<CanvasRenderingContext2D>((resolve, reject) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    const stringifiedFile = reader.result;

    const image = new Image();

    image.src = stringifiedFile as string;
    image.onload = () => {
      const canvas = document.createElement('canvas');

      canvas.width = size;
      canvas.height = size;

      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

      const ratio = Math.min(size / image.width, size / image.height);

      const width = image.width * ratio;
      const height = image.height * ratio;

      const left = (size - width) / 2;
      const top = (size - height) / 2;

      ctx.drawImage(image, left, top, width, height);

      if (options?.hue != null) {
        ctx.fillStyle = `hsla(${options.hue}, 100%, 50%, ${options.alpha ?? 0.5})`;
        ctx.fillRect(left, top, width, height);
      }

      resolve(ctx);
    };

    reader.onerror = reject;
  };
});

export default getContextFromFile;
