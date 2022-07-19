const getRandomPositiveInteger = (min, max) => {
  if (min > max) {
    const temporary = min;
    min = max;
    max = temporary;
  }

  const result = Math.floor(Math.random() * (max - min + 1) + min); //Взял тут https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return result;
};

const getRandomPositiveIntegerWithDecimalPlaces = (min, max, decimalPlaces) => {
  if (min > max) {
    const temporary = min;
    min = max;
    max = temporary;
  }
  const precision = Math.pow(10, decimalPlaces);
  const result =
    Math.floor((Math.random() * (max - min) + min) * precision) / precision;
  return result;
};

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

const getArrayWithNoRepeat = (elements) => {
  const randomArray = [];
  const randomArrayLength = getRandomPositiveInteger(1, elements.length);
  while (randomArray.length < randomArrayLength) {
    const randomIndex = getRandomPositiveInteger(0, elements.length - 1);
    if (!randomArray.includes(elements[randomIndex])) {
      randomArray.push(elements[randomIndex]);
    }
  }
  return randomArray;
};

const UNUSED_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getImageId = () => {
  const imageId = getRandomPositiveInteger(0, UNUSED_ID.length - 1);
  const index = UNUSED_ID.indexOf(UNUSED_ID[imageId]);
  let imageLink = '';
  if (UNUSED_ID[imageId] < 10) {
    imageLink =`0${UNUSED_ID[imageId]}`;
  } else {
    imageLink = `${UNUSED_ID[imageId]}`;
  }
  if(index >= 0) {
    UNUSED_ID.splice(index,1);
  }
  return imageLink;
};


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


const SIMILAR_AD_LIST =[];
for (let i = 0; i<10; i++){
  const AUTHOR = {
    avatar: `img/avatars/user${getImageId()}.png`,
  };
  const LOCATION = {
    lat: getRandomPositiveIntegerWithDecimalPlaces(35.65, 35.7, 5),
    lng: getRandomPositiveIntegerWithDecimalPlaces(139.7, 139.8, 5),
  };

  const OFFER = {
    title: 'Заголовок предложения',
    address: `${LOCATION.lat}, ${LOCATION.lng}`,
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

  const SIMILAR_AD = {
    author: AUTHOR,
    offer: OFFER,
    location: LOCATION,
  };

  SIMILAR_AD_LIST.push(SIMILAR_AD);
}
