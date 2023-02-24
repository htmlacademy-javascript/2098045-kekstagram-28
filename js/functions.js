// Длина строки
let stringLenth = function (boolean, number) {
  return boolean.length <= number;
}
stringLenth('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  string = string.toLowerCase();
  const symbols = [...string];
  const newSymbols = [];
  symbols.forEach(element=> {
    newSymbols.unshift(element);
  });
  const reversedString = newSymbols.join('');
  return string === reversedString;
}
isPalindrome('topot');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
let extractNumber = function (string) {
  let newStr = string.replace(/\D/g,'');
  if (newStr > 0) {
  newStr = Number(newStr);
  return newStr;
  } else {
    return NaN;
    };
  }
  extractNumber('1 кефир, 0.5 батона');

//Функция, которая принимает три параметра исходную (строку, мин длину и строку с добавочными симв)
const  formatString = (string, minLength, addition) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return addition.slice(0,  formatString % addition.length) + addition.repeat( formatString / addition.length ) + string;
}

myPad('qwerty', 4, '0');
