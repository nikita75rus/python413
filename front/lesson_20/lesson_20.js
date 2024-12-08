// Блоки try/catch/finally в JavaScript
// try - сделать что-то, что может вызвать ошибку
// catch - обработать ошибку
// finally - выполнить что-то в любом случае допустим логирование


// console.log(personName)

// try {
//     // Мы делаем попытку выполнить код который может вызвать ошибку
//     console.log(personName); // Попытка обратиться к несуществующей переменной
// } catch (error) {
//     // Если произошла ошибка, выполнится этот блок
//     // error - объект ошибки
//     // console.log(error)
//     console.log('Произошла ошибка:', error.message); // Выведет сообщение об ошибке
// } finally {
//     console.log('Этот блок выполнится в любом случае'); // Выполнится всегда
// }

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Усть-Каменогорск&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru'

// Выполним запрос через fetch с цепочкой .then с проверкой статус кода и разными обработчиками ошибок

// fetch(url)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error('Ошибка запроса')
//         }
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// Аналогично, но без условных операторов. Мы можем не делать явный возврат и использовать цепочку .then

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))





// async function getWeather(city){
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru`
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }

// async function displayWeather() {
//     let city = prompt('Введите название города')
    
//     // Запускаем таймер параллельно с запросом погоды
//     setInterval(() => {
//         console.log('Тик-так, прошла секунда')
//     }, 1000)
    
//     let weather = await getWeather(city)
//     console.log(weather)
// }

// displayWeather()



async function getWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru`
    
    // Создаем искусственную задержку
    // new Promise - создаём собственный промис, который будет выполняться в течение 2 секунд
    const delay = new Promise(resolve => setTimeout(resolve, 2000));
    
    // Запускаем оба промиса параллельно
    // Promise.all - запускает все промисы параллельно и ждёт их всех
    const [response] = await Promise.all([
        fetch(url),
        delay
    ]);
    
    const data = await response.json();
    return data;
}

  document.addEventListener('DOMContentLoaded', () => {
      // Получаем ссылки на все необходимые элементы интерфейса
      const button = document.getElementById('weatherButton');
      const spinner = document.getElementById('spinner');
      const buttonText = document.getElementById('buttonText');
      const cityInput = document.getElementById('cityInput');
      const weatherResult = document.getElementById('weatherResult');

      button.addEventListener('click', async () => {
          try {
              // Включаем состояние загрузки: блокируем кнопку, показываем спиннер и меняем текст
              button.disabled = true;
              spinner.classList.remove('d-none');
              buttonText.textContent = 'Загрузка...';
            
              // Получаем значение города из поля ввода и делаем запрос к API погоды
              const city = cityInput.value;
              const weather = await getWeather(city);
            
              // Формируем и отображаем результат запроса в виде HTML с данными о погоде
              weatherResult.innerHTML = `
                  <div class="alert alert-success">
                      <h4>Погода в городе ${weather.name}</h4>
                      <p>Температура: ${weather.main.temp}°C</p>
                      <p>Описание: ${weather.weather[0].description}</p>
                  </div>
              `;
          } catch (error) {
              // В случае ошибки показываем сообщение об ошибке
              weatherResult.innerHTML = `
                  <div class="alert alert-danger">
                      Ошибка: ${error.message}
                  </div>
              `;
          } finally {
              // Возвращаем интерфейс в исходное состояние независимо от результата
              button.disabled = false;
              spinner.classList.add('d-none');
              buttonText.textContent = 'Запрос';
          }
      });
  });
