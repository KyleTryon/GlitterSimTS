export class glitterParticle {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  tiltX: number;
  colorPrimary: string;
  size: number;
  viewingAngle: number;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, tiltX: number, colorPrimary: string, size: number, viewingAngle: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.tiltX = tiltX;
    this.colorPrimary = colorPrimary;
    this.size = size;
    this.viewingAngle = viewingAngle;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.size, this.size);
    this.ctx.fillStyle = this.colorPrimary;
    this.ctx.fill();
    this.ctx.closePath();
  }


}