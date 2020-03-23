console.log('Topic: Iterators');
// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.
// const colors = {
//   green: '#0e0',
//   orange: '#f50',
//   pink: '#e07'
// };
//
// const itColors = keyValueIterable(colors);
// for (const [, color] of itColors) {
//   console.log(color);
// }
//
// function keyValueIterable(obj) {
//     let result = [];
//     for(let i in obj) {
//         result.push([i, obj[i]]);
//     }
//     return result;
//     // return Object.entries(obj);
// }


// Task 2
// RU: В коллекции хранятся все имена пользователей, которые присоединились к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте итератор, который возвращает только имена администраторов.
// EN: The following collection store all the names of the user that have joined a particular telegram group. 
//     The boolean flag indicates whether a user is an administrator of the group.
//     Сreatereate an iterator that returns only the administrators' names.

/*const users = {
  anna: false,
  boris: true, // admin
  christina: false,
  dave: false,
  elena: false,
  felix: true,  // admin
};
Object.entries(users).forEach(([name, value]) => value ? console.log(name) : null); // boris, felix
for(let [name, isAdmin] of Object.entries(users)) {
    if (isAdmin) console.log(name);
}*/


// Task 3
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random


// const take = (sequence, amount) => {
//     let loopThrough = sequence(amount);
//     for (let i of loopThrough) {
//         console.log(i, loopThrough);
//     }
// };
//
// take(doIt, 15);
// //
// function *doIt(sequence, stop){
//     var counter = 0;
//     while (true){
//         console.log(sequence);
//         yield sequence[Symbol.iterator]().next().value;
//         counter += 1;
//         if (counter === stop) break;
//     }
// }

// const take = (sequence, amount) => {
//     let results = [];
//     let loop = 0;
//     for ( let a of sequence) {
//         results.push(a);
//         loop++;
//         if (loop === amount) break;
//     }
//     return results;
// };
//
// const random = {
//   [Symbol.iterator]: () => ({
//     next: () => ({
//       value: Math.random()
//     })
//   })
// };
//
//
// const a = [...take(random,3)];
// console.log(a);

// const range = {
//     from: 15,
//     to: 32,
//     [Symbol.iterator]() {
//         return ({
//             from: this.from,
//             to: this.to,
//             next() {
//                 if(this.from < this.to) {
//                     return {
//                         value: this.from++,
//                         done: false
//                     }
//                 }
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         })
//     }
// };
//
// for (let a of range) console.log(a);
// console.dir(range);


// Task 4
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

// const Fib = {
//     [Symbol.iterator]() {
//         return ({
//             prev: 0,
//             nextNumb: 1,
//             next() {
//                 this.nextNumb = this.prev + this.nextNumb;
//                 this.prev = this.nextNumb - this.prev;
//                 return ({
//                     value: this.prev,
//                     done: false
//                 })
//             }
//         })
//     }
// };
//
// for (let v of Fib) {
//     console.log(v);
//     if (v > 999950) break;
// }


// Task 5
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

// console.log([...-5]);
// console.log([...5]);


