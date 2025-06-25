document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const splashSound = document.getElementById('splashSound');
  const homeSound = document.getElementById('homeSound');

  let clickCount = 0;

  splash.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
      // First click: play splash sound
      splashSound.play();
    } else if (clickCount === 2) {
      // Second click: stop splash, start home sound, go to main.html
      splashSound.pause();
      splashSound.currentTime = 0;

      homeSound.volume = 1;
      homeSound.play();

      window.location.href = 'main.html';
    }
  });
});
