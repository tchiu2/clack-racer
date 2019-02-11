import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const game = new Game();
  new GameView(game, ctx);
});
