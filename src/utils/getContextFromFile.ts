import { size } from '../constants';

const getContextFromFile = (file: File) => new Promise<CanvasRenderingContext2D>((resolve, reject) => {
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

      ctx.drawImage(image, 0, 0, size, size);
      resolve(ctx);
    };

    reader.onerror = reject;
  };
});

export default getContextFromFile;
