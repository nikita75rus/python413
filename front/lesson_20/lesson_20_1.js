const cityInput = document.getElementById('cityInput2');
const weatherButton = document.getElementById('weatherButton2');
const appID = '23496c2a58b99648af590ee8a29c5348';
const weatherContainer = document.getElementById('weatherResult2');
// Подумаем, какие функции нам нужны:
// Функция для получения значения города из поля ввода
// Функция для отправки названия города по маршруту геокодирования
// Функция для формирования URL запроса

// Функция для отправки запроса о текущей погоде по координатам
// Функция для отправки запроса о состоянии воздуха по координатам
// Функция для отрисовки результата на сайте
// Листнер для кнопки

// 1. Функция для получения значения города из поля ввода
function getCity() {
    return cityInput.value;
}

// 2. Универсальная функция которая делает запросы и возвращает промис
async function getRequest(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// 3. Функция для отправки названия города по маршруту геокодирования
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}

function getGeocodingData(city) {
    let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${appID}`;
    return geoUrl;
}

// 4. Функция для формирования объекта URL запросов к текущей погоде и состоянию воздуха
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric&lang=ru
// http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
function getWeatherUrl(lat, lon) {
    weatherObj = {
        weatherUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}&units=metric&lang=ru`,
        airPollutionUrl: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${appID}`
    }

    return weatherObj;
}

// 5. Функция принимающая город, делающая запрос геокодирования. Потом по данным делающая одновременно 2 запроса к погоде и состоянию воздуха
// Через Promise.all
async function getWeather(city) {
    let geoUrl = getGeocodingData(city);
    let geoData = await getRequest(geoUrl);
    
    // Из геодаты нам надо получить  координаты
    let lat = geoData[0].lat;
    let lon = geoData[0].lon;
    console.log('Широта и долгота', lat, lon);

    // Формируем URL запросов
    let weatherObj = getWeatherUrl(lat, lon);

    // Отправляем запросы одновременно по обеим ссылкам
    let weatherPromise = await Promise.all([
        getRequest(weatherObj.weatherUrl),
        getRequest(weatherObj.airPollutionUrl)
    ]);

    return weatherPromise;
}

// Добавляем объект с маппингом AQI на классы Bootstrap
const airQualityClasses = {
    1: 'alert-success',    // Отличное качество - зеленый
    2: 'alert-info',       // Хорошее качество - синий
    3: 'alert-warning',    // Среднее качество - желтый
    4: 'alert-danger',     // Плохое качество - красный
    5: 'alert-dark'        // Очень плохое качество - темный
};



// 6. Функция для отрисовки результата на сайте. Её можно будет разместить на листнере кнопки
// Отрисовка будет происходить в элемент с id weatherContainer


async function displayWeather() {
    // Получаем название города
    let city = getCity();
    // Получаем объект содержащий данные о погоде и состоянии воздуха
    let weatherPromise = await getWeather(city);
    
    // Из объекта weatherData получаем данные о погоде
    let weatherData = weatherPromise[0];
    let airPollutionData = weatherPromise[1];
    
    // Получаем класс для отображения состояния воздуха и AQI
    let aqi = airPollutionData.list[0].main.aqi;
    let alertClass = airQualityClasses[aqi];
    
    // Обнуляем контейнер для вывода результата
    weatherContainer.innerHTML = '';

    // Выводим результат
    weatherContainer.innerHTML += `
    <div class="alert alert-success">
    <h4>Погода в городе ${city}</h4>
    <p>Температура: ${weatherData.main.temp}°C</p>
    <p>Ощущается как: ${weatherData.main.feels_like}°C</p>
    <p>Описание: ${weatherData.weather[0].description}</p>`

    // Выводим результат о состоянии воздуха
    weatherContainer.innerHTML += `
    <div class="alert ${alertClass}">
    <h4>Состояние воздуха</h4>
    <p>AQI: ${aqi}</p>`
}

// 7. Листнер для кнопки
weatherButton.addEventListener('click', displayWeather);