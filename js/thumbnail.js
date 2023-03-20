import {createNewPhotos} from './data.js';

//нашла место для размещения фото и шаблон с содержимым
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

//кол-во фотографий
const thumbnailElement = createNewPhotos(25);

//создаю временный ящик
const pictureContainerFragment = document.createDocumentFragment();

//клонирую найденный шаблон и в нем создаю миниатюры
function createThumbnai(picture) {
  picture.forEach (({url, description, comments, likes, id}) => {
    const thumbnail = pictureTemplate.cloneNode(true);

    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.dataset.id = id;

    pictureContainer.append(thumbnail);

  });
}
createThumbnai(thumbnailElement);

pictureContainer.append(pictureContainerFragment);

export {createThumbnai};
