console.log('Topic: Strings');
// Task 01. padStart
// RU: Объявите три переменных: hour, minute, second.
//     Присвойте им следующие значения: 4, 35, 5.
//     Выведите в консоль время в формате 04:35:05.
// EN: Declare three variables: hour, minute, second.
//     Assign them the following values: 4, 35, 5.
//     Display the time in the format 04:35:05 in the console.
// let hour = 4, minute = 35, second = 5;
//
// // const date = new Date(2020, 2, 11, hour, minute, second);
// //
// // console.log(date.toString().split(' ')[4]);
//
// const getTime = (...args) =>
//     args.reduce((result, next, index) => result + `${index === 0 ? '' : ':'}` + next.toString().padStart(2, '0'), '');
//
// console.log(getTime(hour, minute, second));

// Task 02. repeat
// RU: Создайте функцию, которая выведет в консоль пирамиду на 9 уровней как показано ниже
//     1
//     22
//     333
//     4444
//     ...
// EN: Create a function which displays a 9 level pyramid in the console according to the
//     following pattern
//     1
//     22
//     333
//     4444
//     ...
// !function any() {
//     for (let i = 1; i < 10; i++) {
//         console.log(('' + i).repeat(i))
//     }
// }();

// Task 03. includes
// RU: Напишите код, который выводит в консоль true, если строка str содержит
//     'viagra' или 'XXX', а иначе false.
//     Тестовые данные: 'buy ViAgRA now', 'free xxxxx'
// EN: Create a snippet of code which displays the value true in the console
//     when str contains 'viagra' or 'XXX', otherwise it displays false.
// const filterString = string => (string.toLowerCase().includes('viagra') || string.toLowerCase().includes('xxx'));
// console.log(filterString('viagra'));
// console.log(filterString('XXX'));

// Task 04. includes + index
// RU: Проверить, содержит ли строка второе вхождение подстроки,
//     вернуть true/false.
// EN: Check whether the string contains a second occurrence of a substring,
//     return true / false.
// console.log(checkSecondOccur('viagra', 'viagra'));
// console.log(checkSecondOccur('viagraviagra', 'viagra'));
// console.log(checkSecondOccur('xxx viagra', 'viagra'));
// function checkSecondOccur(string, key) {
//     const index = string.toLowerCase().indexOf(key);
//     if( index !== -1 ) {
//         return string.includes(key, index + key.length);
//     }
//     return false;
// }


// Task 05. Template literal
// RU: Создать строку: "ten times two totally is 20"
//     используя переменные:
//     const a = 10;
//     const b = 2;
//     и template literal
// EN: Create s string "ten times two totally is 20"
//     using the following variables:
//     const a = 10;
//     const b = 2;
//     and template literal
// const a = 10;
// const b = 2;
// const string = `ten times two totally is ${a * b}`;
// console.log(string);


// Task 06. normalize
// RU: Создайте функцию, которая сравнивает юникод строки.
//     Сравните две строки
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
// EN: Create a function that compares the unicode strings.
//     Compare 2 strings:
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
// let str1 = '\u006d\u0061\u00f1';
// let str2 = '\u006d\u0061\u006e\u0303';
// const compare = (s1, s2) => s1.normalize() === s2.normalize();
// console.log(compare(str1, str2));


// Task 07. endsWith
// RU: Создайте функцию, которая на вход получает массив имен файлов и расширение файла
//     и возвращает новый массив, который содержит файлы указанного расширения.
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.

// Task 08. String.fromCodePoint
// RU: Создать функцию, которая выводит в консоль строчку в формате 'символ - код'
//     для кодов в диапазоне 78000 - 80000.
// EN: Create a function that displays a line in the format 'character - code' to the console
//     for codes in the range of 78000 - 80000.

// Task 09
// RU: Создайте функцию, которая должна выводить в консоль следующую пирамиду
//     Пример:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
// EN: Create a function that should display the next pyramid in the console
//     Example:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'

// Task 10
// RU: Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
//     и добавляет знак доллара перед числом в шаблонном литерале.
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.
