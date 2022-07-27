import { adForm } from './form.js';
import { ROOMS_OPTION } from './data.js';

const MIN_PRICE = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};

const MIN_TITLE_LENGTH = 30;

const MAX_TITLE_LENGTH = 100;

const NUMBER_SYSTEM = 10;


const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

function validateAdTitle (value) {
  return (value.length >= MIN_TITLE_LENGTH && value.length <= MAX_TITLE_LENGTH);
}

pristine.addValidator(adForm.querySelector('#title'), validateAdTitle, 'От 30 до 100 символов');

const priceField = adForm.querySelector('#price');

const type = adForm.querySelector('[name="type"]');

let currentSelect = type.value;


function validatePrice (){
  return priceField.value >= MIN_PRICE[currentSelect];
}

function getPriceErrorMessage(){
  return `Не меньше ${MIN_PRICE[currentSelect]} рублей`;
}
pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

type.addEventListener('change', (event) => {

  currentSelect = event.target.value;
  priceField.placeholder = MIN_PRICE[currentSelect];

});

const rooms = adForm.querySelector('[name="rooms"]');

const guests = adForm.querySelector('[name="capacity"]');

function validateRooms() {
  return ROOMS_OPTION[rooms.value].includes(guests.value);
}

pristine.addValidator(rooms, validateRooms, 'Количество комнат и гостей несопоставимы');
pristine.addValidator(guests, validateRooms, 'Количество комнат и гостей несопоставимы');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', (event) => {

  const currentTimeIn = event.target.value;
  timeOut.value = currentTimeIn;

});
timeOut.addEventListener('change', (event) => {

  const currenttimeOut = event.target.value;
  timeIn.value = currenttimeOut;

});


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {priceField};
