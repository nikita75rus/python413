// Функции в JS (подпрограммы)

// DRY - Don't Repeat Yourself (Не повторяй самого себя)
// SRP - Single Responsibility Principle (Принцип единственной ответственности)

function getMessage() {
    let message = 'Привет!';
    // console.log(message);
    // Надо отдать данные наружу, чтобы их можно было использовать где-то еще
    return message
}

// getMessage()
// let message = getMessage();

// console.log(message);

function getMessage2(name) {
    let message = 'Привет, ' + name;
    return message
}

console.log(getMessage2())
console.log(getMessage2('Кирилл'))
console.log(getMessage2('Иван'))

function getMessage3(name, age) {
    let message = `Привет, ${name}. Тебе ${age} лет.`;
    return message
}

let message = getMessage3('Кирилл', 25);
console.log(message);

// Проверка на совершеннолетие
// Сделайте функцию которая будет принимать имя, возраст, и порог совершеннолетия
// и будет возвращать сообщение о том, можно ли человеку купить алкоголь или нет

function checkAge(name, age, ageThreshold=18){
    let message = ''
    if (age >= ageThreshold) {
        message = `Привет, ${name}. Тебе ${age} лет. Можешь купить алкоголь.`;
    }
    else {
        message = `Привет, ${name}. Тебе ${age} лет. Купить алкоголь нельзя.`;
    }
    return message
}

let personName = "Филлип Бедросович"
let age = 50
let ageThreshold = 21

console.log(checkAge(personName, age, ageThreshold));


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

// Пройти циклом массив объектов с людьми, вывести в консоль сообщение о том, можно ли человеку купить алкоголь или нет
for (let person of people) {
    let message = checkAge(person.firstName, person.age);
    console.log(message);
}

// Это же но с forEach
people.forEach((person) => {
    console.log(checkAge(person.firstName, person.age));
})

// Стрелочная функция в JS - это функция, которая не имеет своего контекста
// Стрелочная функция не имеет своего this
// Не имеет имени, не объявляется через function, return производится неявно

// forEach() - это метод массива, который позволяет пройтись по каждому элементу массива и выполнить какое-то действие
// первый параметр - это функция, которая будет выполняться для каждого элемента массива
people.forEach((person) => {
    console.log(`${person.firstName} ${person.lastName} ${person.age}`)
})

people.forEach(function(person) {
    console.log(`${person.firstName} ${person.lastName} ${person.age}`)
})

// Пример 1: Объявление функции через Function Declaration
function add(a, b) {
    // a и b - аргументы функции, предполагается, что они числа
    return a + b;
}

// Пример 2: Объявление функции через Function Expression
const subtract = function(a, b) {
    // a и b - аргументы функции, предполагается, что они числа
    return a - b;
};

// Пример 3: Объявление функции через стрелочную функцию (Arrow Function)
const multiply = (a, b) => {
    // a и b - аргументы функции, предполагается, что они числа
    return a * b;
};

// Пример 4: Функция с параметром по умолчанию
function greet(name = 'Гость') {
    // name - аргумент функции, тип данных строка, значение по умолчанию 'Гость'
    console.log(`Привет, ${name}!`);
}

// Пример 5: Функция с использованием параметров оставшихся аргументов (Rest Parameters)
function sumAll(...numbers) {
    // numbers - массив всех переданных аргументов
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Пример 6: Анонимная функция, переданная как аргумент
setTimeout(function() {
    console.log('Это анонимная функция');
}, 1000);

// Пример 7: Стрелочная функция с неявным возвратом
const divide = (a, b) => a / b;
// a и b - аргументы функции, предполагается, что они числа


//////////////////// Функции внутри объектов


let person1 = {
    firstName: "Король",
    middleName: "Баскович",
    lastName: "Басков",
    age: 19,
    isMarried: false,
    hobbies: ["Паркур", "Создание ледяных скульптур", "Квантовая физика"],
    checkAge: function(ageThreshold=18){
        let message = ''
        if (this.age >= ageThreshold) {
            message = `Привет, ${this.firstName} ${this.lastName}. Тебе ${this.age} лет. Можешь купить алкоголь.`;
        }
        else {
            message = `Привет, ${this.firstName} ${this.lastName}. Тебе ${this.age} лет. Купить алкоголь нельзя.`;
        }
        return message
    }
}

console.log(person1.checkAge());