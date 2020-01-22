import { size } from '../constants';

const getContextFromText = (
  text: string,
  fgColor: string,
  bgColor: string,
  fontFamily: string,
  yPos: string
) => new Promise<CanvasRenderingContext2D>((resolve) => {
  const canvas = document.createElement('canvas');

  canvas.width = size;
  canvas.height = size;

  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fillStyle = bgColor;
  ctx.fill();

  ctx.font = `normal bold ${size / 1.4}px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fgColor;
  ctx.fillText(text, size / 2, (size / 2) + Number(yPos));

  resolve(ctx);
});

export default getContextFromText;
