// Load and play sound on page load
const audio = new Audio('assets/home-sound.mp3');
audio.loop = true;
audio.volume = 1.0;
audio.play().catch(e => {
  console.log('Autoplay blocked, waiting for user interaction...');
});

// Handle splash image click
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');

  if (splash) {
    splash.addEventListener('click', () => {
      // Optionally add a fade or scale effect
      splash.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      splash.style.transform = 'scale(1.05)';
      splash.style.opacity = '0';

      setTimeout(() => {
        audio.pause(); // Stop sound
        window.location.href = 'main.html'; // Transition to main
      }, 400);
    });
  }
});

