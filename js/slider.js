
const sliderElement = document.querySelector('.ad-form__slider');
const MIN_SLIDER_POINT = 0;
const MAX_SLIDER_POINT = 100000;

const valueElement = document.querySelector('#price');


noUiSlider.create(sliderElement, {
  range: {
    min: MIN_SLIDER_POINT,
    max: MAX_SLIDER_POINT,
  },
  start: 5000,
  connect: 'lower',

});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

