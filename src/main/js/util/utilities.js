import { configuration } from "./config.js";
import { GameContext } from "../objects/gameContext.js";

export function restartLvl(frog) {
  configuration.gameSpeed = 1;
  configuration.score = 0;
  frog.reset();
}

export function nextLvl(frog) {
  setTimeout(() => {
    configuration.nextSpeed();
    frog.reset();
    if (configuration.score > configuration.highScore) {
      configuration.highScore = configuration.score;
    }
  }, 200);
}

export function handleScoreboard(ctx) {
  const layer = ctx.upperCtx;
  layer.fillStyle = 'black';
  layer.font = '15px Arial';
  layer.fillText(`HighScore: ${configuration.highScore}`, 10, GameContext.GAME_HEIGHT - 60);
  layer.fillText(`Score: ${configuration.score}`, 10, GameContext.GAME_HEIGHT - 40);
  layer.fillText(`Speed: ${configuration.gameSpeed.toFixed(1)}`, 10, GameContext.GAME_HEIGHT - 20);
}
