const IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20, 21, 22, 23, 24, 25];

const URLS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const DESCRIPTIONS = [
  'Лето оно такое',
  'Лучший вид',
  'Полетели',
  'Живучее солнце',
  'НЕодилвнный поворот',
  'Забываем',
  'Не спать',
  'В такт с жуками',
  'Улыбнись',
  'Спасибоб но нет',
  'Игры в жизнь',
  'Устроили шок контент',
  'Вот поворот',
  'Головокрудительно',
  'ура',
  'не тут то было',
  'Лова лова',
  'Только слова',
  'Забытое',
  'Пленка подъехала',
  'Случайно',
  'Упала шляпа',
  'Супер шанс на барабане',
  'Голубая луна',
  'У меня все',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomLikes = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
}
getRandomLikes(15, 200);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createNewPhoto = () => {
  const randomIdIndex = getRandomInteger(0, IDS.length-1);
  const randomUrlIndex = getRandomInteger(0, URLS.length-1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length-1);
  const randomCommentIndex = getRandomInteger(0, COMMENTS.length-1);

  return {
    id: IDS[randomIdIndex],
    url: URLS[randomUrlIndex],
    description: DESCRIPTIONS[randomDescriptionIndex],
    like: ,
    comment: COMMENTS[randomCommentIndex],
  };

};

