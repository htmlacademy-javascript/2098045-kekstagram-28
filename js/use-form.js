import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';


const imageOverlay = document.querySelector('.img-upload__overlay');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const imageFileField = document.querySelector('.img-upload__input');
const imageUploadCancel = document.querySelector('.img-upload__cancel');

const pictureForm = document.querySelector('.img-upload__form');
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ARROR_TEXT = 'Ввели не правильное значение';
const MAX_HASHTAG_COUNT = 20;

//добавляю вывод ошибок
const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--text',
});

const showModal = () => {
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  pictureForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

//при фокусировке окно не закрывается
const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

//закрытие модалки
const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

//добавляю валидность формы
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUnicTags = (tags) => {
  const LowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return LowerCaseTags.length === new Set(LowerCaseTags).size;
};

const validateTags = (value) => {
  const hashtags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(hashtags) && hasUnicTags(hashtags) && hashtags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ARROR_TEXT
);

// pristine.addValidator(
//   pictureForm.hashtagField,
//   validateTags,
//   'Ввели не правильное значение'
// );

//отправка на сервер
const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

imageFileField.addEventListener('change', onFileInputChange);
imageUploadCancel.addEventListener('click', onCancelButtonClick);
pictureForm.addEventListener('submit', onFormSubmit);


export {showModal, hideModal, onFileInputChange};
