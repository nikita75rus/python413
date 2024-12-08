// Lesson 10

// NaN - Отдельный тип данных к которому можно привести
// isNan - функция, которая даст true или false в зависимости от того является
// ли это Not A Number или нет. (Текст = NaN) (числа != NaN)
// console.log(isNaN(NaN));          // true
// console.log(isNaN("abc"));        // true
// console.log(isNaN(123));          // false
// console.log(isNaN("123"));        // false

// Строка является упорядоченная НЕ изменяемая коллекция символов

// Методы и свойства строк
// Длина строки length - Возвращает число

let String = 'Чебурек'
console.log(`Длина строки ${String.length}`)

// toUpperCase() toLowerCase()
console.log(`Результат работы toLowerCase() к ${String} = ${String.toLowerCase()}`)
console.log(`Результат работы toUpperCase() к ${String} = ${String.toUpperCase()}`)

// Обращение к символу в строке
console.log(`Обращение к символу 0 в строке ${String} = ${String[0]}`)

// Substring(start, end) - Возвращает подстроку из строки (не включая последний) БУР
// Slice - похожий, но может работать с отрицательными индексами (движение с конца строки)
console.log(`Результат работы substring(2, 5) к ${String} = ${String.substring(2, 5)}`)

// Replace ('что заменить', 'на что заменить') - Заменяет ПЕРВОЕ вхождение подстроки на другую подстроку
let  String2 = ' Чебурек бургер\n '
console.log(`Результат работы replace к ${String2} = ${String2.replace('бур', 'дуб')}`)

// trim - Удаляет пробелы и перенос строки в начале и конце строки
console.log(`Результат работы trim к ${String2} = ${String2.trim()}`)

// includes(str) - Возвращает true если строка содержит подстроку
console.log(`Результат работы includes к ${String2} = ${String2.includes('чебурек')}`)

// Всё же получим true - нам надо привессти строку к нижнему регистру и затем проверить
console.log(`Результат работы toLowerCase и includes к ${String2} = ${String2.toLowerCase().includes('чебурек')}`)

let String3 = 'Репа'

let russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// Задача, получить букву из промпта и ответитить, входит ли она в русский алфавит
// Если да, сказать какая это буква по номеру в алфавите

// let userAnswer = prompt('Введите букву')

// if (russianAlphabet.includes(userAnswer.toLowerCase())) {
//     console.log(`Введенная буква ${userAnswer} входит в алфавит`)
//     console.log(`Номер буквы ${userAnswer} в алфавите = ${russianAlphabet.indexOf(userAnswer.toLowerCase()) + 1}`)
// } else {
//     console.log(`Введенный символ ${userAnswer} не входит в алфавит`)
// }

// Поэлементный перебор строки
// for (условие цикла) {тело цикла - что будет происходить на каждой итерации}

// р е п а - по очереди назначатся в char на каждой итерации
// of - перебор по элементам
// in - перебор по индексам
for (let char of String3) {
    console.log(char)
}