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
