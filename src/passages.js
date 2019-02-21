const PASSAGES = [
  "From this point on, we will be using the command line and pry to test our code, navigate our computer, and perform many other amazing tasks. This means that we are not using repl.it anymore to test our code. Getting comfortable with these tools early will be very important in becoming an efficient developer. After learning them, these tools will make just about any operation you can think of faster than using a GUI and mouse.",
  "Provided for you here are some Sudoku puzzles in .txt format. Download these to a folder on your computer. In the same folder, we're going to write a Ruby program to read in the puzzle files and let us solve them!",
  "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you.",
  `I really don't understand the whole mechanical keyboard fad. I imagine these people who obsess over these and talk down about "browns vs red" to be like the wine snobs of the PC world. Anyone care to explain why a mechanical keyboard offers any real benefit other than "it makes clicky noises."`,
  `Oh noes, the clever TAs at App Academy made this "super useful" library, but it keeps throwing ugly error messages that are hard to understand. Let's revamp the library to throw more descriptive errors and prevent incorrect usage.`,
  "The quick brown fox jumps over the lazy dog.",
  `Somebody once told me the world is gonna roll me, I ain't the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an "L" on her forehead`,
  "Has anyone really been far even as decided to use even go want to do look more like?",
  "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
  "Body cells replace themselves every month. Even at this very moment. Most everything you think you know about me is nothing more than memories.",
  "I never trust people with no appetite. It's like they're always holding something back on you.",
  "But then, I suppose, when with the benefit of hindsight one begins to search one's past for such 'turning points', one is apt to start seeing them everywhere.",
  `"He got me", LeBron said of Tatum's dunk over him. "That f***ing Tatum boomed me" LeBron added, "He's so good," repeating it four times.`,
  "If I'm going to die, I'm going to die historic, on the fury road!",
  "Larry, you only told me one lie. You said there will be another Larry Bird. Larry, there will never, ever be another Larry Bird.",
]

export const randomPassage = () => {
  const randIndex = Math.floor(Math.random() * (PASSAGES.length));
  return PASSAGES[randIndex];
};
