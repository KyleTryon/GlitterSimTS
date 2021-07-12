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

  get apparentSize() {
    if (this.viewingAngle - this.tiltX < 1) {
      return this.size * 3;
    } else {
      return this.size;
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.apparentSize, this.apparentSize);
    this.ctx.fillStyle = this.colorPrimary;
    this.ctx.fill();
    this.ctx.closePath();
  }


}