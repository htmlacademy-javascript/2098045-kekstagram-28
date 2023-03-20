import {makeThumbnailElement} from './thumbnail.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCansel = document.querySelector('.big-picture__cancel');
const bigPictureOpen = document.querySelector('.pictures');
const bigPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

//открываю и закрываю большую картинку

bigPictureOpen.addEventListener('click', () => {
  bigPictureContainer.classList.remove('hidden');
});

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

//кол-во фотографий
const bigPicrureElements = makeThumbnailElement;

//создаю временный ящик
const bigPictureContainerFragment = document.createDocumentFragment();

bigPicrureElements.forEach (({url, description, comments, likes, id}) => {
  const bigPicture = bigPictureTemplate.cloneNode(true);

  bigPicture.querySelector('.picture__img').src = url;
  bigPicture.querySelector('.picture__img').alt = description;
  bigPicture.querySelector('.picture__comments').textContent = comments.length;
  bigPicture.querySelector('.picture__likes').textContent = likes;
  bigPicture.dataset.id = id;

  bigPictureOpen.append(bigPicture);
});

bigPictureOpen.append(bigPictureContainerFragment);
/*
const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', evt => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if(!thumbnail) {
      return;
    }

    const picture = pictures.find(
       (item) => item.id === + thumbnail.dataset.thumbnailId
    );


  })
};  */

