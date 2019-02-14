import { formatTime } from './util';

export const showResults = (results, ctx) => {
  const { wpm, time, accuracy } = results;
  const fontSize = ctx.canvas.width * 0.03;
  let alpha = 0.0;
  const fade = setInterval(() => {
    alpha = alpha + 0.05;
    ctx.fillStyle = `rgba(246, 246, 246, ${alpha})`;
    ctx.fillRect(
      0,
      ctx.canvas.height - fontSize * 2.1,
      ctx.canvas.width,
      ctx.canvas.height);

    ctx.font = `bold ${Math.floor(fontSize * 0.75)}px Monaco`;
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
