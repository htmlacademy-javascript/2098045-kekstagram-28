import {showBigPicture, createComments} from './big-picture.js';

const container = document.querySelector('.pictures');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const pageBody = document.body;

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-id]');
    if(!thumbnail) {
      return;
    }
    const picture = pictures.find ((item) => item.id === Number(thumbnail.dataset.id));
    commentCount.classList.add('hidden'); //временно скрываю кол-во комментов
    commentLoader.classList.add('hidden'); //временно скрываю загрузу остальным комментов
    pageBody.classList.add('modal-open');

    showBigPicture(picture);
    createComments(picture.comments);
  });

};

export{renderGallery};
