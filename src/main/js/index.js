import { GameContext } from "./objects/gameContext.js";
import { Renderer } from "./objects/renderer.js";
import { ObstacleFactory } from "./factories/obstacleFactory.js";
import { Frog } from "./objects/frog.js";
import { handleScoreboard, restartLvl } from "./objects/utilities.js";

const gameContext = new GameContext();
const renderer = new Renderer();
export let frame = 0;
const obstacleFactory = new ObstacleFactory();
const obstaclesArray = obstacleFactory.createObstacles();
const frog = new Frog();

function animate() {
  renderer.clear(gameContext);
  renderer.renderBackground(gameContext);
  obstaclesArray.forEach(obstacle => {
    obstacle.show(gameContext);
  });
  frog.draw(gameContext);
  handleScoreboard(gameContext);
  frame++;
  const collidedObject = obstaclesArray.find(obstacle => frog.collides(obstacle));
  if (collidedObject !== undefined) {
    collidedObject.collide(frog);
  } else if (frog.y < 250 && frog.y > 100) {
    restartLvl(frog);
  }
  requestAnimationFrame(animate);
}

animate();

const keys = {
  'ArrowUp': () => { frog.moveUp() },
  'ArrowDown': () => { frog.moveDown() },
  'ArrowLeft': () => { frog.moveLeft() },
  'ArrowRight': () => { frog.moveRight() }
};

window.addEventListener('keydown', event => {
  if (keys[event.key]) {
    keys[event.key]();
  }
});

window.addEventListener('keyup', event => {
  if (keys[event.key]) {
    frog.moving = false;
    frog.frameX = 0;
  }
});
