import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight * 0.2;
  canvas.width = window.innerWidth * 0.5;

  const ctx = canvas.getContext("2d");

  const game = new Game();
  new GameView(game, ctx);
});
