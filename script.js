const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  },
);

$prev.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  },
);

// Touch events for mobile
let startX = 0;
let endX = 0;

const slide = document.querySelector('.slide');

slide.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slide.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slide.addEventListener('touchend', () => {
  if (startX - endX > 50) {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  } else if (endX - startX > 50) {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  }
});