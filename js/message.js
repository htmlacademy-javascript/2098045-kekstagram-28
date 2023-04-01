const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successButton = document.querrySelector('.success__button');

//сообщение об успешном отправлении
const succsessContainer = document.createElement('div');
succsessContainer.classList.add ('success-messages');

function showSuccsessMessage (message) {
  const messageContainerFragment = document.createDocumentFragment();
  message(({title, button}) => {
    const newMessage = successTemplate.cloneNode(true);

    newMessage.querySelector('.success__title').textContent = title;
    newMessage.querySelector('.success__button').textContent = button;

    messageContainerFragment.append(newMessage);
  });

  succsessContainer.append(messageContainerFragment);
}


//закрытие всплывающего сообщения при клике и  нажатии кнопки esc
successButton.addEventListener('onclick', () => {
  succsessContainer.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    succsessContainer.classList.add('hidden');
  }
});

//сообщение об ошибке в отправлении
const errorContainer = document.createElement('section');
errorContainer.classList.add ('error-messages');

function showErrorMessage (message) {
  const messageContainerFragment = document.createDocumentFragment();

  message.forEach(({title, button}) => {
    const newMessage = errorTemplate.cloneNode(true);

    newMessage.querySelector('.error__title').textContent = title;
    newMessage.querySelector('.error__button').textContent = button;

    messageContainerFragment.append(newMessage);
  });

  errorContainer.append(messageContainerFragment);
}


export {showSuccsessMessage, showErrorMessage};
