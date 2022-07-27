import {
  activateForm,
  deactivateForm} from './form.js';
import {
  similarAdList,
  renderAd
} from './popup.js';

const STARTING_LAT = 35.67110;
const STARTING_LNG = 139.76120;
const INCREASE_MULTIPLIER = 10;
const ICON_SIZE = 52;

const addressField = document.querySelector('#address');


const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    addressField.value = `${STARTING_LAT}, ${STARTING_LNG}`;
    console.log('Карта инициализирована');
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
    lat: newAddress.lat.toFixed(5),
    lng: newAddress.lng.toFixed(5),
  };

  addressField.value = `${newCoordinates.lat}, ${newCoordinates.lng}`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
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
