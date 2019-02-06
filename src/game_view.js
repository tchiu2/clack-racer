class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;

    this.inputEventHandler = this.inputEventHandler.bind(this);

    this.bindInputListeners();
  }

  inputEventHandler(e) {
    this.game.userInput = e.target.value;
    document.getElementById("output").innerHTML = this.game.showStatus();
  }

  handleKeydown(e) {
    const key = document.querySelector(`.keyboard-key[data-key=${e.code}]`)
    console.log(e.code);
    key ? key.classList.add('pressed') : null;
  }

  handleKeyup(e) {
    const key = document.querySelector(`.keyboard-key[data-key=${e.code}]`)
    key ? key.classList.remove('pressed') : null;
  }

  bindInputListeners() {
    document.getElementById("user-input").oninput=this.inputEventHandler;
    document.getElementById("user-input").addEventListener('keydown', this.handleKeydown);
    document.getElementById("user-input").addEventListener('keyup', this.handleKeyup);
  }
}

export default GameView;
