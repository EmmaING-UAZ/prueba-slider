const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');
const slide = document.querySelector('.slide');

function nextSlide() {
  const items = document.querySelectorAll('.item');
  slide.appendChild(items[0]);
}

function prevSlide() {
  const items = document.querySelectorAll('.item');
  slide.prepend(items[items.length - 1]);
}

$next.addEventListener('click', nextSlide);
$prev.addEventListener('click', prevSlide);

// --- Swipe Functionality for Mobile ---
let startX = 0;
let endX = 0;

slide.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slide.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slide.addEventListener('touchend', () => {
  // Check if swipe is significant
  if (startX - endX > 50) {
    nextSlide();
  } else if (endX - startX > 50) {
    prevSlide();
  }
  // Reset values
  startX = 0;
  endX = 0;
});
