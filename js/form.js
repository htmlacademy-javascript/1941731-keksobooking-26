import{pristine} from './validation.js';
import{sendData} from './load.js';
import{showAlert, showSucces} from './util.js';

const adForm = document.querySelector('.ad-form');

const submitButton = document.querySelector('.ad-form__submit');

const formSlider = document.querySelector('.ad-form__slider');

const mapFilterForm = document.querySelector('.map__filters');

const deactivateForm = () => {
  adForm.classList.add('.ad-form--disabled');

  for (const adFormChild of adForm.children){

    adFormChild.disabled = true;
  }
  formSlider.disabled = true;


  mapFilterForm.classList.add('.map__filters--disabled');
  for (const mapFilterFormChild of mapFilterForm.children){

    mapFilterFormChild.disabled = true;
  }
};

const activateForm = () => {
  adForm.classList.remove('.ad-form--disabled');

  for (const adFormChild of adForm.children){

    adFormChild.disabled = false;
  }
  formSlider.disabled = false;

  mapFilterForm.classList.remove('.map__filters--disabled');
  for (const mapFilterFormChild of mapFilterForm.children){

    mapFilterFormChild.disabled = false;
  }
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          showSucces();
          document.querySelector('.success').classList.remove('hidden');
          unblockSubmitButton();
        },
        () => {
          showAlert();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
    evt.target.reset();
  });
};

export {
  activateForm,
  deactivateForm,
  setUserFormSubmit,
  adForm
};
