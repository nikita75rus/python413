const searchForm = document.querySelector('form');
const serchFormInput = document.querySelector('input');
const key = 'lastSity'

// Функция принемающая значение и ключ и записывает в локал сторедж
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Функция принемающая ключ и возвращает значение
function getLocalStorage(key) {
    return localStorage.getItem(key);
}

// Функция которая будет добавлена в листнер формы (отправка формы) и будет блокировать стандартное поведение (отправка формы). После чего она добывает значение из инпута и записывает в локал сторедж. Выводит значение в консоль.

function handleFormSubmit(event) {
    // preventDefault - отменяет стандартное поведение - отправка формы и обновление страницы
    event.preventDefault();
    const value = serchFormInput.value;
    setLocalStorage(key, value);
    console.log(`Записано в локал сторедж: ${value}`);
}

console.log(serchFormInput);


// Функция которая будет отрабатывать загрузку документа и считывать значение из локал сторедж и выводит в консоль и в инпут

function handleLoad() {
    const value = getLocalStorage(key);
    console.log(`Прочитано из локал сторедж: ${value}`);
    serchFormInput.value = value;
}

// Добавляем листнер на форму
searchForm.addEventListener('submit', handleFormSubmit);
// Добавляем листнер на загрузку документа
window.addEventListener('load', handleLoad);