import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessage = successTemplate.cloneNode(true);
const errorMessage = errorTemplate.cloneNode(true);

const successInner = successMessage.querySelector('.success__inner');
const errorInner = errorMessage.querySelector('.error__inner');


successMessage.addEventListener('click', () => {
  successMessage.remove();
});

errorMessage.addEventListener('click', () => {
  errorMessage.remove();
});

successInner.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

errorInner.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

const onCloseMessage = (evt) => {
  if (isEscapeKey(evt)) {
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('keydown', onCloseMessage);
  }
};

//клонирую шаблон
const showSuccsessMessage = () => {
  document.body.append(successMessage);
  document.addEventListener('keydown', onCloseMessage);
};

//закрытие всплывающего сообщения при клике
const successButton = successMessage.querySelector('.success__button');
successButton.addEventListener('click', () => {
  successMessage.remove();

});


//сообщение об ошибке в отправлении
const showErrorMessage = () => {
  document.body.append(errorMessage);
};

const errorButton = errorMessage.querySelector('.error__button');
errorButton.addEventListener('click', () => {
  errorMessage.remove();
});


export {showSuccsessMessage, showErrorMessage};
