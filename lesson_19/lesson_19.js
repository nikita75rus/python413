// JSON - JavaScript Object Notation
// ? - начало GET запроса
// q=Москва  q - ключ Москва - значение
// & - разделитель между параметрами запроса
// https://api.openweathermap.org/data/2.5/weather?q=Усть-Каменогорск&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru

// Сформируйте свой собственный URL запроса со своим
// ключом и городом


let weatherJsonString = '{"coord":{"lon":82.6103,"lat":49.9789},"weather":[{"id":803,"main":"Clouds","description":"облачно с прояснениями","icon":"04d"}],"base":"stations","main":{"temp":-4.04,"feels_like":-7.16,"temp_min":-4.04,"temp_max":-4.04,"pressure":1028,"humidity":80,"sea_level":1028,"grnd_level":983},"visibility":10000,"wind":{"speed":2,"deg":130},"clouds":{"all":75},"dt":1731148215,"sys":{"type":1,"id":8831,"country":"KZ","sunrise":1731115955,"sunset":1731149656},"timezone":18000,"id":1520316,"name":"Усть-Каменогорск","cod":200}'

// Сделаем консольный вывод JSON строки
console.log(weatherJsonString)

// Превратим это в объект
let weatherObject = JSON.parse(weatherJsonString)
console.log(weatherObject)

// Превратим объект в строку
let weatherJsonString2 = JSON.stringify(weatherObject)
console.log(weatherJsonString2)

// Работа с Cookies (чтение всего)
let cookies = document.cookie

// Добавляем куки helloWorld
// document.cookie = 'helloWorld=Hello World'

// Обновление куки helloWorld
// document.cookie = 'helloWorld=Bue World'

// Добавим еще одну со сроком годности в 60 секунд
// document.cookie = 'helloWorld2=Hello World2; max-age=60'

// Удаление куки
// document.cookie = 'helloWorld2=Hello World2; expires=Thu, 01 Jan 1970 00:00:00 GMT';
// console.log(cookies)

// Добыча одной конкретной куки
// let helloWorldCookie = cookies.split('; ').find(cookie => cookie.startsWith('helloWorld').split('=')[1])
// console.log(helloWorldCookie) 

// Функция для получения куки по ключу
function getCookie(name) {
    let matches = document.cookie.split('; ').map(cookie => cookie.split('='));
    let cookie = matches.find(item => item[0] === name);
    return cookie ? decodeURIComponent(cookie[1]) : undefined;
}

// Практика.
// 1. Установите куку csrftoken=6FqWoDwRnZ3sMScutp1XLfrvh7Cix8kL
// 2. Получите значение куки csrftoken
// 3. Выведите значение куки в консоль

// Первые Fetch запросы

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Усть-Каменогорск&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru'

// let weather = fetch(url).then(response => response.json()).then(data => console.log(data))
// console.log('ТЕСТ')

// Напишем вариант, где запрос формируется, отправляется, но обрабатывается после консоль лога
console.log('Делаем запрос к API погоды')
let weather = fetch(url).then(response => response.json())
console.log('ТЕСТ, сейчас будет погода... 3, 2, 1 ПУСК!')
console.log(weather) // Promise { <state>: "pending" }
weather.then(data => console.log(data)) // JS объект

// Напишем вариант на функцях.
// 1. Функция запрос через промпт названия города
// 2. Функция формирования урла
// 3. Функция отправки запроса через fetch и зен
// 4. Функция вывода данных в консоль завершающая промис


// function getCity() {
//     let city = prompt('Введите название города')
//     return city
// }

function getUrl(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru`
    return url
}

function getWheaterPromise(url) {
    return fetch(url).then(response => response.json())
}

function displayWeather() {
    let cityName = getCity()
    let url = getUrl(cityName)
    let weatherPromise = getWheaterPromise(url)
    weatherPromise.then(data => console.log(data))
}