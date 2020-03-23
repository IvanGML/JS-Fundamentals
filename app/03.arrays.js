console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.
// let arr = [1,2,5];
//
// let firstResult = arr[arr.length-1];
// let secondResult = arr.pop();
//
// console.log(firstResult);
// console.log(secondResult);
// console.log(arr);

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
// const array = [1,2,3];
// const arrayLength = array.push(4);
// const newArr = array.concat(5);
// const newArr2 = [...newArr, 6];
//
// console.log(array);
// console.log(arrayLength);
// console.log(newArr);
// console.log(newArr2);

// const array = [1,2,3];
// const addToEnd1 = [...array, 4];
// const addToEnd2 = array.concat(4);
// const addToEnd3 = array.push(4);
// console.log(addToEnd1);
// console.log(addToEnd2);
// console.log(addToEnd3);


// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// const array = [1,2,3,4];
// array.splice(3, 0, 'elem');
// const newArr = [...array.slice(0,3), 'new elem', ...array.slice(3)];
//
// console.log(array);
// console.log(newArr);

// const array = [1,2,3,4];
// array.splice(3,0,'inserted element');
// console.log(array);
// const array2 = [1,2,3,4];
// const addTo3position2 = [...array2.slice(0,3),'inserted element', ...array2.slice(3) ]
// console.log(addTo3position2);


// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.

// const array = ['👏🏻','🤜🏻','🤛🏻','🤦‍♂'];
// array.forEach(i=> console.log(i));
//
// for( let i in array) console.log(array[i]);
//
// for( let i of array) console.log(i);

// const array = [1,2,3,4];
// array.forEach(elem => console.log(elem));
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }
// for (const key of array) {
//     console.log(key);
// }


// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// let accum = 0;
// let arr = [1,40, 50, 51, 100];
// arr.forEach(item => (item > 50) && ( accum += item) );
// let accum2 = arr.reduce((sum, next) => next > 50 && sum += next );
// console.log(arr);
// console.log(accum);
// console.log(accum2);

// let arr = [1, 40, 50, 51, 100];
// console.log(arr.reduce((prev, next) => next > 50 ? (prev + next) : prev + 0, 0));


// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

const compliance = ['It\'s','time','to','go','on','grooming',':('];
console.log(compliance.join(' '));



// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.


// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// let results = {
//     r: 0,
//     k: 0,
//     t: 0
// };

// [..."dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"]
//     .forEach(item => {
//         if(item === 'r') {
//             results.r++
//         }else if(item === 'k'){
//             results.k++
//         } else if(item === 't') {
//             results.t++
//         }
//     })

// console.log(`
// Amount of letter r: ${results.r};
// Amount of letter k: ${results.k};
// Amount of letter t: ${results.t};
// `)

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// const array = ['first', 'second', 'third'];
// const item = array[Math.floor (Math.random() * array.length)];
// console.log(item);

// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.

// const array = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// array.forEach(item=>console.log(item.join(' ')));

// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

// const array = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// const newArr = []
// array.map(item => newArr.push(...item));
// console.log(newArr);


// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.

// let arr = [{id: 2}, {id: 9}, {id: 19}];
// console.log(arr.findIndex(item => item.id === 9));

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

//TODO!

// function isDuplicate(item, cache) {

// }

// function unique(arr) {
//     let result = [];
//     let chache = {}

//     for (let str of arr) {
//     if (!result.includes(str)) {
//     result.push(str);
//     }
//     }

//     return result;
//     }

//     let strings = [1,2,4,2,1,55,77,55,88];

//     console.log( unique(strings) );

// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

// let strings = [1,2,4,2,1,55,77,55,88];

// console.log(strings.map(item => parseInt(item.toString(2))));
// console.log(strings.map(item => parseInt(item.toString(8))));
// console.log(strings.map(item => parseInt(item.toString(16))));


// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

// console.log('a big brown fox jumps over the lazy dog'.split(' ').filter(item=> item.length <= 3));

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// console.log([1,2,4,2,1,55,77,55,88].every(item => typeof item === 'number'));

// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.
//TODO!
// function binarySearch(arr, value) {
//     if (!arr || !value) return 'please, pass params to get result';
//     if (arr[arr.length - 1] < value || arr[0] > value) return -1;
//     let middleElem = arr[Math.floor(arr.length / 2)];
//     if (middleElem > value) {
//         binarySearch(arr.slice(middleElem), value)
//     } else if (middleElem < value) {
//         binarySearch(arr.slice(0, middleElem), value)
//     }
//     return middleElem;
// }

// console.log(binarySearch([1,2,4,5,6,7,8,55,88], 4));
// console.log([1,2,4,5,6,7,8,55,88].indexOf(4))


// const task1 = { action: 'Create…' };
// const task2 = { action: 'Delete…' };
// const project = new WeakSet([task1, task2]);
// task1 = null;
// // wait for GC
// console.log(project.has(task1));
// Answer: true


// let User = {
//     name: 'Kate',
//     surname: 'Jhonson', 
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(' '); 
//     }
// }

// console.log(User.fullName);
// console.log(User.fullName = 'John Catfisher');

// let user = {
//     name: "John",
//     surname: "Smith",

//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };

//   let admin = {
//     __proto__: user,
//     isAdmin: true
//   };

//   alert(admin.fullName); // John Smith (*)

//   // срабатывает сеттер!
//   admin.fullName = "Alice Cooper"; // (**)
//   console.log(admin); // Alice
// //   console.log(user); // Alice

// let hamster = {
//     stomach: [],

//     eat(food) {
//       // присвоение значения this.stomach вместо вызова this.stomach.push
//       this.stomach = [...this.stomach, food];
//     }
//   };

//   let speedy = {
//      __proto__: hamster
//   };

//   let lazy = {
//     __proto__: hamster
//   };

//   // Шустрый хомяк нашёл еду
//   speedy.eat("apple");
//   speedy.eat("watermelon");
//   alert( speedy.stomach ); // apple

//   // Живот ленивого хомяка пуст
//   alert( lazy.stomach ); // <ничего>

// let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
//
//
// Object.defineProperty(dictionary, 'toString', {
//     value: function() {
//         return Object.keys(this).join()
//     },
//     // enumerable: false
// })
// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//     alert(key); // "apple", затем "__proto__"
//   }
//
//
// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"