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


similarAdList.forEach((ad) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = getOfferType(ad.offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  adElement.querySelector('.popup__features').textContent = ad.offer.features;
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  if(ad.offer.photos.length===1){

    adElement.querySelector('.popup__photo').src = ad.offer.photos;
  } else{

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

  adElement.querySelector('.popup__avatar').src = ad.author.avatar;


  mapCanvas.appendChild(adElement);
});
