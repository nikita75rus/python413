let apiAnswer = {
  coord: { lon: 37.6156, lat: 55.7522 },
  weather: [{ id: 804, main: "Clouds", description: "пасмурно", icon: "04n" }],
  base: "stations",
  main: {
    temp: 8.12,
    feels_like: 6.25,
    temp_min: 7.24,
    temp_max: 8.52,
    pressure: 1025,
    humidity: 80,
    sea_level: 1025,
    grnd_level: 1005,
  },
  visibility: 10000,
  wind: { speed: 3.01, deg: 247, gust: 7.69 },
  clouds: { all: 100 },
  dt: 1729952527,
  sys: {
    type: 2,
    id: 2094500,
    country: "RU",
    sunrise: 1729916600,
    sunset: 1729951403,
  },
  timezone: 10800,
  id: 524901,
  name: "Москва",
  cod: 200,
};

const divResult = document.getElementById('divResult')
const wetherBtn = document.getElementById('wetherBtn')

// Функция которая примет объект с погодой и вернет данные которые мне нужны

function getClearWeatherObject(weatherObj){
    return {
        temp: weatherObj.main.temp,
        feels_like: weatherObj.main.feels_like,
        pressure: weatherObj.main.pressure,
        humidity: weatherObj.main.humidity,
        windSpeed: weatherObj.wind.speed,
        cityName: weatherObj.name
    }
}

function displayP(text, parent){
    let p = document.createElement('p')
    p.innerText = text
    parent.append(p)
}

function displayWeather(weatherObj) {
    // Очистка
    let h1 = document.querySelector('h1')
    divResult.innerHTML = ''
    h1.innerText = 'Погода в...'
    
    let weather = getClearWeatherObject(weatherObj)
    
    h1.innerText = weather.cityName

    // Создаем карточку Bootstrap
    const card = document.createElement('div')
    card.className = 'card mt-3 mb-3'
    
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    
    // Создаем список с красивым оформлением
    const list = document.createElement('ul')
    list.className = 'list-group list-group-flush'
    
    const weatherItems = [
        { icon: '🌡️', label: 'Температура', value: `${weather.temp}°C` },
        { icon: '🌡️', label: 'Ощущается как', value: `${weather.feels_like}°C` },
        { icon: '🌪️', label: 'Давление', value: `${weather.pressure} мм рт.ст.` },
        { icon: '💧', label: 'Влажность', value: `${weather.humidity}%` },
        { icon: '💨', label: 'Скорость ветра', value: `${weather.windSpeed} м/с` }
    ]
    
    weatherItems.forEach(item => {
        const listItem = document.createElement('li')
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
        listItem.innerHTML = `
            <span>${item.icon} ${item.label}</span>
            <span class="badge bg-primary rounded-pill">${item.value}</span>
        `
        list.appendChild(listItem)
    })
    
    cardBody.appendChild(list)
    card.appendChild(cardBody)
    divResult.appendChild(card)
    
    console.log("Погода обновлена")
}


function addBtnListener(){
    wetherBtn.addEventListener('click', () => {
        displayWeather(apiAnswer)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    addBtnListener()
})