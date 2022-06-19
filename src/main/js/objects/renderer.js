import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./config.js";

export class Renderer {
  constructor() {
    this.background = new Image();
    this.background.src = "../resources/images/background_lvl2.png";

    this.cars = new Image();
    this.cars.src = "../resources/images/cars.png";

    this.log = new Image();
    this.log.src = "../resources/images/log.png";

    this.turtle = new Image();
    this.turtle.src = "../resources/images/turtles.png";

    this.collision = new Image();
    this.collision.src = "../resources/images/collisions.png";

    this.frog = new Image();
    this.frog.src = "../resources/images/frog_spritesheet.png";
  }
  renderBackground(ctx) {
    ctx.backgroundCtx.drawImage(this.background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  clear(ctx) {
    ctx.bottomCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.middleCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.upperCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
