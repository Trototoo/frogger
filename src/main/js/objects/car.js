import { Obstacle } from "./obstacle.js";
import { numberOfCarTypes, configuration } from "../util/config.js";
import { Renderer } from "../util/renderer.js";
import { GameContext } from "./gameContext.js";

const renderer = new Renderer();

export class Car extends Obstacle {
  constructor(x, y, width, height, speed, frameX) {
    super(x, y, width, height, speed);
    this.updateCarType();
    this.frameX = frameX;
  }

  updateCarType() {
    this.carType = Math.floor(Math.random() * numberOfCarTypes);
  }

  draw(ctx) {
    const layer = ctx.upperCtx;
    layer.drawImage(
      renderer.cars,
      this.frameX * this.width,
      this.carType * this.height,
      GameContext.GRID_SIZE * 2,
      GameContext.GRID_SIZE,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x += this.speed * configuration.gameSpeed;
    if (this.speed > 0 && this.x > GameContext.GAME_WIDTH + this.width) {
      this.x = 0 - this.width;
      this.updateCarType();
    } else if (this.speed < 0 && this.x < 0 - this.width) {
      this.x = GameContext.GAME_WIDTH + this.width;
      this.updateCarType();
    }
  }

  static createCars() {
    const cars = [];
    const numberOfCars = 2;
    const minDistance = 400;
    const randDistance = 70;
    const yCordFix = 25;
    const speed = 1;
    const rows = {
      first: GameContext.GAME_HEIGHT - GameContext.GRID_SIZE * 2 - yCordFix,
      second: GameContext.GAME_HEIGHT - GameContext.GRID_SIZE * 3 - yCordFix,
      third: GameContext.GAME_HEIGHT - GameContext.GRID_SIZE * 4 - yCordFix
    }
    for (let i = 0; i < numberOfCars; i++) {
      cars.push(new Car(
        i * minDistance + Math.random() * randDistance,
        rows.first,
        GameContext.GRID_SIZE * 2,
        GameContext.GRID_SIZE,
        speed,
        0
      ));
      cars.push(new Car(
        i * minDistance + Math.random() * randDistance,
        rows.second,
        GameContext.GRID_SIZE * 2,
        GameContext.GRID_SIZE,
        speed * -1,
        1
      ));
      cars.push(new Car(
        i * minDistance + Math.random() * randDistance,
        rows.third,
        GameContext.GRID_SIZE * 2,
        GameContext.GRID_SIZE,
        speed,
        0
      ));
    }
    return cars;
  }
  collide(frog) {
    frog.collideCar();
  }
}
