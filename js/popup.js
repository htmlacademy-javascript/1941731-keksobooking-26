import {getSimilarAds} from './data.js';

const similarAdList = getSimilarAds();

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

const setTextContent = (node, objectValue) => {
  if(objectValue === undefined){

    node.classList.add('visually-hidden');
  } else {

    node.textContent = objectValue;
  }
};

const setSrcContent = (node, objectValue) => {
  if(objectValue === undefined){

    node.classList.add('visually-hidden');
  } else {

    node.src = objectValue;
  }
};

const setPhotos = (node, objectValue) => {
  if(objectValue.length){

    for (let i = 0; i < objectValue.length; i++){

      const photo = document.createElement('img');
      photo.src = objectValue[i];
      photo.width = 45;
      photo.height = 40;
      photo.alt ='Фотография жилья';
      photo.classList.add('popup__photo');
      node.appendChild(photo);
    }
  }
};

const setIcons = (node, objectValue) => {
  const featureList = node.querySelectorAll('.popup__feature');
  const modifiers = objectValue.map((feature) => `popup__feature--${feature}`);

  featureList.forEach((featureListItem) => {

    const modifier = featureListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });

};

const renderAd = (ad) =>{
  const adElement = similarAdTemplate.cloneNode(true);
  setTextContent(adElement.querySelector('.popup__title'), ad.offer.title);
  setTextContent(adElement.querySelector('.popup__text--address'), ad.offer.address);
  setTextContent(adElement.querySelector('.popup__text--price'), ad.offer.price ? `${ad.offer.price} ₽/ночь` : undefined);
  setTextContent(adElement.querySelector('.popup__type'), ad.offer.type ? getOfferType(ad.offer.type) : undefined);
  setTextContent(adElement.querySelector('.popup__text--capacity'), (ad.offer.rooms && ad.offer.guests) ? `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей` : undefined);
  setTextContent(adElement.querySelector('.popup__text--time'), ad.offer.checkin ? `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}` : undefined);
  setIcons(adElement.querySelector('.popup__features'), ad.offer.features);
  setTextContent(adElement.querySelector('.popup__description'), ad.offer.description);
  adElement.querySelector('.popup__photo').remove();
  setPhotos(adElement.querySelector('.popup__photos'), ad.offer.photos);
  setSrcContent(adElement.querySelector('.popup__avatar'), ad.author.avatar);

  return adElement;
  // mapCanvas.appendChild(adElement);
};

export {
  renderAd,
  similarAdList};
