console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// function Tune(title, artist) {
//     this.title = title;
//     this.artist = artist;
// }
//
// Tune.prototype.concat = function () {
//     return `Hello, this ${this.title} is ${this.artist} 👏🏻`;
// };
//
// let Johh = new Tune('singer', 'John');
// let Olya = new Tune('QA', 'Olya');
//
// console.log(Johh.concat());
// console.log(Olya.concat());

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// function Tune(title_, artist_) {
//     this.concat = function () {
//         return `Hello, this ${title_} is ${artist_} 👏🏻`;
//     };
//     this.setItem = function(title, artist) {
//         title_ = title || title_;
//         artist_ = artist || artist_;
//     }
// }
//
// let Johh = new Tune('singer', 'John');
// let Olya = new Tune('QA', 'Olya');
//
// console.log(Johh.concat());
// console.log(Olya.concat());
//
// Olya.setItem('engineer');
// console.log(Olya.concat());
//
// const Tune = (function() {
//     let _artist = '';
//     let _title = '';
//
//     return {
//         concat: function() { return `${_artist} ${_title}` },
//         setInfo: function(title, artist) { _title = title, _artist = artist }
//     }
//
//   })();
//
// const Petr = Tune.setInfo('Goodbye', 'Petr');
//
// console.log(Tune.concat());

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

// if(!String.prototype.exclaim) {
//     String.prototype.exclaim = function () {
//         console.log(this);
//         return this + '!';
//     };
// }
// console.log('str'.exclaim());


// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class


// function Book(title, author) {
//     this.title = title;
//     this.author = author;
// }
//
// Book.prototype.getTitle = function () {
//     return this.title;
// };
// Book.prototype.getAuthor = function () {
//     return this.author;
// };
//
// function TechBook(title, author, category) {
//     Book.apply(this, arguments);
//     this.category = category;
// }
//
// TechBook.prototype = Object.create(Book.prototype);
//
// TechBook.prototype.getCategory = function () {
//     return this.category;
// };
//
// TechBook.prototype.getBook = function () {
//     return {
//         title: this.title,
//         author: this.author,
//         category: this.category
//     }
// };
//
// function Epilog() {
//     TechBook.apply(this, arguments);
//     this.isEpilog = true;
// }
//
// Epilog.prototype = Object.create(TechBook.prototype);

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//
//     getTitle() {
//         return this.title;
//     };
//
//     getAuthor() {
//         return this.author;
//     };
// }
//
// class TechBook extends Book {
//     constructor(title, author, category) {
//         super(title, author);
//         this.category = category;
//     }
//
//     getCategory() {
//         return this.category;
//     };
//
//     getBook() {
//         return {
//             title: this.title,
//             author: this.author,
//             category: this.category
//         }
//     };
// }
//
// class Epilog extends TechBook {
//     constructor(...props) {
//         super(...props);
//         this.isEpilog = true;
//     }
// }
//
// const goodParts = new Epilog('Good parts', 'Douglas Crockford', 'JS programing');
//
// console.log(Book.prototype);
// console.log(TechBook.prototype);
// console.log(Epilog.prototype);
// console.log(goodParts);
// console.log(goodParts.getBook());
// console.log(goodParts.getCategory());
// console.log(goodParts.getAuthor());
// console.log(goodParts.getTitle());


// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// class Shape {
//     static counter() {
//         this.count++
//     }
//     static count = 0
// }
//
// class Rectangle extends Shape {
//     constructor(x, y) {
//         super();
//         Shape.counter();
//         this.x = x;
//         this.y = y;
//     }
//     getArea() {
//         return this.y * this.x;
//     }
// }
//
// const square = new Rectangle(10, 10);
// const rectangle = new Rectangle(5, 15);
// const square2 = new Rectangle(10, 10);
// const rectangle2 = new Rectangle(5, 15);
// const square3 = new Rectangle(10, 10);
// const rectangle4 = new Rectangle(5, 15);
//
// console.log(square);
// console.log(rectangle.getArea());
// console.log(Shape.count);

// function f(a, b) {
//     alert(a + b);
// }
//
// Function.prototype.defer = function (time) {
//     let func = this;
//     return function (...rest) {
//         return setTimeout(() => func.apply(null, rest), time);
//     };
// };
//
// f.defer(1000)(1, 2);


// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

/*function Person() {}
Person.prototype.setFirstName = function (name) {
    this.firstName = name;
    return this;
};

Person.prototype.setLastName = function (name) {
    this.lastName = name;
    return this;
};
const Ivan = new Person();
console.log(Ivan);
Ivan.setFirstName('Ivan').setLastName('Somov');
console.log(Ivan);*/


// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.
// const data = {};
//
// Object.defineProperties(data, {
//     type: {value: 'primary', enumerable: true},
//     id: {value: 1, writable: true, configurable: true},
//     category: {
//         get() {
//             return this._category
//         },
//         set(value) {
//             this._category = value;
//         },
//         enumerable: true,
//         configurable: false
//     }
// });
//
// data.category = 'business+';
//
// // Object.entries(data).forEach(([k,v]) => console.log(v));
//
// window.data = data;
//
// // console.log(Object.getOwnPropertyDescriptor(data, 'category'));
//
// console.log(Object.keys(data));


// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.

// const notExtensible = {
//     prop1: 'prop1',
//     prop2: 'prop2'
// };
//
// Object.preventExtensions(notExtensible);
// window.notExtensible = notExtensible;

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.

// class TaskList {
//     constructor() {
//         this.tasks = [];
//     }
//
//     addTask(task) {
//         this.tasks.push(task)
//     }
//
//     showTasks() {
//         for(let t of this.tasks) {
//             console.log(`${t.completed ? '[completed]' : '[new]'} ${t.info}`)
//         }
//     }
//
//     completeTask(id) {
//         this.tasks = this.tasks.map(i => i.id === id ? ({...i, completed: !i.completed}) : i);
//     }
//
//     removeTask(id) {
//         this.tasks = this.tasks.filter(i => i.id === id);
//         console.log(`Task with id ${id} was successfully removed.`)
//     }
//
//     sortAsc() {
//         return this.tasks.sort((a, b) => a.info.charCodeAt(0) - b.info.charCodeAt(0));
//     }
//
//     sortDsc() {
//         return this.tasks.sort((a, b) => b.info.charCodeAt(0) - a.info.charCodeAt(0));
//     }
// }
//
// const taskList = new TaskList();
//
// class Task {
//     constructor(info, completed) {
//         this.id = info + Date.now();
//         this.info = info;
//         this.completed = completed;
//
//         taskList.addTask({
//             id: this.id,
//             info: this.info,
//             completed: this.completed
//         })
//     }
// }
//
// new Task('learn JS.', true);
// new Task('clean flat.', false);
// new Task('wlean flat.', false);
// new Task('alean flat.', false);
//
// window.Task = Task;
// taskList.showTasks();
// taskList.sortDsc();
// taskList.showTasks();
//
//
// window.taskList = taskList;


// function Sum(...costs) {
//     this.sum = costs.reduce((p, n) => p+n, 0);
// }
//
// function SumWithTaxes(percent, ...args) {
//     Sum.apply(this, args);
//     this.resultWithTaxes = this.sum + (this.sum / 100 * percent);
// }
//
// console.log(SumWithTaxes.prototype);
// // SumWithTaxes.__proto__ = Sum.__proto__;
// // Object.setPrototypeOf(SumWithTaxes.prototype, Sum.prototype);
// // SumWithTaxes.prototype = Sum.prototype;
//
// console.log(SumWithTaxes.prototype);
//
// let whithoutTaxes = new SumWithTaxes(15, 300, 500, 200);
// console.log(whithoutTaxes instanceof Sum);
// console.log(whithoutTaxes instanceof SumWithTaxes);
// console.log(whithoutTaxes instanceof Object);
//
// console.log(whithoutTaxes);

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // 9px
// console.log("$" + 4 + 5); // $45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); // -4
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(" \t \n" - 2); // -2
