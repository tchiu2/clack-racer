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
    this.results = {};
  }

  receiveUserInput(e) {
    this.keystrokes++;
    this.currentFragment = e.target.value;
    this.userInput.concat(this.currentFragment) === this.passage.slice(0, this.userInput.length + this.currentFragment.length) && this.updateUserInput();
  }

  updateUserInput() {
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
    this.passage === this.userInput && this.calculateResults();
  }

  calculateResults() {
    this.finishTime = new Date(); 
    const totalTime = calculateElapsedTime(this.startTime, this.finishTime);
    this.results = {
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
}

export default Game;
