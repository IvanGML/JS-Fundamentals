console.log('Topic: Date object');

// Task 1
// RU: Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy и dd Month yyyy
// const date = new Date(2020, 2, 11);
//
// const formatedDate = `${date.getDate()}.${''+date.getMonth().length > 1 ? date.getMonth() : '0' + date.getMonth() }.${date.getFullYear()}`;
//
// const splitedDate = date.toString().split(' ');
// const formatedDate2 = `${splitedDate[2]} ${splitedDate[1]} ${splitedDate[3]}`;
//
// console.log(formatedDate);
// console.log(formatedDate2);


// Task 2
// RU: Создать объект Date из строки '15.03.2025'.
// EN: Create an object Date from the string '15.03.2025'.

// const date = new Date(2025, 2, 15);
// console.log(date);


// Task 3
// RU: Создать объект Date, который содержит:
//     1. завтрашнюю дату,
//     2. первое число текущего месяца,
//     3. последнее число текущего месяца
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month
// console.log(new Date(Date.now() + 3600 * 24 * 1000));
// console.log(new Date(2020, new Date().getMonth(), 1));
// console.log(new Date(2020, new Date().getMonth() + 1, 0));

// Task 4
// RU: Подсчитать время суммирования чисел от 1 до 1000.
// EN: Calculate the time of summing numbers from 1 to 1000.
// const recursSum = n => n > 1 ? recursSum(n-1) + n : n;
// let time = performance.now();
// console.log(recursSum(100));
// console.log(performance.now() - time);
//
// let time2 = performance.now();
// console.log(recursSum(12500));
// console.log(performance.now() - time2);


// Task 5
// RU: Подсчитать количество дней с текущей даты до Нового года.
// EN: Calculate the number of days from the current date to the New Year.

// const currentDate = Date.now();
// const nextYear = new Date(new Date().getFullYear() + 1, 0, 1);
// const daysLeftToNestNewYear = ((nextYear - currentDate) / (3600 * 24 * 1000) + 1).toFixed(0);
// console.log(`${daysLeftToNestNewYear} till the next year :)`)

