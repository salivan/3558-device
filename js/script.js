// @ts-check
var write_us = document.querySelector(".button_link_wtite-us");
var popup_form = document.querySelector(".popup_form");
var closeFormButton = popup_form.querySelector(".popup__close");
var map = document.querySelector(".map");
var popup_map = document.querySelector(".popup_map");
var closeMapButton = popup_map.querySelector(".popup__close");
var form = popup_form.querySelector("form");
var formSubmitButton = form.querySelector(".button[type='submit']");


var user_name = document.getElementById("name");
var user_email = document.getElementById("email");
var user_message = document.getElementById("text-message");

write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_form.classList.add("popup-open");
  user_name.focus();
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("popup-open");
});

formSubmitButton.addEventListener("click", function () {
  if (!form.checkValidity()) {
    popup_form.classList.add('form-error');
  }
});

closeFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_form.classList.remove("popup-open");
  popup_form.classList.remove("form-error");
});

closeMapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove("popup-open");

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode !== 27) return;
  popup_map.classList.remove("popup-open");
  popup_form.classList.remove("popup-open");
});


const ul = document.querySelector('.services__list');
ul.addEventListener('click', (e) => {
  let current = document.querySelector('.services__service_current');
  let target = e.target
  while (target.tagName !== 'UL') {
    console.log('tagName', target.tagName);
    if (target.tagName === 'LI') {
      current.classList.remove('services__service_current');
      target.classList.add('services__service_current');
    }
    target = target.parentNode;
  }
});










