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
      this.position * this.context.canvas.width * 0.8 + this.context.canvas.width * 0.05,
      this.context.canvas.height * 0.1,
      this.width, 
      this.height);
    this.context.drawImage(
      this.image,
      this.frameIndex * 240,
      0,
      240,
      180,
      this.position * this.context.canvas.width * 0.8 + this.context.canvas.width * 0.05,
      this.context.canvas.height * 0.1,
      this.width,
      this.height);
  }
};

export default Racer;
