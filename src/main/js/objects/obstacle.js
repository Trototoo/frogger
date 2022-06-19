export class Obstacle {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  draw(ctx) {
    throw new Error('draw() method not implemented');
  }
  update() {
    throw new Error('update() method not implemented');
  }
  show(ctx) {
    this.draw(ctx);
    this.update();
  }
}
