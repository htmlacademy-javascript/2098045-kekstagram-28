const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessage = successTemplate.cloneNode(true);
const errorMessage = errorTemplate.cloneNode(true);

//клонирую шаблон
const showSuccsessMessage = () => {
  document.body.append(successMessage);
};


//закрытие всплывающего сообщения при клике и  нажатии кнопки esc
// const successContainer = successMessage.querySelector('.success__inner');

const successButton = successMessage.querySelector('.success__button');
successButton.addEventListener('click', () => {
  successMessage.classList.add('hidden');
});


//сообщение об ошибке в отправлении
const showErrorMessage = () => {
  document.body.append(errorMessage);
};


const errorButton = errorMessage.querySelector('.error__button');
errorButton.addEventListener('click', () => {
  errorMessage.classList.add('hidden');
});


export {showSuccsessMessage, showErrorMessage};
