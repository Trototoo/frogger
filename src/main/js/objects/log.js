import { Obstacle } from "./obstacle.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, gameSpeed, GRID } from "./config.js";
import { Renderer } from "./renderer.js";

const renderer = new Renderer();

export class Log extends Obstacle {
  constructor(x, y, width, height, speed) {
    super(x, y, width, height, speed);
  }

  draw(ctx) {
    const layer = ctx.middleCtx;
    layer.drawImage(
      renderer.log,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x += this.speed * gameSpeed;
    if (this.x > CANVAS_WIDTH + this.width) {
      this.x = 0 - this.width;
    }
  }

  static createLogs() {
    const logs = [];
    const numberOfLogs = 3;
    const minDistance = 270;
    const randDistance = 70;
    const row = 5;
    const yCordFix = 20;
    const speed = 1;
    for (let i = 0; i < numberOfLogs; i++) {
      logs.push(new Log(
        i * minDistance + Math.random() * randDistance,
        CANVAS_HEIGHT - GRID * row - yCordFix,
        GRID * 2,
        GRID,
        speed
        ));
    }
    return logs;
  }
}
