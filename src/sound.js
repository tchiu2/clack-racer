class Sound {
  constructor(sounds) {
    this.numSounds = sounds.length;
    for (let i = 0; i < sounds.length; i++) {
      this[`sound${i}`] = document.createElement("audio");
      this[`sound${i}`].src = sounds[i];
      this[`sound${i}`].setAttribute("preload", "auto");
      this[`sound${i}`].setAttribute("controls", "none");
      this[`sound${i}`].style.display = "none";
      document.body.appendChild(this[`sound${i}`]);
    }
  }

  play() {
    const sound = this[`sound${Math.floor(Math.random() * this.numSounds)}`];
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
}

export default Sound;
