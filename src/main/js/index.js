import { GameContext } from "./objects/gameContext.js";
import { Renderer } from "./objects/renderer.js";
import { ObstacleFactory } from "./factories/obstacleFactory.js";

const gameContext = new GameContext();
const renderer = new Renderer();
export let frame = 0;
const obstacleFactory = new ObstacleFactory();
const obstaclesArray = obstacleFactory.createObstacles();

function animate() {
  renderer.clear(gameContext);
  renderer.renderBackground(gameContext);
  obstaclesArray.forEach(obstacle => {
    obstacle.show(gameContext);
  });
  frame++;
  requestAnimationFrame(animate);
}

animate();
