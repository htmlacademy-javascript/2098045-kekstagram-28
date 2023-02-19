// Длина строки

let stringLenth = function (boolean, number) {
  if (boolean.length <= number) {
    return true;
  }
    return false;
};

stringLenth('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  string = string.toLowerCase();
  const wordArray = [...string];
  const newArray = [];
  wordArray.forEach(index => {
    newArray.unshift(index);
  });
  const reversedString = newArray.join('');
  return string === reversedString;
}

isPalindrome('topot');


//Функция, которая принимает три параметра исходную (строку, мин длину и строку с добавочными симв)
var myPad = (source, count, addition) => {
  if (source.length >= count) {
    return source;
  }

  const preffixLength = count - source.length;
	const sample = addition;

  while (addition.length < preffixLength - sample.length) {
    addition += addition;
  }

  return  sample.slice(0, preffixLength - addition.length ) + addition + source;
};

myPad('qwerty', 4, '0');
