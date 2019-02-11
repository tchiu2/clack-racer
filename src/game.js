import { randomPassage } from './passages';

class Game {
  constructor() {
    this.passage = randomPassage();
    this.userInput = "";
    this.currentFragment = "";
    this.remainingPassage = this.passage;
    this.keystrokes = 0;
  }

  receiveUserInput(e) {
    this.keystrokes++;
    this.currentFragment = e.target.value;
    this.userInput.concat(this.currentFragment) === this.passage.slice(0, this.userInput.length + this.currentFragment.length) ? this.updateUserInput() : console.log(false);
    this.showStatus();
  }

  updateUserInput() {
    if (this.currentFragment[this.currentFragment.length - 1] === " " || this.userInput.length + this.currentFragment.length === this.passage.length) {
      this.userInput += this.currentFragment;
      this.remainingPassage = this.passage.slice(this.userInput.length);
      document.getElementById("user-input").value = "";
    }
  }

  showStatus() {
    this.passage === this.userInput ? console.log(`You finished in ${this.keystrokes} keystrokes`) : null;
    console.log(`remainingPassage: ${this.remainingPassage} userInput: ${this.userInput}`);
  }

}

Game.DIM_X = 500;
Game.DIM_Y = 150;

export default Game;
