class Racer {
  constructor(options) {
    let racerImage = new Image();
    racerImage.src = "./images/brown_switch.png";
    racerImage.addEventListener('load', this.render);

    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = racerImage;
    this.position = 0;

    this.frameIndex = 0;
    this.numberOfFrames = 9; 
  }

  update = (position) => {
    this.frameIndex = (this.frameIndex < this.numberOfFrames - 1 ? this.frameIndex + 1 : 1);
    this.position = position;
  }

  render = () => {
    this.context.clearRect(
      this.position * this.context.canvas.width * 0.85 + this.context.canvas.width * 0.03,
      this.context.canvas.height * 0.2,
      this.width + 10, 
      this.height);

    this.drawTrack();

    this.context.drawImage(
      this.image,
      this.frameIndex * 240,
      0,
      240,
      180,
      this.position * this.context.canvas.width * 0.85 + this.context.canvas.width * 0.05,
      this.context.canvas.height * 0.2,
      this.width,
      this.height);
  }

  drawTrack = () => {
    const grd = this.context.createLinearGradient(
      0, 
      0, 
      this.position * this.context.canvas.width - this.width,
      0);
    grd.addColorStop(0.08, "white");
    grd.addColorStop(1, "green");
    grd.addColorStop(1, "white");

    this.context.strokeStyle = "#ccc";
    this.context.fillStyle = "green";

    this.context.rect(
      this.context.canvas.width * 0.05,
      this.context.canvas.height * 0.2 + this.height,
      this.context.canvas.width * 0.9,
      10);

    this.context.stroke();

    this.context.fillRect(
      this.context.canvas.width * 0.05,
      this.context.canvas.height * 0.2 + this.height,
      this.position * this.context.canvas.width * 0.9,
      10);
  }
};

export default Racer;
