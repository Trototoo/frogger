import { configuration} from "../util/config.js";
import { Renderer } from "../util/renderer.js";
import { restartLvl } from "../util/utilities.js";
import { GameContext } from "./gameContext.js";
import { sounds } from "../util/sound.js";

const renderer = new Renderer();

export class Frog {
  constructor() {
    this.spriteWidth = 250;
    this.spriteHeight = 250;
    this.width = this.spriteWidth / 5;
    this.height = this.spriteHeight / 5;
    this.x = GameContext.GAME_WIDTH / 2 - this.width / 2;
    this.y = GameContext.GAME_HEIGHT - this.height - 40;
    this.moving = false;
    this.frameX = 0;
    this.frameY = 0;
  }
  jump() {
    if (this.moving === false) {
      sounds.playSound(sounds.jumpSound);
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
        this.y -= GameContext.GRID_SIZE;
      }
    }
  }
  moveDown() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 3;
      if (this.y < GameContext.GAME_HEIGHT - this.height * 2) {
        this.y += GameContext.GRID_SIZE;
      }
    }
  }
  moveLeft() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 2;
      if (this.x > this.width) {
        this.x -= GameContext.GRID_SIZE;
      }
    }
  }
  moveRight() {
    this.jump();
    if (!this.moving) {
      this.moving = true;
      this.frameY = 1;
      if (this.x < GameContext.GAME_WIDTH - this.width * 2) {
        this.x += GameContext.GRID_SIZE;
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
    this.x = GameContext.GAME_WIDTH / 2 - this.width / 2;
    this.y = GameContext.GAME_HEIGHT - this.height - 40;
    this.frameX = 0;
    this.frameY = 0;
  }
}
