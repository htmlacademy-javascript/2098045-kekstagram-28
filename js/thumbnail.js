import {createNewPhotos} from './data';

//нашла место для размещения фото и шаблон с содержимым
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

//кол-во фотографий
const createThumbnails = createNewPhotos(25);

//создаю временный ящик
const pictureContainerFragment = document.createDocumentFragment();

//клонирую найденный шаблон и в нем создаю миниатюры
createThumbnails.forEach (({url, description, comments, likes}) => {
  const thumbnail = pictureTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  pictureContainer.append(thumbnail);
});

pictureContainer.append(pictureContainerFragment);

export {createThumbnails};
