import {showBigPicture} from './big-picture.js';
showBigPicture();

import {createThumbnai} from './thumbnail.js';
createThumbnai();

const container = document.querySelector('pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closet('[data-id]');
    if(!thumbnail) {
      return;
    }
    const picture = pictures.find ((item) => item.id === +thumbnail.dataset.id);

  });
  bigPicrureElements(picture);
};

export{renderGallery};
