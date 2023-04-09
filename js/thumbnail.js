//нашла место для размещения фото и шаблон с содержимым
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const container = document.querySelector('.pictures');


//клонирую найденный шаблон и в нем создаю миниатюры

// createThumbnails = (picture) => {

//   //создаю временный ящик
//   picture.forEach (({url, description, comments, likes, id}) => {
//     const thumbnail = pictureTemplate.cloneNode(true);

//     thumbnail.querySelector('.picture__img').src = url;
//     thumbnail.querySelector('.picture__img').alt = description;
//     thumbnail.querySelector('.picture__comments').textContent = comments.length;
//     thumbnail.querySelector('.picture__likes').textContent = likes;
//     thumbnail.dataset.id = id;

//     return (thumbnail);

//   });
// };

const createThumbnails = ({comments, description, likes, url, id}) => {
  const thumbnail = pictureTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.id = id;

  return (thumbnail);
};


const renderThumbnails = (pictures, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnails(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {renderThumbnails };
