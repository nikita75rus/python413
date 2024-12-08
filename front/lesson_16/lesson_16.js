// Lesson 16 - DOM - Document Object Model

console.log("lesson_16");
console.log("Печатаем объект документа:", document);

// Добудем прямых потомков документа
console.log("Прямые потомки документа:", document.children);

// Как добывать элементы?
// По css селектору тег body
let bodyNode = document.querySelector("body");
console.log("bodyNode:", bodyNode);

// Найдем у body всех прямых потомков
bodyNodeChilds = bodyNode.children;
console.log("bodyNode.children:", bodyNodeChilds);

// Воспользуемся полученной HTML коллекцией чтобы по ключу
firstChildBodyNode = bodyNodeChilds[0];
console.log("firstChildBodyNode:", firstChildBodyNode);

// Поменяем текстовое содержимоее первого потомка body
firstChildBodyNode.textContent = "Урок 16 перестает быть томным";
firstChildBodyNode.className += " bg-warning";

// Toggle - переключатель. Переключим bg-warning на bg-success
firstChildBodyNode.classList.toggle("bg-warning");
firstChildBodyNode.classList.toggle('text-danger');
firstChildBodyNode.classList.toggle("bg-success");

// Добыча элементов
let pText = document.getElementById("text");

// Изменить текст
pText.textContent = "Тект добавленный через JS скрипт!";
// Добавим стили черз classList
pText.classList.add("text-secondary", "text-center");
pText.classList.remove("text-secondary");

// add() - добавляет класс
// remove() - удаляет класс
// toggle() - переключает класс (если есть - удаляет, если нет - добавляет)
// contains() - проверяет наличие класса

// Добудим текстовое содержимое и запишем это в созданный аттрибут дата
let pTextContent = pText.textContent;
pText.setAttribute("data-text", pTextContent);

// Получим эти данные из аттрибута
let pTextData = pText.getAttribute("data-text");

// Возьмем промпт от пользователя и допишем это в атрибут
let userText = prompt("Введите текст");
pTextData += " " + userText;
pText.setAttribute("data-text", pTextData);

// Практика!
// Создайте элемент div с классом .red-square
// добавьте класс в css .red-square { width: 100px; height: 100px; background-color: red; }
// добавьте класс в css .blue-circle { width: 100px; height: 100px; background-color: blue; border-radius: 50%; }
// Добавьте в Html обработку onclick вызов функции changeColor
// Опишите функцию которая будет перекючать классы red-square и blue-circle

function changeColor(){
    let div = document.querySelector("div");
    
    
    div.classList.toggle("red-square");
    div.classList.toggle("blue-circle");

    setTimeout(changeColor, 1000);
}

function changeBodyColor(){
    let body = document.querySelector("body");
    body.classList.toggle("bg-success");
    body.classList.toggle("bg-danger");
    setTimeout(changeBodyColor, 50);
}

// changeBodyColor()