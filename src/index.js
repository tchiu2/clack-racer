import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight * 0.2;
  canvas.width = window.innerWidth * 0.5;

  const ctx = canvas.getContext("2d");
  const fontSize = canvas.width * 0.03;

  const game = new Game();
  new GameView(game, ctx);
  showInstructions(ctx, fontSize);
});

const showInstructions = (ctx, fontSize) => {
  ctx.font = `bold ${Math.floor(fontSize)}px sans-serif`;
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(
    `Click "Start Race" to start clacking!`,
    ctx.canvas.width / 2,
    ctx.canvas.height / 2);
};
