// lesson 9
// Инструмент приводящий к boolean (Функция Boolean)

// let a = 1;
// let b = 0;
// let c = -1;
// let d = '';
// let e = 'Привет';
// let f = null;
// let g = undefined;
// let h = NaN;
// let i = [];
// let j = {};
// let k = true;
// let l = false;

// // Попробуем это все по очереди привести к boolean
// console.log(a, Boolean(a)); // 1 = true
// console.log(b, Boolean(b)); // 0 = false
// console.log(c, Boolean(c)); // -1 = true
// console.log(d, Boolean(d)); // '' = false
// console.log(e, Boolean(e)); // 'Привет' true
// console.log(f, Boolean(f)); // null = false
// console.log(g, Boolean(g)); // undefined false
// console.log(h, Boolean(h)); // NaN false
// console.log(i, Boolean(i)); // [] true
// console.log(j, Boolean(j)); // {} true
// console.log(k, Boolean(k)); // true
// console.log(l, Boolean(l)); // false

// Сравнение. Операторы.

// a = 4;
// b = "4"; // 4

// console.log("a > b", a > b); // 2 > 4 = false
// console.log("a < b", a < b); // 2 < 4 = true
// console.log("a >= b", a >= b); // 2 >= 4 = false
// console.log("a <= b", a <= b); // 2 <= 4 = true


// // Равенство!
// console.log("a == b", a == b); // 2 == 4 = false
// console.log("a != b", a != b); // 2 != 4 = true
// console.log("a === b", a === b); // 2 === 4 = false
// console.log("a !== b", a !== b); // 2 !== 4 = true



// Логическиские операторы
// () - скобки
// ! - отрицание
// && - и
// || - или

// ЛОГИЧЕСКОЕ И - важно чтобы ВСЁ было истинно.
// true и true = true
// true и false = false
// false и true = false
// false и false = false

// ЛОГИЧЕСКОЕ ИЛИ - важно чтобы хоть одно было истинно.
// true или falsе = true
// true или true = true
// false или true = true
// false или false = false

// НЕ true = false
// НЕ false = true

// let numOne = 1
// let numTwo = 2

// console.log(numOne < numTwo && numOne > -200)
// console.log(numOne < numTwo || numOne == -200)
// console.log(!(numOne < numTwo))


// Пример 1
// let a = 5, b = 10, c = 15;

// console.log((a < b) && (b < c)); // true
// console.log(a < b && b < c);     // true (то же самое)
// console.log(a < (b && b) < c);   // true 

// // Пример 2
// let x = 3, y = 4, z = 5;

// console.log(x > y || y < z && z > x); // true
// console.log((x > y || y < z) && z > x); // true
// console.log('Спорное выражение')
// TODO КАК ЧЕРТ ВОЗЬМИ  ЭТО ДАЕТ false!?
// console.log(x > (y || y < z) && z > x); // false

// // Пример 3
// let p = true, q = false, r = true;

// console.log(p || q && r);   // true
// console.log((p || q) && r); // true
// console.log(p || (q && r)); // true (то же самое, что и первое выражение)

// // Пример 4
// let m = 2, n = 3, o = 4;

// console.log(m < n > o);     // false
// console.log((m < n) > o);   // false (то же самое)
// console.log(m < (n > o));   // true (совершенно другой результат!)

// // Пример 5
// let i = 1, j = 0, k = 1;

// console.log(!i || j && k);   // false
// console.log((!i || j) && k); // false
// console.log(!(i || j) && k); // false
// console.log(!i || (j && k)); // false (то же самое, что и первое выражение)
// console.log(!(i || j && k)); // false (отрицание всего выражения)

// IF - если, ELSE IF - так же если, ELSE - иначе

// let password = 'banana';
// let answer = 'banana';

// if(password===answer) {
//     console.log('Пароль верный');
// }
// else {
//     console.log('Неверный пароль');
// }

// console.log('Просто лог')

// Проверка всех пяти продуктов!
let meat = 'мясо';
let vegetable = 'овощи';
let fruit = 'фрукты';
let fastFood = 'быстрое питание';
let alcohol= 'алкоголь';

// 1. userInput - через prompt('Пожалуйста, введите продукт')
let userInput = prompt('Пожалуйста, введите продукт')
console.log(userInput);
console.log(Boolean(userInput));

if (!userInput) {
console.log('Вы не ввели продукт');
}
else {
    userInput = userInput.toLowerCase();
}

if (userInput === meat) {
    // Вместе с консоль логом пусть будут alert для пользователя
    // alert('Вы выбрали мясо');
    alert('Вы выбрали мясо')
    console.log('Вы выбрали мясо');
}
else if (userInput === vegetable) {
    alert('Вы выбрали овощи')
    console.log('Вы выбрали овощи');
}
else if (userInput === fruit) {
    alert('Вы выбрали фрукты')
    console.log('Вы выбрали фрукты');
}
else if (userInput === fastFood) {
    alert('Вы выбрали быстрое питание')
    console.log('Вы выбрали быстрое питание');
}
else if (userInput === alcohol) {
    alert('Вы выбрали алкоголь')
    console.log('Вы выбрали алкоголь');
}
else {
    alert('Вы ввели неверный продукт')
    console.log('Вы ввели неверный продукт');
}

// let someString = ' Котик'

// console.log(someString.toLowerCase())
// console.log(someString.toLowerCase().trim().replace('К', 'Ск'))
// console.log(someString.replace('К', 'Ск').toLowerCase().trim())


// split(separator, limit) - разбивает строку на массив подстрок по указанному разделителю
// replace(regexp|substr, newSubstr|function) - заменяет часть строки на новую подстроку или результат функции
// toLowerCase() - преобразует все символы строки в нижний регистр
// toUpperCase() - преобразует все символы строки в верхний регистр
// trim() - удаляет пробельные символы с начала и конца строки
// slice(beginIndex, endIndex) - извлекает часть строки от начального до конечного индекса (не включая)
// substring(indexStart, indexEnd) - похож на slice(), но не поддерживает отрицательные индексы
// substr(start, length) - извлекает указанное количество символов, начиная с заданной позиции
// indexOf(searchValue, fromIndex) - возвращает индекс первого вхождения подстроки в строку
// lastIndexOf(searchValue, fromIndex) - возвращает индекс последнего вхождения подстроки в строку
// includes(searchString, position) - проверяет, содержит ли строка указанную подстроку
// startsWith(searchString, position) - проверяет, начинается ли строка с указанной подстроки
// endsWith(searchString, length) - проверяет, заканчивается ли строка указанной подстрокой
// concat(string2, string3, ..., stringN) - объединяет текущую строку с одной или несколькими другими строками
// repeat(count) - повторяет строку указанное количество раз
// padStart(targetLength, padString) - дополняет строку другой строкой слева до указанной длины
// padEnd(targetLength, padString) - дополняет строку другой строкой справа до указанной длины
// charAt(index) - возвращает символ по указанному индексу
// charCodeAt(index) - возвращает числовое представление символа по указанному индексу
// codePointAt(pos) - возвращает неотрицательное целое число, являющееся закодированным значением UTF-16
// match(regexp) - возвращает результат сопоставления строки с регулярным выражением
// search(regexp) - выполняет поиск сопоставления между регулярным выражением и строкой
// localeCompare(compareString, locales, options) - возвращает число, указывающее, должна ли данная строка находиться до, после или быть равной указанной строке при сортировке
// normalize(form) - возвращает Unicode-нормализованную форму строки
// toString() - возвращает строковое представление объекта
// valueOf() - возвращает примитивное значение объекта String
// trimStart() - удаляет пробельные символы с начала строки
// trimEnd() - удаляет пробельные символы с конца строки

