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

const MINIMUM_INTEGER = 1;

const MAXIMUM_INTEGER = 999999;

const MINIMUM_LAT = 35.65;

const MAXIMUM_LAT = 35.7;

const MINIMUM_LNG = 139.7;

const MAXIMUM_LNG = 139.8;

const DECIMAL_POINT_PRECISION = 5;

const ROOMS_OPTION = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const getSimilarAds = () => {
  const similarAdList = [];
  const LIST_LENGTH = 10;

  for (let i = 0; i < LIST_LENGTH; i++) {
    const author = {
      avatar: `img/avatars/user${getImageId()}.png`,
    };
    const location = {
      lat: getRandomPositiveIntegerWithDecimalPlaces(MINIMUM_LAT, MAXIMUM_LAT, DECIMAL_POINT_PRECISION),
      lng: getRandomPositiveIntegerWithDecimalPlaces(MINIMUM_LNG, MAXIMUM_LNG, DECIMAL_POINT_PRECISION),
    };

    const offer = {
      title: 'Заголовок предложения',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(MINIMUM_INTEGER, MAXIMUM_INTEGER),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(MINIMUM_INTEGER, MAXIMUM_INTEGER),
      guests: getRandomPositiveInteger(MINIMUM_INTEGER, MAXIMUM_INTEGER),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getArrayWithNoRepeat(FEATURES),
      description: 'Описание помещения',
      photos: getArrayWithNoRepeat(PHOTOS),
    };

    const similarAd = {
      author: author,
      offer: offer,
      location: location,
    };

    similarAdList.push(similarAd);
  }

  return similarAdList;
};

export {getSimilarAds, TYPES, ROOMS_OPTION, DECIMAL_POINT_PRECISION};

