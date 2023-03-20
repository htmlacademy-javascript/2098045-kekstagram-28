import './big-picture.js';
import './thumbnail.js';

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
