// Lesson 11. Массивы и циклы
// Массив - упорядоченная изменяемая итерируемая коллекция элементов

let filmString = 'Матрица, Человек-Паук, Человек-Паук 2, Терминатор'

let filmArray = ['Матрица', 'Человек-Паук', 'Человек-Паук 2', 'Терминатор']
// console.log(filmArray)
// console.log(filmArray[0])

// for (let film of filmArray) {
//     console.log(film)
// }

// filmArray.forEach(function(film) {console.log(film)})
// filmArray.forEach(film => console.log(film))


// let userFilm = prompt('Введите фильм')
// for (let film of filmArray) {
//     if (film.toLocaleLowerCase() === userFilm.toLocaleLowerCase()) {
//         console.log(`Фильм:  ${film} найден`)
//     }
// }

// Альтернативный вариант на includes
// for (let film of filmArray) {
//     if (film.toLocaleLowerCase().includes(userFilm.toLocaleLowerCase())) {
//         console.log(`Фильм:  ${film} найден`)
//     }
// }

// let resultFilmsArray = []

// Это же, но фильмы перед консолью добавляем в массив
// for (let film of filmArray) {
//     if (film.toLocaleLowerCase().includes(userFilm.toLocaleLowerCase())) {
//         resultFilmsArray.push(film)
//     }
// }

// console.log(resultFilmsArray)

// Создадим ul#films , добудим его в JS, и будем делать innerHTML += `<li>${film}</li>`

let ulFilms = document.getElementById('films')
// console.log(ulFilms)

// for (let film of filmArray) {
//     if (film.toLocaleLowerCase().includes(userFilm.toLocaleLowerCase())) {
//     ulFilms.innerHTML += `<li>${film}</li>`
//     resultFilmsArray.push(film)
// }}

// console.log(resultFilmsArray)

// let palindromesArray = ["заказ", "довод", "кабак", "казак", "комок", "наган", "потоп", "ротор", "топот", "шабаш", "шалаш"]

// Репа
// приводим к нижнему регистру
// репа раскладываем на массив
// "р" "е" "п" "а"
// зеркалим через метод reverse
// "а" "п" "е" "р"
// собираем назад
// апер
// сравниваем с исходным

// let word = palindromesArray[0]
// let wordArray = word.toLowerCase().split('')
// let wordArrayReverse = wordArray.reverse()
// console.log(`Обычный массив ${wordArray}, зеркальный ${wordArrayReverse}`)
// let checkResult = wordArray.join('') === wordArrayReverse.join('')
// console.log(`Результат проверки слова ${word} на палиндром: ${checkResult}`)

// Задача:
// 1. Пользовательский ввод. Укажите что надо ввести слова через запятую или запятую пробел
// 2. Разбейте это на массив (split(', '))
// 3. Пройдите по массиву циклом, и IF проверьте на палиндром каждое слово
// 4. Если слово палиндром, то выведите его в консоль

// IF ваирианты написания
// Wile - повесим браузер
// Поиск по индексу и удаление элементов из массива

// userPrompt = prompt('Введите слова через запятую, пробел').split(', ')
// дед, репа
// ['дед', 'репа']
// for (let word of userPrompt) {
//     const lowerWord = word.toLowerCase()
//     const reversedWord = lowerWord.split('').reverse().join('')
//     if (lowerWord === reversedWord) {
//         console.log(`Слово ${word} является палиндромом`)
//         ulFilms.innerHTML += `<li>${word} - палиндром</li>`
//     }
//     else {
//         console.log(`Слово ${word} не является палиндромом`)
//         ulFilms.innerHTML += `<li>${word} - не палиндром</li>`
//     }
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log("До reverse():", numbers);

// Применяем reverse()
// numbers.reverse();



// console.log("После reverse():", numbers);

// let numbersReverse = numbers.reverse();
// console.log("После reverse() еще раз", numbersReverse);

// Про мутабельность массивов (переменные ссылаются на один массив)
// let word = "репа";
// let wordArray = word.split(''); // Мы думаем что тут репа
// Обе переменные указывают на один и тот же массив в памяти
// let reversedArray = wordArray.reverse(); // Мы думаем что тут апер

// НО ОБЕ переменные указывают на один массив апер

// console.log("Исходный массив:", wordArray);
// console.log("Обратный массив:", reversedArray);

// let isPalindrome = wordArray.join('') === reversedArray.join('');
// console.log("Является палиндромом:", isPalindrome);

// ------------------------------------------

// let palindromesArray = ["заказ", "довод", "кабак", "казак", "комок", "наган", "потоп", "ротор", "топот", "шабаш", "шалаш"]


// of - для перебора элементов массива или строки
// for (let word of palindromesArray) {
// }

// in - для перебора индексов массива
// for (let index in palindromesArray) {
//     console.log(index)
//     let word = palindromesArray[index]
//     console.log(word)
// }

// for (стартовое значение; условие; шаг)

// for (let i = 0; i <= 10; i = i + 1) {
//     console.log(i)
// }

// for (let i = 0; i < palindromesArray.length; i++) {
//    console.log(palindromesArray[i])
// }

// let i = 0
// for (; i < palindromesArray.length; i++) {
//     console.log(palindromesArray[i])
// }
 

// let i = 0
// for (; i < palindromesArray.length;) {
//     i++
//     console.log(palindromesArray[i])
// }

// Бесконечный цикл FOR который никогда не останвится

// for (let i = 0; true; i++) {
//     console.log(i**i-2)
// }


// for (;;) {
//     console.log("Этот цикл никогда не остановится");
//     }

let palindromesArray = ["заказ", "довод", "кабак", "казак", "комок", "наган", "потоп", "ротор", "топот", "шабаш", "шалаш"]

for (let i = 0; i<palindromesArray.length; i++) {
    console.log(`№${i + 1} - ${palindromesArray[i]}`)
}

for (let word of palindromesArray) {
    console.log(`№${palindromesArray.indexOf(word) + 1} - ${word}`)
}

// Как заменить элемент под индексом 5
palindromesArray[5] = 'папа'
console.log(palindromesArray)

// Удалить элемент под индексом 5
// 5 - индекс элемента который надо удалить
// 1 - количество элементов которые надо удалить
palindromesArray.splice(5, 1)