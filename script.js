document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const splashSound = document.getElementById('splashSound');
  const homeSound = document.getElementById('homeSound');

  // Ensure homeSound starts muted
  homeSound.volume = 0;
  homeSound.loop = true;

  // Play splash sound, then fade into home sound
  splashSound.play().then(() => {
    splashSound.addEventListener('ended', () => {
      homeSound.play();

      // Fade in homeSound over 2 seconds
      let volume = 0;
      const fadeIn = setInterval(() => {
        volume += 0.05;
        homeSound.volume = Math.min(volume, 1);
        if (volume >= 1) clearInterval(fadeIn);
      }, 100);
    });
  }).catch(() => {
    // fallback: play homeSound if splashSound is blocked
    homeSound.volume = 1;
    homeSound.play();
  });

  // Click to go to main.html
  splash.addEventListener('click', () => {
    splashSound.pause();
    homeSound.pause();
    window.location.href = 'main.html';
  });
});
