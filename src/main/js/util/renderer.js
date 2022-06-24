import { GameContext } from "../objects/gameContext.js";

export class Renderer {
  constructor() {
    this.background = new Image();
    this.background.src = "src/resources/images/background_lvl2.png";

    this.cars = new Image();
    this.cars.src = "src/resources/images/cars.png";

    this.log = new Image();
    this.log.src = "src/resources/images/log.png";

    this.turtle = new Image();
    this.turtle.src = "src/resources/images/turtles.png";

    this.collision = new Image();
    this.collision.src = "src/resources/images/collisions.png";

    this.frog = new Image();
    this.frog.src = "src/resources/images/frog_spritesheet.png";
  }
  renderBackground(ctx) {
    ctx.bottomCtx.drawImage(this.background, 0, 0, GameContext.GAME_WIDTH, GameContext.GAME_HEIGHT);
  }
  clear(ctx) {
    ctx.bottomCtx.clearRect(0, 0, GameContext.GAME_WIDTH, GameContext.GAME_HEIGHT);
    ctx.middleCtx.clearRect(0, 0, GameContext.GAME_WIDTH, GameContext.GAME_HEIGHT);
    ctx.upperCtx.clearRect(0, 0, GameContext.GAME_WIDTH, GameContext.GAME_HEIGHT);
  }
}
