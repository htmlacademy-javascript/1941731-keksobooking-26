import {getSimilarAds} from './data.js';

const similarAdList = getSimilarAds();

const mapCanvas = document.querySelector('#map-canvas');
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const typeContainer = document.querySelector('#type');
const typeList = typeContainer.querySelectorAll('option');


const getOfferType = (offerType) => {
  for (const type of typeList){

    if (type.value === offerType) {

      return  type.textContent;
    }
  }
};

const setTextContent =(node, objectValue) => {
  if(objectValue === undefined){
    node.classList.add('visually-hidden');
  } else {
    node.textContent = objectValue;
  }
};

const setSrcContent =(node, objectValue) => {
  if(objectValue === undefined){
    node.classList.add('visually-hidden');
  } else {
    node.src = objectValue;
  }
};
similarAdList.forEach((ad) => {
  const adElement = similarAdTemplate.cloneNode(true);
  setTextContent(adElement.querySelector('.popup__title'), ad.offer.title);
  setTextContent(adElement.querySelector('.popup__text--address'), ad.offer.address);
  setTextContent(adElement.querySelector('.popup__text--price'), ad.offer.price ? `${ad.offer.price} ₽/ночь` : undefined);
  setTextContent(adElement.querySelector('.popup__type'), ad.offer.type ? getOfferType(ad.offer.type) : undefined);
  setTextContent(adElement.querySelector('.popup__text--capacity'), (ad.offer.rooms && ad.offer.guests) ? `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей` : undefined);
  setTextContent(adElement.querySelector('.popup__text--time'), ad.offer.checkin ? `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}` : undefined);
  setTextContent(adElement.querySelector('.popup__features'), ad.offer.features);
  setTextContent(adElement.querySelector('.popup__description'), ad.offer.description);
  if(ad.offer.photos.length === 1){

    adElement.querySelector('.popup__photo').src = ad.offer.photos;
  }

  else if(ad.offer.photos.length ===0){
    adElement.querySelector('.popup__photo').classList.add('visually-hidden');
  }

  else {

    adElement.querySelector('.popup__photo').src = ad.offer.photos[0];
    for (let i = 1; i<ad.offer.photos.length; i++){

      const photo = document.createElement('img');
      photo.src = ad.offer.photos[i];
      photo.width = 45;
      photo.height = 40;
      photo.alt ='Фотография жилья';
      photo.classList.add('popup__photo');
      adElement.querySelector('.popup__photos').appendChild(photo);
    }
  }

  setSrcContent(adElement.querySelector('.popup__avatar'), ad.author.avatar);
  mapCanvas.appendChild(adElement);
});
