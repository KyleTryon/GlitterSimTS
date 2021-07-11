import './style.css';
import { glitterCanvas } from "./glitterCanvas";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gCanvas = new glitterCanvas(canvas, 600);
gCanvas.render();

