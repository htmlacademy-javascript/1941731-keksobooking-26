import {
  getRandomPositiveInteger,
  getRandomPositiveIntegerWithDecimalPlaces,
  getRandomArrayElement,
  getArrayWithNoRepeat,
  getImageId} from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00',' 13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];


const similarAdList =[];

const getSimilarAdList =(listLength)=>{
  for (let i = 0; i<listLength; i++){
    const author = {
      avatar: `img/avatars/user${getImageId()}.png`,
    };
    const location = {
      lat: getRandomPositiveIntegerWithDecimalPlaces(35.65, 35.7, 5),
      lng: getRandomPositiveIntegerWithDecimalPlaces(139.7, 139.8, 5),
    };

    const OFFER = {
      title: 'Заголовок предложения',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(0, 999999),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 100),
      guests: getRandomPositiveInteger(1, 100),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getArrayWithNoRepeat(FEATURES),
      description: 'Описание помещения',
      photos: getArrayWithNoRepeat(PHOTOS),
    };

    const similarAd = {
      author: author,
      offer: OFFER,
      location: location,
    };

    similarAdList.push(similarAd);
  }
  return similarAdList;
};

export{getSimilarAdList};
