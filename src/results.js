import { formatTime } from './util';

export const showResults = (results, container) => {
  const { wpm, time, accuracy } = results;
  container.innerHTML = `
    <div id="results">
      <div>Your WPM is <strong>${wpm}<strong></div>
      <div>Time: <strong>${formatTime(time)}<strong></div>
      <div>Accuracy: <strong>${accuracy}%<strong></div>
    </div>
  `
};
