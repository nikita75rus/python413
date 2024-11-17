console.log('Привет из документа lesson_8.js')

// Типы данных в JS
// number - числа 
// string - строка
// boolean - ДА или НЕТ (true \ false)

// null - специальное значение, указывающее на отсутствие значения
// undefined - переменная, которая объявлена, но не инициализирована значением


// array - массивы (аналог списков из пайтон) упорядочная коллекция 
// object - объект - аналог словаря из пайтон на стероидах, есть возможность встраивать функции 

// symbol - еще один простой тип данных 


// Переменные и константы
// var - устарел, не используется. Variable - переменная
// let - стандартное объявление переменной
// const - константа

let firstName
console.log(firstName) // undefined

firstName = 'John'
console.log(firstName) // John

let lastName = 'Smith'

firstName = lastName
console.log(firstName) // Smith

// Правила нейминга для переменных и констант
// 1. Имена должны начинатся с буквы
// 2. Никаких пробелов в имени переменной
// 3. lowerCamelCase - первый символ в нижнем регистре, первая буква след. слова - заглавная
// 4. Не должны использовать зарезервированные слова (например if, for, while, number, null и тд)
// 5. Недолжно быть одинаковых имен переменных в одном блоке кода
// 6. Имена не могут начинаться с цифры
// 7. Имена переменных не должны содержать специальные символы (кроме _ и $)
// 8. Содержит существительное и прилагательное (опционально)
// Четкое, понятное человекочитаемое назнваие из 2-3 слов


// Prompt - возвращает строку ввода пользователя
// Alert - выводит сообщение на экран
// Confirm -  возвращает true или false

alert('Привет!') // Привет!
let myName = prompt('Как вас зовут?') // Как вас зовут?)
console.log('Вы ввели имя', myName) // То что введет пользователь

let isAdult = confirm('Вы совершеннолетний человек?') // truе или false
console.log(isAdult)

// Математические операции в JS

// + сложение
// - вычитание
// * умножение
// / деление
// x++ инкрементарный оператор (приращение переменной на единицу) x = x + 1
// x-- декрементарный оператор (приращение переменной на единицу)
// a/=b деление и присвоение переменной результата операции
// a*=b умножение и присвоение переменной результата операции
// ** возведение в степень
// % остаток от деления

let a = 2
let b = 3

console.log(a + b) // 5
console.log(a - b) // -1
console.log(a * b) // 6
console.log(a / b) // 0.6666666666666667
console.log(a ** b) // 8
console.log(a % b) // 2
console.log(++a) // 3
console.log(--a) // 2
console.log (a*=b) // 6
console.log(a) // 6
console.log (a/=b) // 1.5

// Math - встроенный объект для математических операций
// Math.abs() - абсолютное значение числа
// Math.ceil() - округление в большую сторону
// Math.floor() - округление в меньшую сторону
// Math.round() - округление до ближайшего целого
// Math.max() - максимум из чисел
// Math.min() - минимум из чисел
// Math.random() - случайное число от 0 до 1

let c = a / b
cCeil = Math.ceil(c) // 2
cFloor= Math.floor(c) // 1
cRound = Math.round(c) // 1.67
cToFixed = c.toFixed(2) // 1.67

console.log(c, cCeil, cFloor, cRound, cToFixed) // 2 1 1.67

// Рандом вернет число от 0 до 1 (не включая 1)
numberRandom = Math.random()
console.log(numberRandom)

// Получение рандомного числа в заданном диапазоне
// let min = 0
let max = 10

let randomNumber = Math.floor(Math.random() * max)
//////////////////////////////////////////////

let red
let green
let blue
let alpha

red = Math.floor(Math.random() * 256)
green = Math.floor(Math.random() * 256)
blue = Math.floor(Math.random() * 256)
alpha = Math.random()

let newColor= 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')'

console.log(newColor) // rgb(198, 174, 130)
document.body.style.backgroundColor = newColor

/////////////////////// TODO
// 1. Объявить переменную и сделать prompt(Введите число от 2 до 10)
// 2. Объявить серию 9 переменных, где мы будем умножать ввод пользователя на 2,3,4,5,6,7,8,9 и сохранять результат в соответствующей переменной
// 3. Вывести данные в консоль

let userNumber = prompt('Введите число от 2 до 10') // '5'

twoMultiple = userNumber * 2
threeMultiple = userNumber * 3
fourMultiple = userNumber * 4
fiveMultiple = userNumber * 5
sixMultiple = userNumber * 6
sevenMultiple = userNumber * 7
eightMultiple = userNumber * 8
nineMultiple = userNumber * 9

console.log(userNumber, '* 2 = ', twoMultiple)
console.log(userNumber, '* 3 = ', threeMultiple)
console.log(userNumber, '* 4 = ', fourMultiple)
console.log(userNumber, '* 5 = ', fiveMultiple)
console.log(userNumber, '* 6 = ', sixMultiple)
console.log(userNumber, '* 7 = ', sevenMultiple)
console.log(userNumber, '* 8 = ', eightMultiple)
console.log(userNumber, '* 9 = ', nineMultiple)

console.log('Привет' + " " + 'Мир') // Привет Мир


let catName = 'Барсику'
let catAge = 10
// Барсику всего 10 лет
// Чтобы собрать строку, используем конкатенацию
console.log("Вашему" + " " + catName + " " + "всего" + " " + catAge + " " + "лет") // Вашему 

// Шаблонная строка. Начичинается на обратной ковычкой и заканчивается на ее же
// Данные подставляются в блоки ${имя переменной}
console.log(`Вашему ${catName} всего ${catAge} лет`)

//  Мы можем использовать выражения в шаблонных строках
console.log(`Вашему ${catName.toLocaleUpperCase()} всего ${catAge + 1} лет`)