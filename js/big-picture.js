
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCansel = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureComments = document.querySelector('.comments-count');
const commentTemplate = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');

bigPictureCansel.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden');
});
//закрытие большой картинки при нажатии кнопки esc
document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    bigPictureContainer.classList.add('hidden');
  }
});

function showBigPicture ({url, description, comments, likes}) {
  bigPictureContainer.classList.remove('hidden');
  bigPictureImg.src = url;
  bigPictureDescription.textContent = description;
  bigPictureLikes.textContent = likes;
  bigPictureComments.textContent = comments.length;
}

//Комментарии к большой картинке
function createComments (information) {
  const commentsContainerFragment = document.createDocumentFragment();

  commentTemplate.innerHTML = '';

  information.forEach (({avatar, description, message}) => {
    const newComment = commentItem.cloneNode(true);

    newComment.querySelector('.social__picture').src = avatar;
    newComment.querySelector('.social__picture').alt = description;
    newComment.querySelector('.social__text').textContent = message;
    commentTemplate.append(newComment);
  });
  commentTemplate.append(commentsContainerFragment);
}

export {showBigPicture, createComments};

