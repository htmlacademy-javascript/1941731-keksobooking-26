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

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const getArrayWithNoRepeat = (elements) => {
  let randomArray = [];
  let randomArrayLength = getRandomPositiveInteger(1, elements.length);
  while (randomArray.length < randomArrayLength) {
    let randomIndex = getRandomPositiveInteger(0, elements.length - 1);
    if (!randomArray.includes(elements[randomIndex])) {
      randomArray.push(elements[randomIndex]);
    }
  }
  return randomArray;
};

let unusedId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getImageId = () => {
  imageId = getRandomPositiveInteger(1, 10);
  let index = unusedId.indexOf(imageId);
  imageId < 10 ? (imageId = "0" + imageId) : (imageId += "");
  if (index >= 0) {
    unusedId.splice(index, 1);
  }
  console.log(unusedId);
  return imageId;
};
const TYPES = ["palace", "flat", "house", "bungalow", "hotel"];

const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const CHECKINS = ["12:00", "13:00", "14:00"];

const CHECKOUTS = ["12:00", "13:00", "14:00"];

const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];

const AUTHOR = {
  avatar: "img/avatars/user" + getImageId() + ".png",
};
const LOCATION = {
  lat: getRandomPositiveIntegerWithDecimalPlaces(35.65, 35.7, 5),
  lng: getRandomPositiveIntegerWithDecimalPlaces(139.7, 139.8, 5),
};

const OFFER = {
  title: "Заголовок предложения",
  address: "" + LOCATION.lat + ", " + LOCATION.lng,
  price: getRandomPositiveInteger(0, 999999),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(1, 100),
  guests: getRandomPositiveInteger(1, 100),
  checkin: getRandomArrayElement(CHECKINS),
  checkout: getRandomArrayElement(CHECKOUTS),
  features: getArrayWithNoRepeat(FEATURES),
  description: "Описание помещения",
  photos: getArrayWithNoRepeat(PHOTOS),
};

const SIMILAR_AD = {
  author: AUTHOR,
  offer: OFFER,
  location: LOCATION,
};

console.log(OFFER);
console.log(LOCATION);
console.log(SIMILAR_AD);
