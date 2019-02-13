import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight * 0.3;
  canvas.width = canvas.height * (26/9);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'lightgrey';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.stroke();

  const game = new Game();
  new GameView(game, ctx);
});
