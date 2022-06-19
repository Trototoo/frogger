import { GameContext } from "./objects/gameContext.js";
import { Renderer } from "./objects/renderer.js";

const gameContext = new GameContext();
const renderer = new Renderer();

function animate() {
  renderer.clear(gameContext);
  renderer.renderBackground(gameContext);
  requestAnimationFrame(animate);
}

animate();
