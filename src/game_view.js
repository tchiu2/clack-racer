
class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;

    this.container = document.getElementById('passage-container');
    this.userInput = document.getElementById('user-input');
    this.startBtn = document.getElementById('start');

    this.startBtn.addEventListener('click', this.start);
  }

  displayPassage() {
    this.container.innerHTML = `
      <span id="completed-passage">
        ${this.game.userInput}
      </span>
      <span id="remaining-passage">
        ${this.game.remainingPassage}
      </span>
    `
  }

  inputEventHandler = e => {
    this.game.receiveUserInput(e);
    this.displayPassage();
  };

  handleKey = action => e => {
    e.code === 'Tab' && e.preventDefault();
    const key = document.querySelector(`.keyboard-key[data-key=${e.code}]`)
    key && key.classList[action]('pressed');
  };

  bindInputListeners() {
    this.userInput.addEventListener('input', this.inputEventHandler);
    this.userInput.addEventListener('keydown', this.handleKey('add'));
    this.userInput.addEventListener('keyup', this.handleKey('remove'));
  }

  beginCountdown = time => {
    const timer = setInterval(() => {
      console.log(time);
      time--;
      if (time <= 0) {
        clearInterval(timer);
        this.game.startRace();
        this.userInput.focus();
      }
    }, 1000);
  }

  start = e => {
    e.preventDefault();
    this.bindInputListeners();
    this.game.getPassage();
    this.displayPassage();
    this.beginCountdown(3);
  }
}

export default GameView;
