const sliderTrack = document.querySelector('.slider-review-track');
const sliderCards = document.querySelectorAll('.slider-reviews-card');
const prevArrow = document.querySelector('.slider-review-arrow.prev');
const nextArrow = document.querySelector('.slider-review-arrow.next');

let currentIndex = 0;
const visibleCards = 2;
const totalCards = sliderCards.length;

function getCardWidthWithGap() {
  const cardStyle = window.getComputedStyle(sliderCards[0]);
  const cardWidth = sliderCards[0].offsetWidth;
  const gap = parseInt(cardStyle.getPropertyValue('column-gap')) || 20;
  return cardWidth + gap;
}

function updateSlider() {
  const cardWidthWithGap = getCardWidthWithGap();
  const offset = -currentIndex * cardWidthWithGap;
  sliderTrack.style.transform = `translateX(${offset}px)`;
  prevArrow.disabled = currentIndex === 0;
  nextArrow.disabled = currentIndex >= totalCards - visibleCards;
}

prevArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextArrow.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

updateSlider();

window.addEventListener('resize', updateSlider);
