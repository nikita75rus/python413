// Lesson 14. Фукции. Повторим обычные и стрелочные функции


// Функция - это подпрограмма, которая выполняет какое-то действие

// Функция начинается или содержит в себе глагол - имя описывает действие (что делает функция)

// SRP - Single Responsibility Principle
// Принцип единственной ответственности

// DRY - Don't Repeat Yourself
// Не повторяй самого себя

// function - объявление функции
// function name(parameters) { тело функции } return - возвращает значение

// Функция которая выводит в консоль сообщение "Привет!"
// Проблема в том что нельзя менять сообщение
// Функуция ничего не возвращает
// function getMessage() {
//     let message = 'Привет!';
//     console.log(message);
//     return message
//     // Этот код никогда не выполнится
//     // Return останавливает выполнение функции (в т.ч. и циклы)
//     console.log(message + 'После return');
// }

// let message = getMessage();
// console.log(message);

// Функция которая принимает посланиние и в ветвлении выыводит разные строки в зависимости от сообщения

// function getAlterMessage(message) {
//     if (message.toLowerCase() === 'привет'){
//         return 'Похоже это приветствие'
//     }
//     if (message.toLowerCase() === 'пока'){
//         return 'Похоже это прощание'
//     }
// }

// console.log(getAlterMessage('Привет'));
// console.log(getAlterMessage('Пока'));

///////////////////// Практика
// Попробуйте написать функцию, которая будет принемать пароль, и цифру
// И будет возвращать true или false в зависимости от длины пароля 
// длина лежит в .length


// Позиционные параметры функции. Параметры ожидаются в том же порядке, что и описаны.
// Передача аргументов при вызове функции в ином порядке, может сломать её работу

// Параметр по умолнчаию, если мы пишем, допустим, number = 8
// function checkPassword(password, number) {
//     if (password.length >= number) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let passwordInput = prompt('Введите пароль');
// if (checkPassword(passwordInput, 8)) {
//     alert('Пароль подходит');
// }
// else {
//     alert('Пароль не подходит');
// }


// function checkAge(age, ageThreshold=18){
    
//     if (age >= ageThreshold) {
//         return true
//     }
//     else {
//        return false
//     }
// }

// // console.log(checkAge(ageThreshold=22, age=21)) // Так это не работает. Это не пайтон!)

// console.log(checkAge(21, 22))

// // Варианты оформления функций в JavaScript:

// // 1. Объявление функции (Function Declaration):
// function functionName(parameter1, parameter2) {
//     // тело функции
// }

// // 2. Функциональное выражение (Function Expression):
// const functionName = function(parameter1, parameter2) {
//     // тело функции
// };

// // 3. Стрелочная функция (Arrow Function):
// const functionName = (parameter1, parameter2) => {
//     // тело функции
// };

// // 4. Сокращенная стрелочная функция (для одной строки кода):
// const functionName = (parameter1, parameter2) => expression;


// // 5. Сокращенная запись метода объекта (ES6+):
// const object = {
//     methodName(parameter1, parameter2) {
//         // тело функции
//     }
// };

//////////////////////////////////////

// // 7. Функция-конструктор:  ???????????????
// function ConstructorFunction(parameter1, parameter2) {
//     this.property1 = parameter1;
//     this.property2 = parameter2;
// }

// // 9. Асинхронная функция:
// async function asyncFunction() {
//     // асинхронный код
// }

// // 10. Асинхронная стрелочная функция:
// const asyncArrowFunction = async () => {
//     // асинхронный код
// };

const prouducts = [
    "Хлеб",
    "Молоко",
    "Яблоки",
    "Картофель",
    "Морковь",
    "Курица",
    "Рис",
    "Помидоры",
    "Огурцы",
    "Сыр"
];

// Метод forEach() - принемает в себя функцию, которая будет выполняться для каждого элемента массива. prouducts.forEach....
// Стрелочная функция.

function printProduct(product) {
    console.log(product);
}
// 1. Вариант. Объявленнная во вне функция
prouducts.forEach(printProduct);

// 2. Вариант. Function Expression (анонимная функция)
prouducts.forEach(function(product) {
    console.log(product);
});

// 3. Вариант. Стрелочная функция
prouducts.forEach((product) => {
    console.log(product);
});

// 4. Вариант. Сокращенная стрелочная функция
prouducts.forEach(product => console.log(product));



// map() - принемает в себя функцию, которая будет выполняться для каждого элемента массива. Отличается от forEach тем, что возвращает новый массив.

let productsFromForEach = prouducts.forEach(product => product + ' довесок');
console.log(productsFromForEach);
console.log(prouducts);

// Получили новый массив в productsFromMap. Исходный не пострадал.
let productsFromMap = prouducts.map(product => product + ' довесок');
console.log(productsFromMap);
console.log(prouducts);

// filter() - принемает в себя функцию, которая будет выполняться для каждого элемента массива. Возвращает новый массив. Функция должна возвращать true или false.
let letter = 'о';
let LetterProducts = prouducts.filter(product => product.toLowerCase().includes(letter));
console.log(LetterProducts);

// А что, если не менее 2х букв о?
// Либо регулярное выражение match \ matchAll либо разбить на список, проверить его длину - 1

let LetterProducts2 = prouducts.filter(product => (product.toLowerCase().match(/о/g) || []).length >= 2);


let LetterProducts3 = prouducts.filter(product => product.toLowerCase().split('о').length - 1 >= 2);

let people = [
    {
        firstName: "Зульфия",
        middleName: "Ахметовна",
        lastName: "Нурмагомедова",
        age: 16,
        isMarried: false,
        hobbies: ["Горный альпинизм", "Создание авторских духов", "Робототехника"]
    },
    {
        firstName: "Арсений",
        middleName: "Викторович",
        lastName: "Яценюк",
        age: 15,
        isMarried: true,
        hobbies: ["Подводная археология", "Создание бонсай", "Экстремальное вязание"]
    },
    {
        firstName: "Гульнара",
        middleName: "Рустамовна",
        lastName: "Каримова",
        age: 12,
        isMarried: false,
        hobbies: ["Парашютный спорт", "Молекулярная кухня", "Реставрация старинных автомобилей"]
    },
    {
        firstName: "Тимур",
        middleName: "Ильдарович",
        lastName: "Батрутдинов",
        age: 31,
        isMarried: true,
        hobbies: ["Качалка", "Сниматься в скетчах", "Стриптиз"]
       
    },
    {
        firstName: "Алёна",
        middleName: "Игоревна",
        lastName: "Винницкая",
        age: 39,
        isMarried: false,
        hobbies: ["Паркур", "Создание ледяных скульптур", "Квантовая физика"]
    }
];

// some и any - принемает в себя функцию, которая будет выполняться для каждого элемента массива. Возвращает true или false.

// Проверим, является ли хотя бы один из людей совершеннолетним.
let isAnyAdult = people.some(person => person.age >= 18);
console.log(isAnyAdult);

// Проверим что каждый из людей совершеннолетний.
let isAllAdult = people.every(person => person.age >= 18);
console.log(isAllAdult);

// Практика! Возьмите любое хобби которое понравилось. Поместите в переменную
// Отфильтруйте людей с этим хобби через filter.
// Попробуйте учитывать регистр. (обе стороны к ловеркейс)

let hobbie = 'горный альпинизм';

let filteredHobbyPeople = people.filter(person => person.hobbies.includes(hobbie));

// 
let filteredHobbyPeople2 = people.filter(person => person.hobbies.some(hobby => hobby.toLowerCase() === hobbie.toLowerCase()));
// console.log(filteredHobbyPeople);


// Так как у нас 2 return - стрелка не подходит
let filteredHobbyPeople3 = people.filter(function (person){
    if (!person.hobbies) {
        return false;
    }
    return person.hobbies.includes(hobbie);
})

// let filteredHobbyPeople = people.filter(person => person.hobbies.some(hobby => hobby.toLowerCase() === hobbie.toLowerCase()));
// console.log(filteredHobbyPeople);

// reduce() - принемает в себя функцию, которая будет выполняться для каждого элемента массива. Возвращает одно значение. При этом функция должна возвращать значение, которое будет использоваться в следующей итерации. Подходит для суммирования, нахождения среднего значения и т.д.

// Пример reduce с массивом чисел
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Сумма чисел:", sum);

// Подсчет среднего возраста people
let averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
console.log("Средний возраст:", averageAge);

// Подсчет среднего количества хобби
let averageHobbiesCount = people.reduce((sum, person) => sum + person.hobbies.length, 0) / people.length;
console.log("Среднее количество хобби:", averageHobbiesCount);

