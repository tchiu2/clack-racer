export const calculateElapsedTime = (start, end) => {
  return Math.ceil((end - start) / 1000);
};

export const calculateWPM = (time, passage) => {
  return Math.ceil((passage.length / 5) / (time / 60)); 
};

export const calculateAccuracy = (keystrokes, passage) => {
  const length = passage.length;
  return 100 - (parseFloat((keystrokes - length) / length).toFixed(3)) * 100;
};
