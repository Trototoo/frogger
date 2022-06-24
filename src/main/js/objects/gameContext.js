const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;
const GRID_SIZE = 80;

export class GameContext {
  constructor() {
    const bottomCanvas = document.getElementById('bottomCanvas');
    bottomCanvas.height = 600;
    bottomCanvas.width = 600;
    this.bottomCtx = bottomCanvas.getContext('2d');

    const middleCanvas = document.getElementById('middleCanvas');
    middleCanvas.height = 600;
    middleCanvas.width = 600;
    this.middleCtx = middleCanvas.getContext('2d');

    const upperCanvas = document.getElementById('upperCanvas');
    upperCanvas.height = 600;
    upperCanvas.width = 600;
    this.upperCtx = upperCanvas.getContext('2d');
  }
  static get GAME_WIDTH() {
    return GAME_WIDTH;
  }
  static get GAME_HEIGHT() {
    return GAME_HEIGHT;
  }
  static get GRID_SIZE() {
    return GRID_SIZE;
  }
}
