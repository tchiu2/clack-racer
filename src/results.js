import { formatTime } from './util';

const STORAGE_KEY = 'clackracerLeaderboard';

export const showResults = (results, ctx) => {
  const { wpm, time, accuracy } = results;
  const fontSize = ctx.canvas.height * 0.12;
  let alpha = 0.0;
  const fade = setInterval(() => {
    alpha = alpha + 0.05;
    ctx.fillStyle = `rgba(246, 246, 246, ${alpha})`;
    ctx.fillRect(
      0,
      ctx.canvas.height - fontSize * 2.1,
      ctx.canvas.width,
      ctx.canvas.height);

    ctx.font = `bold ${Math.floor(fontSize * 0.75)}px sans-serif`;
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.textAlign = "center";
    ctx.fillText(
      `WPM: ${wpm}   Time: ${formatTime(time)}   Accuracy: ${accuracy}%`,
      ctx.canvas.width * 0.5,
      ctx.canvas.height - fontSize * 1.3);
    if (alpha >= 1) {
      clearInterval(fade);
    }
  }, 100);
};

const getLeaderboard = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const updateLeaderboard = ({ wpm }, passage) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const sorted = [...getLeaderboard(), {
    wpm,
    date: `${month}-${day}-${year}`,
    passage: passage.slice(0, 50) + (passage.length <= 50 ? "" : "..."),
  }].sort((x, y) => y.wpm - x.wpm).slice(0, 10);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
};

export const showLeaderboard = () => { 
  const div = document.getElementById('leaderboard');
  const rows = getLeaderboard().map(({ wpm, date, passage }, i) => {
    return `
      <tr>
        <td>${i+1}</td>
        <td>${wpm}</td>
        <td>${date}</td>
        <td>${passage}</td>
      </tr>
    `;
  }).join('');

  div.innerHTML = `
    <div class="overlay">
      <table>
        <tr>
          <th colspan="4">Personal Top 10 Races</th>
        </tr>
        <tr>
          <th>Rank</th>
          <th>WPM</th>
          <th>Date</th>
          <th>Passage</th>
        </tr>
        ${rows}
      </table>
    </div>
  `;
};
