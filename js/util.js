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

const unusedId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getImageId = () => {
  const imageId = getRandomPositiveInteger(0, unusedId.length - 1);
  const index = unusedId.indexOf(unusedId[imageId]);
  let imageLink = '';

  if (unusedId[imageId] < 10) {
    imageLink =`0${unusedId[imageId]}`;
  } else {
    imageLink = `${unusedId[imageId]}`;
  }

  if(index >= 0) {
    unusedId.splice(index,1);
  }

  return imageLink;
};

export {
  getRandomPositiveInteger,
  getRandomPositiveIntegerWithDecimalPlaces,
  getRandomArrayElement,
  getArrayWithNoRepeat,
  getImageId};
