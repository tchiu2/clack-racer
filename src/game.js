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
  }

  receiveUserInput(e) {
    this.keystrokes++;
    this.currentFragment = e.target.value;
    this.userInput.concat(this.currentFragment) === this.passage.slice(0, this.userInput.length + this.currentFragment.length) && this.updateUserInput();
    //this.checkStatus();
  }

  updateUserInput() {
    //if (this.currentFragment[this.currentFragment.length - 1] === " " || this.userInput.length + this.currentFragment.length === this.passage.length) {
      this.userInput += this.currentFragment;
      this.remainingPassage = this.passage.slice(this.userInput.length);
      document.getElementById("user-input").value = "";
    //}
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
    this.passage === this.userInput && this.finishRace();
  }

  finishRace() {
    this.finishTime = new Date(); 
    const totalTime = calculateElapsedTime(this.startTime, this.finishTime);
    console.log(`Your WPM is ${calculateWPM(totalTime, this.passage)}`);
    console.log(`Elapsed time: ${totalTime}s`);
    console.log(`Accuracy: ${calculateAccuracy(this.keystrokes, this.passage)}%`);
  }

  isFinished() {
    return this.passage === this.userInput;
  }
}

Game.DIM_X = 500;
Game.DIM_Y = 150;

export default Game;
