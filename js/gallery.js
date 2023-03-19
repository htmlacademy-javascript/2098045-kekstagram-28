import './big-picture.js';
import './thumbnail.js';

const bigPicture = document.querySelector('.big-picture').querySelector('img');
const container = document.querySelector('pictures');

const renderGallery = () => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closet('.picture');
    if(!thumbnail) {
      return;
    }
    const picture = thumbnail.find((bigPictureTemplate) =>bigPictureTemplate.id === Number(thumbnail.dataset.id));
    bigPicture.src = picture.url;
    thumbnail(picture);
  });

};

export{renderGallery};
