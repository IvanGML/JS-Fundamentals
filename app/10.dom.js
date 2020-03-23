console.log('Topic: DOM');

// Task 01
// Найти элемент с id= "t01". Вывести в консоль.
// Найти родительский элемент и вывести в консоль.
// Найти дочерние ноды, если они есть, и вывести в консоль
// названия и тип нод.
// const elem = document.getElementById('t01');
// console.log(elem);
// console.log(elem.parentElement);
// for( let cildren of elem.childNodes) {
//     console.log(cildren, cildren.nodeName);
// }
//

// Task 02
// Подсчитать количество <li> элементов на странице. Для поиска элементов использовать
// getElementsByTagName(). Вывести в консоль.
// Добавить еще один элемент в список и вывести снова их количество.
// const elem = document.getElementById('u01');
// const liList = document.getElementsByTagName('li');
// console.log(liList.length);
// const newLi = document.createElement('li');
// newLi.innerText = 'Hello from Ivan!';
// elem.firstElementChild.replaceWith(newLi);
// console.log(liList.length);

// Task 03
// Получить элементы <li> используя метод querySelectorAll() и вывети их в консоль
// Добавить новый <li> и снова вывести в консоль
// const liCollection = document.querySelectorAll('li');
// console.log('before appending li elem', liCollection);
// const newLi = document.createElement('li');
// newLi.textContent = 'hello, this is new Li element';
// const firstUl = document.querySelector('ul');
// firstUl.append(newLi);
// const newLiCollection = document.querySelectorAll('li');
// console.log('after appending li elem', liCollection);
// console.log('after appending li elem', newLiCollection);


// Task 04
// Найти все первые параграфы в каждом диве и установить цвет фона #ffff00
const targetP = document.querySelectorAll('div > p:first-of-type ');
targetP.forEach(p => p.style.backgroundColor = '#ffff00');


// Task 05
// Подсчитать сумму строки в таблице и вывести ее в последнюю ячейку


// Task 06
// Вывести значения всех атрибутов элемента с идентификатором t06


// Task 07
// Получить объект, который описывает стили, которые применены к элементу на странице
// Вывести объект в консоль. Использовать window.getComputedStyle().


// Task 08
// Установите в качестве контента элемента с идентификатором t08 следующий параграф
// <p>This is a paragraph</>

// Task 09
// Создайте элемент <div class='c09' data-class='c09'> с некоторым текстовым контентом, который получить от пользователя,
// с помощью prompt, перед элементом с идентификатором t08,
// когда пользователь кликает на нем


// Task 10
// Удалите у элемента с идентификатором t06 атрибут role
// Удалите кнопку с идентификатором btn, когда пользователь кликает по ней
