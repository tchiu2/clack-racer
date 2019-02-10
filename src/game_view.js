class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;

    this.inputEventHandler = this.inputEventHandler.bind(this);

    this.bindInputListeners();
    this.displayPassage(this.game);
  }

  displayPassage(game) {
    const passageDiv = document.createElement('div');
    const passage = document.createTextNode(game.passage.trim());
    passageDiv.appendChild(passage);
    document.getElementById('passage-container').appendChild(passageDiv);
  }

  inputEventHandler(e) {
    this.game.receiveUserInput(e);
    document.getElementById("output").innerHTML = this.game.showStatus();
  }

  handleKeydown(e) {
    e.code === 'Tab' ? e.preventDefault() : null;
    const key = document.querySelector(`.keyboard-key[data-key=${e.code}]`)
    key ? key.classList.add('pressed') : null;
  }

  handleKeyup(e) {
    e.code === 'Tab' ? e.preventDefault() : null;
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
