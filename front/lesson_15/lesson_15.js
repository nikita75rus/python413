// Обратились к объекту document и попрсили объект по id
const ulList = document.querySelector('#list');
const divSquare = document.querySelector('.divSquare');
const pResult = document.querySelector('#pResult');
const filmInput = document.querySelector('#filmInput');
// const table = document.querySelector('#table');
const table = document.getElementById('table');
// Обратились к объекту ulList и перезаписали содержимое по ключу innerHTML
// ulList.innerHTML = '<li>Список продуктов</li>';


console.log(ulList);
// function start(){
//     console.log('Запуск приложения');
//     alert('Запуск приложения');
// }

// Практика:
// Попробуйте по клику на кнопку запустить функцию и чтобы она запросила у пользователя имя, и вы вывели на сайте Привет, имя пользователя

function start(){
    let name = prompt('Введите имя');
    ulList.innerHTML += `<li>Привет, ${name}</li>`;
    console.log(`Имя: ${name} было добавлено в список`);
}

// Практика: Сделайте вторую кнопку, повешайте туда обраотчик клика с вызовом функции (например clear)
// Опишите её. Чтобы она делала .innerHTML = ''

function clearList(){
    ulList.innerHTML = '';
    console.log('Список очищен');
}

// Функция, которая генерирует рандомное число от 0 до 255

function getRandomColor(max=255){
    if (max === 1) {
        return Math.random();
    } else {
        return Math.floor(Math.random() * max);
    }
}
function getRGBObject(){

    return {
        red: getRandomColor(),
        green: getRandomColor(),
        blue: getRandomColor(),
        alpha:getRandomColor(1)
    }
}


function changeColor(){
    rgbObj = getRGBObject();
    
    rgbaString = `rgba(${rgbObj.red}, ${rgbObj.green}, ${rgbObj.blue}, ${rgbObj.alpha})`;

    console.log(rgbaString);
    divSquare.style.backgroundColor = rgbaString;
    
    console.log('Цвет изменился');
}

// Практика. Опишите функцию повешанную на кнопку <button class="btn btn-dark ms-3" onclick="changeColor()">Новый цвет</button>

// changeColor() В которой будет запрошен у пользователя список фильмов через запятую. Сделайте сплит, а так же через метод forEach и стрелочную функцию:
// 1. Очистите список
// 2. добавьте каждый элемент массива (фильм) в список ulList.innerHTML

function diplayFilms(){
    ulList.innerHTML = '';

    let movies = prompt('Введите список фильмов через запятую');
    movies = movies.split(',');
    movies.forEach(movie => {
        ulList.innerHTML += `<li>${movie.trim()}</li>`;
    });
}

// Функция, которая обрабатывает поле ввода, и изымает из него значение и помещает в параграф

function displayFilm(){
    let film = filmInput.value;
    pResult.textContent = film;
}

const moviesTable = [
    ["Название", "Год выхода", "Краткое содержание"],
    ["Брат", "1997", "История о молодом человеке, вернувшемся с войны. Он приезжает в Санкт-Петербург к брату и оказывается втянут в криминальный мир."],
    ["Сталкер", "1979", "Фантастическая драма о путешествии в таинственную Зону. Три человека ищут комнату, исполняющую желания."],
    ["Ирония судьбы, или С лёгким паром!", "1975", "Новогодняя комедия о случайной встрече двух людей. Главный герой по ошибке оказывается в чужой квартире в другом городе."],
    ["Летят журавли", "1957", "Драма о любви и верности во время Великой Отечественной войны. История девушки, ждущей своего возлюбленного с фронта."],
    ["Операция «Ы» и другие приключения Шурика", "1965", "Комедия, состоящая из трех новелл о приключениях студента Шурика. Герой попадает в различные забавные ситуации."],
    ["Москва слезам не верит", "1979", "История о трех подругах, приехавших покорять Москву. Фильм рассказывает о их жизни на протяжении 20 лет."],
    ["Иван Васильевич меняет профессию", "1973", "Фантастическая комедия о путешествии во времени. Инженер случайно отправляет управдома в прошлое, меняя его местами с Иваном Грозным."],
    ["Офицеры", "1971", "Драма о судьбе двух друзей-офицеров на фоне истории страны. Фильм охватывает период с 1920-х по 1960-е годы."],
    ["Белое солнце пустыни", "1970", "Приключенческий фильм о красноармейце Сухове на Востоке. Герой защищает гарем местного бандита и борется с басмачами."],
    ["Девчата", "1961", "Романтическая комедия о жизни молодежи в северном леспромхозе. Главная героиня приезжает работать поваром и находит любовь."]
]

// Попобобуйте сделать таблицу наполнив ее данными из массива moviesTable.
// Каждый вложенный массив = полоса таблицы. Каждый элемент вложенного массива = ячейка таблицы.
// Внешний цикл обходит строки, внутренний - ячейки.

// Вариант цикл for of внутри другого цикла for of (со складыванием строк)


let tableHTML = '';

// for (let row of moviesTable) {
//     tableHTML += '<tr>';
//     for (let cell of row) {
//         tableHTML += `<td>${cell}</td>`;
//     }
//     tableHTML += '</tr>';
// }

// table.innerHTML = tableHTML;



// Вариант с forEach внутри forEach

moviesTable.forEach(row => {
    tableHTML += '<tr>';
    row.forEach(cell => {
        tableHTML += `<td>${cell}</td>`;
    });
    tableHTML += '</tr>';
});

table.innerHTML = tableHTML;