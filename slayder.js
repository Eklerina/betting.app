const slides = document.querySelectorAll('.slide');
const progressOrange = document.querySelector('.progress-orange');
const progressGray = document.querySelector('.progress-gray');
const totalSlides = slides.length;
let current = 0;

const progressPercents = [
  { orange: 75, gray: 25 },
  { orange: 25, gray: 75 }
];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  
  progressOrange.style.width = progressPercents[index].orange + '%';
  progressGray.style.width = progressPercents[index].gray + '%';
}

document.querySelector('.arrow-left').onclick = () => {
  current = (current - 1 + totalSlides) % totalSlides;
  showSlide(current);
};

document.querySelector('.arrow-right').onclick = () => {
  current = (current + 1) % totalSlides;
  showSlide(current);
};

showSlide(current);

