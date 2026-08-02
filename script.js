// Birthday page interactions and ambience.
// Add or adjust the confetti colors below if you want to match Feliscia's favorite palette better.
const palette = ['#ff8fb0', '#76b6ff', '#ffdce9', '#ffffff'];

function createConfetti() {
  const layer = document.createElement('div');
  layer.className = 'confetti-layer';
  document.body.appendChild(layer);

  const count = 70;

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';

    const left = Math.random() * 100;
    const delay = Math.random() * 0.4;
    const size = 8 + Math.random() * 10;
    const color = palette[Math.floor(Math.random() * palette.length)];

    piece.style.left = `${left}%`;
    piece.style.top = '-10px';
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.4}px`;
    piece.style.background = color;
    piece.style.animationDelay = `${delay}s`;

    layer.appendChild(piece);
  }

  window.setTimeout(() => {
    layer.remove();
  }, 2200);
}

function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((element) => observer.observe(element));
}

window.addEventListener('load', () => {
  createConfetti();
  revealOnScroll();
});
