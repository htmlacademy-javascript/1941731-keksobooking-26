import {
  activateForm,
} from './form.js';

import {
  similarAdList,
  renderAd
} from './popup.js';
import {
  DECIMAL_POINT_PRECISION
} from './data.js';


const STARTING_LAT = 35.67110;
const STARTING_LNG = 139.76120;
const INCREASE_MULTIPLIER = 10;
const ICON_SIZE = 52;
const SIMILAR_AD_ICON_SIZE = 40;


const addressField = document.querySelector('#address');


const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    addressField.value = `${STARTING_LAT}, ${STARTING_LNG}`;
  })
  .setView({
    lat: STARTING_LAT,
    lng: STARTING_LNG,
  }, INCREASE_MULTIPLIER);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [ICON_SIZE/2, ICON_SIZE],
});


const mainPinMarker = L.marker(
  {
    lat: STARTING_LAT,
    lng: STARTING_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const newAddress = evt.target.getLatLng();
  const newCoordinates = {
    lat: newAddress.lat.toFixed(DECIMAL_POINT_PRECISION),
    lng: newAddress.lng.toFixed(DECIMAL_POINT_PRECISION),
  };

  addressField.value = `${newCoordinates.lat}, ${newCoordinates.lng}`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [SIMILAR_AD_ICON_SIZE, SIMILAR_AD_ICON_SIZE],
  iconAnchor: [SIMILAR_AD_ICON_SIZE/2, SIMILAR_AD_ICON_SIZE],
});

similarAdList.forEach((element) => {
  const lat = element.location.lat;
  const lng = element.location.lng;
  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon,
  },);

  marker
    .addTo(map)
    .bindPopup(renderAd(element));
});
