// Длина строки
const stringLenth = (boolean, number) => boolean.length <= number;
stringLenth('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
isPalindrome('топот');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
const extractNumber = (string) => {
  let newStr = string.replace(/\D/g,'');
  if (newStr > 0) {
    newStr = Number(newStr);
    return newStr;
  } else {
    return NaN;
  }
};
extractNumber('1 кефир, 0.5 батона');

//Функция, которая принимает три параметра исходную (строку, мин длину и строку с добавочными симв)
const formatString = (string, minLength, addition) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return addition.slice(0, formatString % addition.length) + addition.repeat(formatString / addition.length) + string;
};
formatString('qwerty', 4, '0');
