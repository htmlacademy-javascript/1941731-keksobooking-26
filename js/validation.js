import { adForm } from './form.js';
import { ROOMS_OPTION } from './data.js';

const MIN_PRICE = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  errorClass: 'ad-form__element--invalid', // Класс, обозначающий невалидное поле
  successClass: 'ad-form__element--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'ad-form__error' // Класс для элемента с текстом ошибки
});

function validateAdTitle (value) {
  return (value.length >= 30 && value.length <= 100);
}

pristine.addValidator(adForm.querySelector('#title'), validateAdTitle, 'От 30 до 100 символов');

const priceField = adForm.querySelector('#price');

const type = adForm.querySelector('[name="type"]');

const selectedType = type.querySelector(`option[value=${type.value}]`);

function validatePrice (value){
  return value.length && parseInt(value, 10) >= MIN_PRICE[selectedType.value];
}

function getPriceErrorMessage(){
  return `Не меньше ${MIN_PRICE[selectedType.value]} рублей`;
}
pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

type.addEventListener('change', (event) => {

  const currentSelect = event.target.value;
  priceField.placeholder = MIN_PRICE[currentSelect];

});

const rooms = adForm.querySelector('[name="rooms"]');

const guests = adForm.querySelector('[name="capacity"]');

function validateRooms() {
  return ROOMS_OPTION[rooms.value].includes(guests.value);
}

pristine.addValidator(rooms, validateRooms, 'Количество комнат и гостей несопоставимы');
pristine.addValidator(guests, validateRooms, 'Количество комнат и гостей несопоставимы');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
