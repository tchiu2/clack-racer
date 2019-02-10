const PASSAGES = [
  "From this point on, we will be using the command line and pry to test our code, navigate our computer, and perform many other amazing tasks. This means that we are not using repl.it anymore to test our code. Getting comfortable with these tools early will be very important in becoming an efficient developer. After learning them, these tools will make just about any operation you can think of faster than using a GUI and mouse.",
  "Provided for you here are some Sudoku puzzles in .txt format. Download these to a folder on your computer. In the same folder, we're going to write a Ruby program to read in the puzzle files and let us solve them!",
  "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you.",
  `I really don't understand the whole mechanical keyboard fad. I imagine these people who obsess over these and talk down about "browns vs red" to be like the wine snobs of the PC world. Anyone care to explain why a mechanical keyboard offers any real benefit other than "it makes clicky noises."`,
  `Oh noes, the clever TAs at App Academy made this "super useful" library, but it keeps throwing ugly error messages that are hard to understand. Let's revamp the library to throw more descriptive errors and prevent incorrect usage.`,
  "Sh"
];

export const randomPassage = () => {
  const randIndex = Math.floor(Math.random() * (PASSAGES.length));
  return PASSAGES[randIndex];
};
