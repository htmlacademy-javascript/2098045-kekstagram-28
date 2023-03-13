import {createNewPhoto} from './util.js';

//нашла место для размещения фото и шаблон
const pictureContainer = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createThumbnail = createNewPhoto();

const pictureContainerFragment = document.createDocumentFragment();

//Нашла и склонировала шаблон, записала в него данные
createThumbnail.forEach(({url, description, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureContainerFragment.appendChild(pictureElement);
});

pictureContainer.append(pictureContainerFragment);


export {createThumbnail};
