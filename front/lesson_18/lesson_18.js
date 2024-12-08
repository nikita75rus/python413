// Lesson 18 Local Storage

// Функция вызывающая промпт и записывающая в локальное хранилище
function writeData(){
    // Запрашиваем у пользователя сообщение через диалоговое окно
    let message = prompt('Введите сообщение');
    // Сохраняем сообщение в локальное хранилище с ключом 'message'
    localStorage.setItem('message', message);
    console.log(`Сообщение ${message} записано в локальное хранилище`);
}

function readData(){
    // Получаем сообщение из локального хранилища по ключу 'message'
    let message = localStorage.getItem('message');
    
    if (message) {
        // Если сообщение найдено - формируем текст для вывода
        let alertMsg = `Сообщение ${message} прочитано из локального хранилища`;
        // Показываем сообщение в диалоговом окне
        alert(alertMsg);
        console.log(alertMsg);
    } else {
        // Если сообщение не найдено - выводим уведомление об этом
        let alertMsg = `Сообщение не найдено`;
        alert(alertMsg);
        console.log(alertMsg);
    }
}

function delData(){
    // Удаляем сообщение из локального хранилища по ключу 'message'
    localStorage.removeItem('message');
    console.log(`Сообщение удалено из локального хранилища`);
}