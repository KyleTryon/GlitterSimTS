import { glitterParticle } from "./glitterParticle";
import { Vector3 } from "./MathUtils";

export class glitterCanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  bgColor: string;
  glitterColors: string[];
  glitterParticles: glitterParticle[] = [];
  glitterParticleCount: number;
  glitterParticleSize: number;
  tilt: Vector3 = new Vector3(0, 0, 0);
  debugArea: HTMLElement;

  constructor(canvas: HTMLCanvasElement, particleCount: number, glitterColors?: string[], glitterParticleSize?: number) {
    this.canvas = canvas;
    console.log(this.canvas);
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.width = canvas.width;
    this.height = canvas.height;
    this.bgColor = "black";
    this.glitterColors = glitterColors || ["red", "white", "blue"];
    this.glitterParticleCount = particleCount;
    this.glitterParticleSize = glitterParticleSize || 1;
    this.generateParticles();
    this.debugArea = document.getElementById("debugArea") as HTMLElement;
    this.debugArea.textContent = `Gamma: ${this.tilt.x}`;
    window.addEventListener("deviceorientation", this.handleOrientation.bind(this));
  }
  generateParticles() {
    for (let i = 0; i < this.glitterParticleCount; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      // random angle between -45 and 45 degrees
      const angleX = Math.random() * 90 - 45; 
      const randColor = this.glitterColors[Math.floor(Math.random() * this.glitterColors.length)];
      this.glitterParticles.push(new glitterParticle(this.ctx, x, y, angleX, randColor, this.glitterParticleSize, this.tilt.x));
    }
  }
  render() {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.glitterParticles.forEach(Particle => {
      Particle.viewingAngle = this.tilt.x;
      Particle.draw();
    });
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Tilt: ${this.tilt.x}`, 50, 50)
    window.requestAnimationFrame(this.render.bind(this))
  }
  handleOrientation(event: Event) {
    this.tilt.x = (<any>event).gamma;
    console.log(this.tilt.x);
    this.debugArea.textContent = `Gamma: ${this.tilt.x}`;
  }
}