class Racer {
  constructor(options) {
    let racerImage = new Image();
    racerImage.src = "./images/brown_switch.png";
    racerImage.addEventListener('load', this.render);

    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = racerImage;

    this.frameIndex = 0;
    this.numberOfFrames = 9; 
  }

  update = () => {
    this.frameIndex = (this.frameIndex < this.numberOfFrames - 1 ? this.frameIndex + 1 : 1);
  }

  render = () => {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(
      this.image,
      this.frameIndex * 240,
      0,
      240,
      180,
      0,
      0,
      this.width,
      this.height);
  }
};

export default Racer;
