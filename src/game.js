import { randomPassage } from './passages';
import {
  calculateElapsedTime,
  calculateWPM,
  calculateAccuracy,
} from './util';

class Game {
  constructor() {
    this.passage = "";
    this.userInput = "";
    this.remainingPassage = "";
    this.currentFragment = "";
    this.keystrokes = 0;
    this.startTime = "";
    this.finishTime = "";
    this.incorrect = false;
  }

  receiveUserInput(e) {
    this.keystrokes++;
    this.incorrect = true;
    this.currentFragment = e.target.value;
    this.remainingPassage[0] === this.currentFragment && this.updateUserInput();
  }

  updateUserInput() {
    this.incorrect = false;
    this.userInput += this.currentFragment;
    this.remainingPassage = this.passage.slice(this.userInput.length);
    document.getElementById("user-input").value = "";
  }

  getPassage(passage) {
    this.passage = passage || randomPassage(); 
    this.remainingPassage = this.passage;
  }

  reset() {
    this.userInput = "";
    this.keystrokes = 0;
    this.startTime = "";
    this.finishTime = "";
  }

  startRace = () => {
    this.startTime = new Date();
  }

  checkStatus() {
    if (this.isFinished()) this.calculateResults();
  }

  calculateResults() {
    this.finishTime = new Date(); 
    const totalTime = calculateElapsedTime(this.startTime, this.finishTime);
    return {
      wpm: calculateWPM(totalTime, this.passage),
      time: totalTime,
      accuracy: calculateAccuracy(this.keystrokes, this.passage),
    };
  }

  isFinished() {
    return this.passage === this.userInput;
  }

  percentComplete() {
    return this.userInput.length / this.passage.length
  }

  getCompletedPassage() {
    return this.userInput;
  }

  getRemainingPassage() {
    return this.remainingPassage;
  }
}

export default Game;
