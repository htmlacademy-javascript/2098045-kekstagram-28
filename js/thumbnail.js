//нашла место для размещения фото и шаблон с содержимым
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');


//клонирую найденный шаблон и в нем создаю миниатюры

function createThumbnais(picture) {

  //создаю временный ящик
  const pictureContainerFragment = document.createDocumentFragment();

  picture.forEach (({url, description, comments, likes, id}) => {
    const thumbnail = pictureTemplate.cloneNode(true);

    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.dataset.id = id;

    pictureContainer.append(thumbnail);

  });
  pictureContainer.append(pictureContainerFragment);
}

export {createThumbnais};
