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
  const symbols = [...string];
  const newSymbols = [];
  symbols.forEach(index => {
    newSymbols.unshift(index);
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
const myPad = (string, minLength, addition) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, myPad % pad.length) + pad.repeat(myPad / pad.length ) + string;
}

myPad('qwerty', 4, '0');
