export const numberOfCarTypes = 3;
export const numberOfTurtleTypes = 4;
export const configuration = {
  gameSpeed: 1,
  score: 0,
  highScore: 0,
  nextSpeed() {
    this.gameSpeed += 0.1;
    this.score++;
  }
}
export const turtleSprite = {
  width: 70,
  height: 70,
}
