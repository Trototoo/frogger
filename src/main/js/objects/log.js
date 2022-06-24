import { Obstacle } from "./obstacle.js";
import { configuration } from "../util/config.js";
import { Renderer } from "../util/renderer.js";
import { GameContext } from "./gameContext.js";

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
    this.x += this.speed * configuration.gameSpeed;
    if (this.x > GameContext.GAME_WIDTH + this.width) {
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
        GameContext.GAME_HEIGHT - GameContext.GRID_SIZE * row - yCordFix,
        GameContext.GRID_SIZE * 2,
        GameContext.GRID_SIZE,
        speed
        ));
    }
    return logs;
  }
  collide(frog) {
    frog.collideWaterObstacle(this);
  }
}
