class Game {
  constructor() {
    this.passage = "";
    this.userInput = "";
  }

  showStatus() {
    return this.userInput;
  }
}

Game.DIM_X = 500;
Game.DIM_Y = 150;

export default Game;
