import { Obstacle } from "./obstacle.js";
import {
  numberOfCarTypes,
  gameSpeed,
  GRID,
  CANVAS_HEIGHT,
  CANVAS_WIDTH
} from "./config.js";
import { Renderer } from "./renderer.js";

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
      GRID * 2,
      GRID,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x += this.speed * gameSpeed;
    if (this.speed > 0 && this.x > CANVAS_WIDTH + this.width) {
      this.x = 0 - this.width;
      this.updateCarType();
    } else if (this.speed < 0 && this.x < 0 - this.width) {
      this.x = CANVAS_WIDTH + this.width;
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
      first: CANVAS_HEIGHT - GRID * 2 - yCordFix,
      second: CANVAS_HEIGHT - GRID * 3 - yCordFix,
      third: CANVAS_HEIGHT - GRID * 4 - yCordFix
    }
    for (let i = 0; i < numberOfCars; i++) {
      cars.push(new Car(
        i * minDistance + Math.random() * randDistance,
        rows.first,
        GRID * 2,
        GRID,
        speed,
        0
      ));
      cars.push(new Car(
        i * minDistance + Math.random() * randDistance,
        rows.second,
        GRID * 2,
        GRID,
        speed * -1,
        1
      ));
      cars.push(new Car(
        i * minDistance + Math.random() * randDistance,
        rows.third,
        GRID * 2,
        GRID,
        speed,
        0
      ));
    }
    return cars;
  }
}
