// Lesson 12 


let people = [
    {
        firstName: "Зульфия",
        middleName: "Ахметовна",
        lastName: "Нурмагомедова",
        age: 28,
        isMarried: false,
        hobbies: ["Горный альпинизм", "Создание авторских духов", "Робототехника"]
    },
    {
        firstName: "Арсений",
        middleName: "Викторович",
        lastName: "Яценюк",
        age: 35,
        isMarried: true,
        hobbies: ["Подводная археология", "Создание бонсай", "Экстремальное вязание"]
    },
    {
        firstName: "Гульнара",
        middleName: "Рустамовна",
        lastName: "Каримова",
        age: 42,
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

// let namesArray = ['Зульфия', 'Арсений', 'Гульнара', 'Ти{мур', 'Алёна']
// let specSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '?', '/', '|', '\\', '[', ']', '{', '}', '<', '>', ',', '.', ';', ':', '`', '~'];
// console.log(namesArray);

// // Мы открыли цикл по массиву имен
// for (let name of namesArray) {
//     console.log(name);
//     // Мы открыли цикл по буквам имени
//     for (let char of name) {
//         console.log(char);
//         if (specSymbols.includes(char)) {
//             console.error(`Символ ${char} встретился в имени ${name}`);
//         }
//     }
// }

// let namesTable = [
//     ['Имя', 'Фамилия', 'Отчество'],
//     ['Зульфия', 'Нурмагомедова', 'Ахметовна'],
//     ['Арсений', 'Яценюк', 'Викторович'],
//     ['Гульнара', 'Каримова', 'Рустамовна'],
//     ['Тимур', 'Батрутдинов', 'Ильдарович'],
//     ['Алёна', 'Винницкая', 'Игоревна'],
// ]

// // Перебор побуквенно массива массивов (3 цикла)
// console.log("Перебор побуквенно массива массивов (3 цикла)", namesTable)
// for (let row of namesTable) {
//     console.log('Начал перебор', row)

//     // Вложенный цикл уже по row
//     for (let cell of row) {
//         console.log("Начал цикл 2го уровня по", cell)

//         // Цикл 3го уровня уже по буквам в ячейке
//         for (let char of cell) {
//             // Для дз вам просто нужно сделать проверку вхождения в массив с русскими буквами в нижнем регистре
//             console.log("цикл 3го уровня:", char)
//         }
//     }
// }

// Объекты. CRUD операции с ними

// Создать пустой объект
let emptyObject = {};

// Внесем в него данные  обращение к объекту . ключ = значение
emptyObject.name = 'Кирилл';

// Или через квадратные скобки. Этот вариант удобен, когда ключ содержит пробелы
// Так же, когда нам надо подставить значение из переменной

// Все варианты рабочие!
emptyObject.age = 25;
emptyObject['age'] = 25;

let newKey = 'age';
emptyObject[newKey] = 26;

// Проверим работоспособность
// console.log(emptyObject);

// Если записи нет, она будет создана в объекте

// Удаление ключа
// delete emptyObject.age;

// Проверим работоспособность
// console.log(emptyObject);


// Object.keys() / Object.values() / Object.entries()

let  person = {
    name: 'Кирилл',
    age: 77,
    isMarried: false,
    hobbies: ['Составлять русский алфавит', 'молится', 'кодить на Python'],
    address: {
        city: 'Константинополь',
        street: 'Церковная',
        house: 12,
        flat: 123
    }
};

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Как будет выглядеть цикл?
// for (let key of Object.entries(person)) {
//     console.log(key);
// }

// Напишите шаблонную строку в этом цикле, укажите ключ и значение Ключ: Значение:

for (let data of Object.entries(person)) {
    let key = data[0];
    let value = data[1];

    console.log(`Ключ: ${key}. Значение: ${value}`);
}

// Две переменных в цикле можно сделать, если использовать деструктуризацию
for (let [key, value] of Object.entries(person)) {
    console.log(`Ключ: ${key}. Значение: ${value}`);
}
console.log('------------------------------------------')

// Массив с фруктами
const fruits = ['яблоко', 'банан', 'апельсин', 'киви', 'манго'];

// Простой пример деструктуризации массива
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // 'яблоко'
console.log(secondFruit); // 'банан'

// Пропуск элементов при деструктуризации
const [ , , thirdFruit] = fruits;
console.log(thirdFruit); // 'апельсин'

// Деструктуризация с остаточными элементами
const [first, ...restFruits] = fruits;
console.log(first); // 'яблоко'
console.log(restFruits); // ['банан', 'апельсин', 'киви', 'манго']

// Деструктуризация вложенных массивов
const nestedFruits = ['яблоко', ['банан', 'апельсин'], 'киви'];
const [fruit1, [fruit2, fruit3], fruit4] = nestedFruits;
console.log(fruit1); // 'яблоко'
console.log(fruit2); // 'банан'
console.log(fruit3); // 'апельсин'
console.log(fruit4); // 'киви'

// Деструктуризация с установкой значений по умолчанию
const [a, b, c = 'груша'] = ['яблоко', 'банан'];
console.log(a); // 'яблоко'
console.log(b); // 'банан'
console.log(c); // 'груша'

// Обмен значениями с помощью деструктуризации
let fruitA = 'манго';
let fruitB = 'киви';
[fruitA, fruitB] = [fruitB, fruitA];
console.log(fruitA); // 'киви'
console.log(fruitB); // 'манго'

// Деструктуризация в параметрах функции
function displayFruits([first, second]) {
  console.log(`Первый фрукт: ${first}`);
  console.log(`Второй фрукт: ${second}`);
}
displayFruits(fruits);

// Деструктуризация с пропуском и остаточными элементами в параметрах функции
function displaySomeFruits([first, , third, ...others]) {
  console.log(`Первый фрукт: ${first}`);
  console.log(`Третий фрукт: ${third}`);
  console.log(`Остальные фрукты: ${others}`);
}
displaySomeFruits(fruits);

console.log('------------------------------------------')

// Создаем массив с фруктами
const fruits = ['яблоко', 'банан', 'вишня', 'груша', 'персик'];

// Простая деструктуризация массива
const [firstFruit, secondFruit] = fruits;
// Теперь firstFruit = 'яблоко', secondFruit = 'банан'

// Пропускаем элементы при деструктуризации
const [, , thirdFruit] = fruits;
// Теперь thirdFruit = 'вишня'

// Деструктуризация с использованием оператора Rest
const [fruit1, fruit2, ...restFruits] = fruits;
// fruit1 = 'яблоко', fruit2 = 'банан', restFruits = ['вишня', 'груша', 'персик']

// Деструктуризация вложенных массивов
const nestedFruits = ['яблоко', ['банан', 'киви'], 'вишня'];
const [simpleFruit, [tropicalFruit1, tropicalFruit2], berry] = nestedFruits;
// simpleFruit = 'яблоко', tropicalFruit1 = 'банан', tropicalFruit2 = 'киви', berry = 'вишня'

// Деструктуризация с значениями по умолчанию
const [fruitA, fruitB, fruitC = 'манго'] = ['персик', 'груша'];
// fruitA = 'персик', fruitB = 'груша', fruitC = 'манго'

// Деструктуризация объектов в массиве
const fruitObjects = [{name: 'яблоко'}, {name: 'банан'}, {name: 'вишня'}];
const [{name: fruitName1}, {name: fruitName2}] = fruitObjects;
// fruitName1 = 'яблоко', fruitName2 = 'банан'

// Использование деструктуризации в функциях
function getFruits([first, second]) {
    // first = первый фрукт, second = второй фрукт
    console.log(`Люблю ${first} и ${second}`);
}
getFruits(fruits);
// Вывод в консоль: "Люблю яблоко и банан"

// Комплексная деструктуризация с комбинацией объектов и массивов
const complexFruits = {
    tropical: ['манго', 'ананас'],
    berries: ['клубника', 'малина'],
    citrus: ['апельсин', 'лимон']
};

const {tropical: [tropicalFruitA, tropicalFruitB], berries: berryFruits} = complexFruits;
// tropicalFruitA = 'манго', tropicalFruitB = 'ананас', berryFruits = ['клубника', 'малина']


