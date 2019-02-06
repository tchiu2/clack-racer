class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }
}

const inputEventHandler = e => {
  document.getElementById("output").innerHTML = e.target.value;
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("user-input").oninput=inputEventHandler;
});

export default GameView;
