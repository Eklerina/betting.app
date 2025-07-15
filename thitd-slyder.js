document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider-review-track');
  const cards = document.querySelectorAll('.slider-reviews-card');
  const prevBtn = document.querySelector('.slider-review-arrow-prev');
  const nextBtn = document.querySelector('.slider-review-arrow-next');

  // Рассчитываем ширину одной карточки + margin (если есть)
  const cardStyle = window.getComputedStyle(cards[0]);
  const cardMarginRight = parseFloat(cardStyle.marginRight);
  const cardWidth = cards[0].offsetWidth + cardMarginRight;

  track.style.width = `${cardWidth * cards.length}px`;

  let currentPosition = 0;
  const visibleCards = 1; 

  function moveSlider() {
    track.style.transform = `translateX(${currentPosition}px)`;
    
    prevBtn.disabled = currentPosition === 0;
    nextBtn.disabled = currentPosition <= -(cardWidth * (cards.length - visibleCards));
  }

  nextBtn.addEventListener('click', function() {
   
    currentPosition -= cardWidth;
   
    if (currentPosition < -((cards.length - visibleCards) * cardWidth)) {
      currentPosition = -((cards.length - visibleCards) * cardWidth);
    }
    
    moveSlider();
  });

  prevBtn.addEventListener('click', function() {
  
    currentPosition += cardWidth;
 
    if (currentPosition > 0) {
      currentPosition = 0;
    }
    
    moveSlider();
  });

  moveSlider();
});
