export const sounds = {
  jumpSound: new Audio('src/resources/sounds/jump.mp3'),
  carHitSound: new Audio('src/resources/sounds/carHit.mp3'),
  winSound: new Audio('src/resources/sounds/win.mp3'),
  waterHitSound: new Audio('src/resources/sounds/waterHit.mp3'),
  playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }
};

sounds.jumpSound.volume = 0.1;
sounds.carHitSound.volume = 0.1;
sounds.winSound.volume = 0.1;
sounds.waterHitSound.volume = 0.7;
