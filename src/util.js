export const calculateElapsedTime = (start, end) => {
  return Math.ceil((end - start) / 1000);
};

export const calculateWPM = (time, passage) => {
  return Math.ceil((passage.length / 5) / (time / 60));
};

export const calculateAccuracy = (keystrokes, passage) => {
  const length = passage.length;
  return 100 - (parseFloat(((keystrokes - length) * 0.75) / length).toFixed(3)) * 100;
};

export const formatTime = seconds => {
  let minutes = 0;
  if (seconds > 59) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
