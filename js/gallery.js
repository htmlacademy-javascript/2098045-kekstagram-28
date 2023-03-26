import {showBigPicture, renderComments} from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-id]');
    if(!thumbnail) {
      return;
    }
    const picture = pictures.find ((item) => item.id === Number(thumbnail.dataset.id));
    document.body.classList.add('modal-open');

    showBigPicture(picture);
    renderComments(picture.comments);
  });

};

export{renderGallery};
