import { showResults } from './results';
import { keyboardHTML } from './keyboard'; 

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.keyboardShown = false;

    this.container = document.getElementById('passage-container');
    this.userInput = document.getElementById('user-input');
    this.startBtn = document.getElementById('start');
    this.toggleKeyboardShow = document.getElementById('keyboard-toggle');

    this.startBtn.addEventListener('click', this.start);
    this.toggleKeyboardShow.addEventListener('click', this.toggleKeyboardDisplay);
    this.container.addEventListener('click', () => this.userInput.focus());
    this.userInput.disabled = true;
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

  displayPassageLetters() {
    const completed = Array.from(this.game.userInput, c => `<span class="letter completed">${c}</span>`).join('');
    const remaining = Array.from(this.game.remainingPassage, (c, i) => `<span class="letter remaining ${i === 0 ? "cursor" : ""}">${c}</span>`).join('');
    this.container.innerHTML = `${completed}${remaining}`;
  }

  toggleKeyboardDisplay = e => {
    const main = document.getElementById('main') 
    main.lastElementChild.innerHTML = (this.keyboardShown ? "" : keyboardHTML);
    this.keyboardShown = !this.keyboardShown;
    console.log(this.keyboardShown);
  }

  reset() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.game.reset();
  }

  inputEventHandler = e => {
    this.game.receiveUserInput(e);
    this.userInput.value = "";
    this.displayPassageLetters();
    this.game.isFinished() && this.completeRace();
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
        this.userInput.disabled = false;
        this.userInput.focus();
        this.game.startRace();
        console.log("GO");
      }
    }, 1000);
  }

  start = e => {
    e.preventDefault();
    this.reset();
    this.bindInputListeners();
    this.game.getPassage();
    this.displayPassageLetters();
    this.startBtn.disabled = true;
    this.beginCountdown(3);
  }

  completeRace() {
    this.game.calculateResults();
    this.userInput.disabled = true;
    this.startBtn.disabled = false;
    showResults(this.game.results, this.container); 
  }
}

export default GameView;
