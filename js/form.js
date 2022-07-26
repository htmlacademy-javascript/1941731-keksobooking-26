const adForm = document.querySelector('.ad-form');

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

deactivateForm();
activateForm();


export {
  activateForm,
  deactivateForm};
