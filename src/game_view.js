import { showResults, updateLeaderboard, showLeaderboard } from './results';
import { keyboardHTML } from './keyboard'; 
import Racer from './racer';
import Sound from './sound';

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.keyboardShown = false;
    this.leaderboardShown = false;
    this.muted = false;
    this.fontSize = this.ctx.canvas.width * 0.03;

    this.container = document.getElementById('passage-container');
    this.userInput = document.getElementById('user-input');
    this.startBtn = document.getElementById('start');
    this.leaderboardBtn = document.getElementById('lb-btn');
    this.toggleSoundSlider = document.getElementById('sound-toggle');
    this.toggleKeyboardShow = document.getElementById('keyboard-toggle');
    this.timer = document.getElementById('timer');

    this.startBtn.addEventListener('click', this.start);
    this.leaderboardBtn.addEventListener('click', this.toggleLeaderboard);
    this.toggleSoundSlider.addEventListener('click', this.toggleSound);
    this.toggleKeyboardShow.addEventListener('click', this.toggleKeyboardDisplay);
    this.container.addEventListener('click', () => this.userInput.focus());

    this.userInput.disabled = true;
    this.toggleKeyboardDisplay();
    showLeaderboard();
  }

  displayRacer() {
    this.racer = new Racer({
      context: this.ctx,
      width: 50,
      height: 50,
    });
  }

  displayPassage() {
    const completed = Array.from(this.game.getCompletedPassage(), c => `<span class="letter completed">${c}</span>`).join('');
    const remaining = Array.from(this.game.getRemainingPassage(), (c, i) => `<span class="letter remaining ${i === 0 ? "cursor" : ""} ${this.game.incorrect ? "error" : ""}">${c}</span>`).join('');

    this.container.innerHTML = `<div id="passage-heading">${remaining.length === 0 ? "You finished!" : "Type the passage below:"}</div><div id="passage">${completed}${remaining}</div>`;
    this.container.style.visibility = "visible";
  }

  toggleKeyboardDisplay = e => {
    const div = document.getElementById('onscreen-keyboard') 
    div.innerHTML = this.keyboardShown ? "" : keyboardHTML;
    this.keyboardShown = !this.keyboardShown;
  }

  toggleSound = () => {
    const label = document.getElementById('sound-label');
    label.innerHTML = this.muted 
      ? `<i class="fas fa-volume-up fa-lg"></i>`
      : `<i class="fas fa-volume-off fa-lg"></i>`; 
    this.muted = !this.muted;
  }

  toggleLeaderboard = () => {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.classList.toggle("hidden");
    this.leaderboardShown = !this.leaderboardShown;
    if (this.leaderboardShown) {
      leaderboard.addEventListener('click', this.toggleLeaderboard);
    }
  }

  inputEventHandler = e => {
    this.game.receiveUserInput(e);
    !this.muted && this.sound.play();
    this.userInput.value = "";
    this.displayPassage();
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
    time = time * 10;
    this.drawCountdown(time);
    const timer = setInterval(() => {
      time--;
      this.drawCountdown(time);
      if (time <= 0) {
        clearInterval(timer);
        this.drawCountdown(time);
        this.userInput.disabled = false;
        this.userInput.focus();
        this.game.startRace();
      }
    }, 100);
  }

  drawInstructions = () => {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawCountdown = time => {
    const fontSize = this.ctx.canvas.height * 0.12;

    this.ctx.clearRect(
      0,
      this.ctx.canvas.height - fontSize * 2.1,
      this.ctx.canvas.width,
      this.ctx.canvas.height);

    this.ctx.fillStyle = time <= 0 ? "green" : "red";
    
    this.ctx.fillRect(
      0,
      this.ctx.canvas.height - fontSize * 2,
      this.ctx.canvas.width,
      this.ctx.canvas.height);

    this.ctx.fillStyle = `rgba(255, 255, 255, 1.0)`;
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
    this.sound = new Sound([
      "./src/sounds/clack.mp3", 
      "./src/sounds/clack2.mp3", 
      "./src/sounds/clack3.mp3"
    ]);
    this.game.getPassage();
    this.displayPassage();
    this.displayRacer();
    this.startBtn.disabled = true;
    this.beginCountdown(3);
  }

  reset() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.game.reset();
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  completeRace() {
    const results = this.game.calculateResults();
    this.userInput.disabled = true;
    this.startBtn.disabled = false;
    updateLeaderboard(results, this.game.getCompletedPassage());
    showResults(results, this.ctx); 
    showLeaderboard();
  }
}
export default GameView;

