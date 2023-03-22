
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCansel = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureComments = document.querySelector('.comments-count');
const commentContainer = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const pageBody = document.body;


bigPictureCansel.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden');
  pageBody.classList.remove('modal-open');
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

  commentContainer.innerHTML = '';

  information.forEach (({avatar, description, message}) => {
    const newComment = commentItem.cloneNode(true);

    newComment.querySelector('.social__picture').src = avatar;
    newComment.querySelector('.social__picture').alt = description;
    newComment.querySelector('.social__text').textContent = message;

    commentsContainerFragment.append(newComment);
  });

  commentContainer.append(commentsContainerFragment);
}

export {showBigPicture, createComments};

