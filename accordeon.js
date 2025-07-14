// Получаем все элементы аккордеона
const accordionItems = document.querySelectorAll('.accordion-item');

// Открываем все блоки по умолчанию
accordionItems.forEach(item => {
  item.classList.add('open');
});

// Вешаем обработчик на каждый заголовок
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    // Переключаем класс open для текущего блока
    item.classList.toggle('open');
  });
});
