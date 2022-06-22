import { CANVAS_WIDTH, CANVAS_HEIGHT, GRID, configuration} from "./config.js";
import { Renderer } from "./renderer.js";
import { restartLvl, nextLvl } from "./utilities.js";

const renderer = new Renderer();

export class Frog {
  constructor() {
    this.spriteWidth = 250;
    this.spriteHeight = 250;
    this.width = this.spriteWidth / 5;
    this.height = this.spriteHeight / 5;
    this.x = CANVAS_WIDTH / 2 - this.width / 2;
    this.y = CANVAS_HEIGHT - this.height - 40;
    this.moving = false;
    this.frameX = 0;
    this.frameY = 0;
  }
  jump() {
    if (this.moving === false) {
      this.frameX = 1;
    } else if (this.frameX === 1) {
      this.frameX = 0;
    }
  }
  moveUp() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 0;
      if (this.y - this.height * 2 > 0) {
        this.y -= GRID;
      }
    }
    if (this.y < 100) {
      nextLvl(this);
    }
  }
  moveDown() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 3;
      if (this.y < CANVAS_HEIGHT - this.height * 2) {
        this.y += GRID;
      }
    }
  }
  moveLeft() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 2;
      if (this.x > this.width) {
        this.x -= GRID;
      }
    }
  }
  moveRight() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 1;
      if (this.x < CANVAS_WIDTH - this.width * 2) {
        this.x += GRID;
      }
    }
  }
  draw(ctx) {
    const layer = ctx.middleCtx;
    const spriteCordFix = 25;
    layer.drawImage(
      renderer.frog,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x - spriteCordFix,
      this.y - spriteCordFix,
      this.width * 2,
      this.height * 2
    );
  }
  collideCar() {
    restartLvl(this);
  }
  collideWaterObstacle(obstacle) {
    this.x += obstacle.speed * configuration.gameSpeed;
  }
  collides(obstacle) {
    return !(this.x > obstacle.x + obstacle.width ||
      this.x + this.width < obstacle.x ||
      this.y > obstacle.y + obstacle.height ||
      this.y + this.height < obstacle.y);
  }
  reset() {
    this.x = CANVAS_WIDTH / 2 - this.width / 2;
    this.y = CANVAS_HEIGHT - this.height - 40;
    this.frameX = 0;
    this.frameY = 0;
  }
}
