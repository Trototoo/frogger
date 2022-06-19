import { Obstacle } from './obstacle.js';
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  gameSpeed,
  GRID,
  numberOfTurtleTypes,
  turtleSprite
} from "./config.js";
import { frame } from '../index.js';
import { Renderer } from './renderer.js';

const renderer = new Renderer();

export class Turtle extends Obstacle {
  constructor(x, y, width, height, speed) {
    super(x, y, width, height, speed);
    this.frameX = 0;
    this.updateTurtleType();
    this.randomizeAnimation = Math.floor(Math.random() * 30 + 50);
  }

  updateTurtleType() {
    this.turtleType = Math.floor(Math.random() * numberOfTurtleTypes);
  }

  draw(ctx) {
    const layer = ctx.middleCtx;
    if (frame % this.randomizeAnimation === 0) {
      if (this.frameX >= 1) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
    }
    layer.drawImage(
      renderer.turtle,
      this.frameX * turtleSprite.width,
      this.turtleType * turtleSprite.height,
      turtleSprite.width,
      turtleSprite.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x += this.speed * gameSpeed;
    if (this.x > CANVAS_WIDTH + this.width){
      this.x = 0 - this.width;
      this.updateTurtleType();
    }
  }

  static createTurtles() {
    const turtles = [];
    const minDistance = 200;
    const randDistance = 70;
    const row = 6;
    const yCordFix = 10;
    const numberOfTurtles = 4;
    for (let i = 0; i < numberOfTurtles; i++) {
      turtles.push(new Turtle(
        i * minDistance + Math.random() * randDistance,
        CANVAS_HEIGHT - GRID * row - yCordFix,
        GRID,
        GRID,
        1
      ));
    }
    return turtles;
  }

}
