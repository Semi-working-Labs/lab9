const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active'); // Добавляем/удаляем класс active у меню
});