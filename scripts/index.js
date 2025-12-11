const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active'); // Добавляем/удаляем класс active у меню
});

//Open popup
let editButton = document.querySelector(".header__complain");
let editPopup = document.querySelector(".popup");
editButton.addEventListener("click", function(){
  editPopup.classList.add("popup_opened")
})

//Close popup
let closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", function(){
  editPopup.classList.remove("popup_opened");
})
