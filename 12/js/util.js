// const ALERT_SHOW_TIME = 5000;

const BASE = 10;

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

  const precision = Math.pow(BASE, decimalPlaces);
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
  const largestSingleNumber = 9;
  if (unusedId[imageId] <= largestSingleNumber) {
    imageLink =`0${unusedId[imageId]}`;
  } else {
    imageLink = `${unusedId[imageId]}`;
  }

  if (index >= 0) {
    unusedId.splice(index,1);
  }

  return imageLink;
};


const showAlert = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const alertContainer = errorTemplate.cloneNode(true);
  alertContainer.style.zIndex = '1000';
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100%';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '300px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';

  document.body.append(alertContainer);

  document.addEventListener('click', closeAlert);
  document.addEventListener('keydown', closeAlert);
};

function closeAlert(){
  document.querySelector('.error').remove();
  document.removeEventListener('click', closeSuccess);
  document.removeEventListener('keydown', closeSuccess);
}

const showSucces = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successContainer = successTemplate.cloneNode(true);
  successContainer.style.zIndex = '1000';
  successContainer.style.width = '100%';
  successContainer.style.height = '100%';
  successContainer.style.position = 'fixed';
  successContainer.style.left = '0';
  successContainer.style.top = '0';
  successContainer.style.padding = '300px';
  successContainer.style.fontSize = '30px';
  successContainer.style.textAlign = 'center';
  successContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

  document.body.append(successContainer);

  document.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', closeSuccess);

};

function closeSuccess(){
  document.querySelector('.success').remove();
  document.removeEventListener('click', closeSuccess);
  document.removeEventListener('keydown', closeSuccess);
}
export {
  getRandomPositiveInteger,
  getRandomPositiveIntegerWithDecimalPlaces,
  getRandomArrayElement,
  getArrayWithNoRepeat,
  getImageId,
  showAlert,
  showSucces};
