import { randomPassage } from './passages';

class Game {
  constructor() {
    this.passage = randomPassage();
    this.userInput = "";
    this.remainingPassage = this.passage;
    this.keystrokes = 0;

    this.validateInput = this.validateInput.bind(this);
  }

  receiveUserInput(e) {
    this.userInput = e.target.value;
    this.userInput === this.passage.slice(0, this.userInput.length) ? console.log(true) : console.log(false);
    this.keystrokes++;
  }

  showStatus() {
    this.passage === this.userInput ? console.log(`You finished in ${this.keystrokes} keystrokes`) : null;
    return this.userInput;
  }

}

Game.DIM_X = 500;
Game.DIM_Y = 150;

export default Game;
