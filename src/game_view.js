import { showResults } from './results';
import { keyboardHTML } from './keyboard'; 
import Racer from './racer';

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.keyboardShown = false;

    this.container = document.getElementById('passage-container');
    this.userInput = document.getElementById('user-input');
    this.startBtn = document.getElementById('start');
    this.toggleKeyboardShow = document.getElementById('keyboard-toggle');
    this.timer = document.getElementById('timer');

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

  displayRacer() {
    this.racer = new Racer({
      context: this.ctx,
      width: this.ctx.canvas.width * 0.1,
      height: this.ctx.canvas.height * 0.25,
    });
  }

  displayPassageLetters() {
    console.log(this.game.incorrect);
    const completed = Array.from(this.game.userInput, c => `<span class="letter completed">${c}</span>`).join('');
    const remaining = Array.from(this.game.remainingPassage, (c, i) => `<span class="letter remaining ${i === 0 ? "cursor" : ""} ${this.game.incorrect ? "error" : ""}">${c}</span>`).join('');
    this.container.innerHTML = `${completed}${remaining}`;
  }

  toggleKeyboardDisplay = e => {
    const main = document.getElementById('main') 
    main.lastElementChild.innerHTML = (this.keyboardShown ? "" : keyboardHTML);
    this.keyboardShown = !this.keyboardShown;
  }

  reset() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.game.reset();
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  inputEventHandler = e => {
    this.game.receiveUserInput(e);
    this.userInput.value = "";
    this.displayPassageLetters();
    this.racer.update(this.game.percentComplete());
    this.racer.render();
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
    this.drawCountdown(time);
    const timer = setInterval(() => {
      time--;
      this.drawCountdown(time);
      if (time <= 0) {
        clearInterval(timer);
        this.drawCountdown(time);
        this.fadeOutCountdown();
        this.userInput.disabled = false;
        this.userInput.focus();
        this.game.startRace();
      }
    }, 100);
  }

  drawCountdown = (time, alpha = 1.0) => {
    const fontSize = this.ctx.canvas.width * 0.03;

    this.ctx.clearRect(
      0,
      this.ctx.canvas.height - fontSize * 2.1,
      this.ctx.canvas.width,
      this.ctx.canvas.height);

    this.ctx.fillStyle = time <= 0 ? "green" : `rgba(114, 114, 114, ${alpha}`;
    this.ctx.fillRect(
      0,
      this.ctx.canvas.height - fontSize * 2,
      this.ctx.canvas.width,
      this.ctx.canvas.height);

    this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    this.ctx.font = `bold ${fontSize}px sans-serif`;
    this.ctx.textBaseline = "top";

    this.ctx.fillText(
      time <= 0 ? "Go!" : `${(time/10).toFixed(1)}`, 
      this.ctx.canvas.width * 0.5 - fontSize,
      this.ctx.canvas.height - fontSize * 1.5);
  }

  fadeOutCountdown = () => {
    const fontSize = this.ctx.canvas.width * 0.03;
    let alpha = 0.0;
    const fade = setInterval(() => {
      alpha = alpha + 0.05;
      this.ctx.fillStyle = `rgb(255, 255, 255, ${alpha})`;
      this.ctx.fillRect(
        0,
        this.ctx.canvas.height - fontSize * 2.1,
        this.ctx.canvas.width,
        this.ctx.canvas.height);
      if (alpha >= 1) {
        clearInterval(fade);
      }
    }, 100);
  }

  start = e => {
    e.preventDefault();
    this.reset();
    this.bindInputListeners();
    this.game.getPassage();
    this.displayPassageLetters();
    this.displayRacer();
    this.startBtn.disabled = true;
    this.beginCountdown(30);
  }

  completeRace() {
    this.game.calculateResults();
    this.userInput.disabled = true;
    this.startBtn.disabled = false;
    showResults(this.game.results, this.container); 
  }
}

export default GameView;
