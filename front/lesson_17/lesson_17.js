// Lesosn 17
// HTML Collection и NodeList
// HTML Collection - живая коллекция элементов, автоматически обновляется при изменении DOM
// Методы HTML Collection:
// - item() - получить элемент по индексу
// - namedItem() - получить элемент по id или name
// - length - количество элементов

// NodeList - статичная коллекция узлов, не обновляется автоматически
// Методы NodeList:
// - item() - получить элемент по индексу
// - forEach() - перебор элементов
// - entries() - возвращает итератор пар ключ/значение
// - keys() - возвращает итератор ключей
// - values() - возвращает итератор значений
// - length - количество элементов

// Основные отличия:
// 1. HTML Collection - только элементы, NodeList - любые узлы DOM
// 2. HTML Collection - живая коллекция, NodeList - статичная (кроме childNodes)
// 3. NodeList имеет больше методов для работы с элементами
// 4. HTML Collection можно получить через getElementsBy..., NodeList через querySelectorAll

// Получаем коллекции разными способами
const htmlCollection = document.getElementsByTagName('p'); // живая коллекция
const nodeList = document.querySelectorAll('p'); // неживая коллекция

console.log('До изменений:')
console.log('HTMLCollection:', htmlCollection.length); // 2
console.log('NodeList:', nodeList.length); // 2

// Создаем новый параграф
const newP = document.createElement('p')
newP.textContent = 'Новый параграф'
document.body.appendChild(newP)

console.log('После добавления параграфа:')
console.log('HTMLCollection:', htmlCollection.length); // 3 (автоматически обновилась)
console.log('NodeList:', nodeList.length); // 2 (осталась прежней)

// Чтобы получить актуальные данные для NodeList, нужно получить её заново
const updatedNodeList = document.querySelectorAll('p')
console.log('Обновленный NodeList:', updatedNodeList.length); // 3


// Обойдем forEach коллекцию updatedNodeList, добавим к каждому элементу класс и изменим цвет фона
// updatedNodeList.forEach(item => {
//     item.classList.add('text-success')
//     item.style.backgroundColor = 'lightblue'
// })


// Методы получения живых коллекций (HTMLCollection):
// document.getElementsByTagName() - получить элементы по имени тега
// document.getElementsByClassName() - получить элементы по имени класса
// document.getElementsByName() - получить элементы по атрибуту name
// document.forms - получить все формы на странице
// document.images - получить все изображения
// document.links - получить все ссылки
// element.children - получить дочерние элементы
// document.childNodes - получить все дочерние узлы (живая коллекция!)
// parentNode.childNodes - получить все дочерние узлы элемента (живая коллекция!)


// Методы получения неживых коллекций (NodeList):
// document.querySelectorAll() - получить элементы по CSS селектору
// element.querySelectorAll() - получить элементы внутри element по CSS селектору

// Методы для поиска штучного элемента:
// document.getElementById() - получить элемент по id
// document.querySelector() - получить первый элемент по CSS селектору
// element.querySelector() - получить первый элемент внутри element по CSS селектору


// Навигация по DOM дереву:

// Родственные узлы:
// element.parentNode - получить родительский узел
// element.parentElement - получить родительский элемент
// element.closest(selector) - найти ближайший родительский элемент, подходящий под CSS-селектор

// Дочерние узлы:
// element.childNodes - получить все дочерние узлы
// element.children - получить все дочерние элементы
// element.firstChild - получить первый дочерний узел
// element.firstElementChild - получить первый дочерний элемент
// element.lastChild - получить последний дочерний узел
// element.lastElementChild - получить последний дочерний элемент

// Siblings (братья/сестры - элементы на том же уровне):
// element.previousSibling - получить предыдущий узел
// element.previousElementSibling - получить предыдущий элемент
// element.nextSibling - получить следующий узел
// element.nextElementSibling - получить следующий элемент

// Проверка наличия:
// element.hasChildNodes() - проверить наличие дочерних узлов
// element.contains(elem) - проверить, содержит ли element внутри себя элемент elem

// Разница между Node и Element:
// Node (узел) - это более общее понятие, включающее в себя:
// - текстовые узлы (просто текст)
// - узлы комментариев <!-- -->
// - элементы (теги HTML)
// - документ и его фрагменты
// - пробелы и переносы строк между тегами

// Element (элемент) - это только HTML теги
// Например:
// <div>Привет <b>мир</b>!</div>
// - div является элементом и узлом
// - текст "Привет" является текстовым узлом
// - b является элементом и узлом  
// - текст "мир" является текстовым узлом
// - текст "!" является текстовым узлом


// Добудем ноды и элементы боди. Выведем их в консоль
const body = document.querySelector('body')
console.log('body:', body); // body

// Добываем ноды
const bodyChildNodes = body.childNodes
console.log('bodyChildNodes:', bodyChildNodes); // NodeList(3) [text, p, text]

// // Добываем элементы
const bodyChildElements = body.children
console.log('bodyChildElements:', bodyChildElements); // HTMLCollection(2) [p, script]

// Что можно делать с элементами:
// Создание элементов:
// document.createElement("tag_name") - создать HTML элемент
// document.createTextNode(text) - создать текстовый узел

// Добавление элементов:
// parent.appendChild(element) - добавить элемент в конец parent
// parent.insertBefore(element, nextSibling) - вставить element перед nextSibling
// parent.append(...elements) - добавить элементы в конец parent
// parent.prepend(...elements) - добавить элементы в начало parent
// parent.before(...elements) - вставить элементы перед parent
// parent.after(...elements) - вставить элементы после parent

// Удаление элементов:
// element.remove() - удалить элемент
// parent.removeChild(element) - удалить дочерний элемент

// Замена элементов:
// parent.replaceChild(newElement, oldElement) - заменить oldElement на newElement
// element.replaceWith(newElement) - заменить element на newElement

// Работа с классами:
// element.classList.add('class') - добавить класс
// element.classList.remove('class') - удалить класс
// element.classList.toggle('class') - переключить класс (добавить если нет, удалить если есть)
// element.classList.contains('class') - проверить наличие класса
// element.className - получить/установить все классы строкой

// Работа с содержимым:
// element.innerHTML - получить/установить HTML-содержимое
// element.outerHTML - получить/установить HTML-содержимое включая сам элемент
// element.textContent - получить/установить текстовое содержимое
// element.innerText - получить/установить отображаемый текст (учитывает стили)


// Работа с атрибутами:
// element.setAttribute(name, value) - установить атрибут
// element.getAttribute(name) - получить значение атрибута
// element.removeAttribute(name) - удалить атрибут
// element.hasAttribute(name) - проверить наличие атрибута
// element.attributes - получить все атрибуты

// Нам нужно найти все заголовки 2 уровня. Дать им id от 1 и далее
// Нам нужно создать nav ul с id
// Нам нужно создать nav li с id и текстом из заголовка

// Ищем все заголовки h2 через querySelectorAll
let headings = document.querySelectorAll('h2')
let startId = 1

// Идем в HTML и создаем там nav>ul#navUl и ложим это в переменную navUl
let navUl = document.querySelector('#navUl')

// Обходим все заголовки и создаем li с id и текстом из заголовка и добавляем это в navUl

headings.forEach(heading => {
    // Добавляю id в заголовке
    heading.id = startId
    // Добываем текст текущего заголовка
    let headingText = heading.textContent
    // Создаем li
    let li = document.createElement('li')
    // Создаем якорную ссылку 
    let a = document.createElement('a')
    // Добавляем текст в якорную ссылку
    a.textContent = headingText
    // Добавляем путь для ссылки
    a.href = '#' + startId
    // Добавляем в li якорную ссылку
    li.appendChild(a)
    // Добавляем в navUl li
    navUl.appendChild(li)
    // Увеличиваем id на 1
    startId += 1
    
})

const methods = [
    ['Название метода', 'Категория', 'Описание'],
    
    // Методы HTMLCollection
    ['getElementsByTagName', 'HTMLCollection', 'Получить элементы по имени тега. Аргументы: имя тега.'],
    ['getElementsByClassName', 'HTMLCollection', 'Получить элементы по имени класса. Аргументы: имя класса.'],
    ['getElementsByName', 'HTMLCollection', 'Получить элементы по атрибуту name. Аргументы: значение name.'],
    ['item(index)', 'HTMLCollection', 'Получить элемент по индексу. Аргументы: index - номер элемента.'],
    ['namedItem(name)', 'HTMLCollection', 'Получить элемент по id или name. Аргументы: name - идентификатор или имя.'],
    ['length', 'HTMLCollection', 'Количество элементов.'],
    
    // Методы NodeList
    ['querySelectorAll', 'NodeList', 'Получить элементы по CSS селектору. Аргументы: CSS селектор.'],
    ['item(index)', 'NodeList', 'Получить элемент по индексу. Аргументы: index - номер элемента.'],
    ['forEach(callback)', 'NodeList', 'Перебор элементов. Аргументы: функция обратного вызова.'],
    ['entries()', 'NodeList', 'Возвращает итератор пар ключ/значение.'],
    ['keys()', 'NodeList', 'Возвращает итератор ключей.'],
    ['values()', 'NodeList', 'Возвращает итератор значений.'],
    ['length', 'NodeList', 'Количество элементов.'],
    
    // Методы для поиска отдельных элементов
    ['getElementById', 'Поиск элемента', 'Получить элемент по id. Аргументы: id элемента.'],
    ['querySelector', 'Поиск элемента', 'Получить первый элемент по CSS селектору. Аргументы: CSS селектор.'],
    ['element.querySelector', 'Поиск элемента', 'Получить первый элемент внутри элемента по CSS селектору. Аргументы: CSS селектор.'],
    
    // Навигация по DOM дереву
    ['parentNode', 'Навигация', 'Получить родительский узел.'],
    ['parentElement', 'Навигация', 'Получить родительский элемент.'],
    ['closest(selector)', 'Навигация', 'Найти ближайший родительский элемент, подходящий под CSS-селектор. Аргументы: CSS селектор.'],
    ['childNodes', 'Навигация', 'Получить все дочерние узлы.'],
    ['children', 'Навигация', 'Получить все дочерние элементы.'],
    ['firstChild', 'Навигация', 'Получить первый дочерний узел.'],
    ['firstElementChild', 'Навигация', 'Получить первый дочерний элемент.'],
    ['lastChild', 'Навигация', 'Получить последний дочерний узел.'],
    ['lastElementChild', 'Навигация', 'Получить последний дочерний элемент.'],
    ['previousSibling', 'Навигация', 'Получить предыдущий узел.'],
    ['previousElementSibling', 'Навигация', 'Получить предыдущий элемент.'],
    ['nextSibling', 'Навигация', 'Получить следующий узел.'],
    ['nextElementSibling', 'Навигация', 'Получить следующий элемент.'],
    ['hasChildNodes()', 'Навигация', 'Проверить наличие дочерних узлов.'],
    ['contains(elem)', 'Навигация', 'Проверить, содержит ли элемент внутри себя другой элемент. Аргументы: elem - проверяемый элемент.'],
    
    // Создание элементов
    ['createElement(tagName)', 'Создание элементов', 'Создать HTML элемент. Аргументы: название тега.'],
    ['createTextNode(text)', 'Создание элементов', 'Создать текстовый узел. Аргументы: текстовое содержимое.'],
    
    // Добавление элементов
    ['appendChild(element)', 'Добавление элементов', 'Добавить элемент в конец родителя. Аргументы: элемент для добавления.'],
    ['insertBefore(element, nextSibling)', 'Добавление элементов', 'Вставить элемент перед указанным соседом. Аргументы: элемент для вставки, следующий соседний элемент.'],
    ['append(...elements)', 'Добавление элементов', 'Добавить элементы в конец родителя. Аргументы: элементы для добавления.'],
    ['prepend(...elements)', 'Добавление элементов', 'Добавить элементы в начало родителя. Аргументы: элементы для добавления.'],
    ['before(...elements)', 'Добавление элементов', 'Вставить элементы перед родителем. Аргументы: элементы для вставки.'],
    ['after(...elements)', 'Добавление элементов', 'Вставить элементы после родителя. Аргументы: элементы для вставки.'],
    
    // Удаление элементов
    ['remove()', 'Удаление элементов', 'Удалить элемент из DOM.'],
    ['removeChild(element)', 'Удаление элементов', 'Удалить дочерний элемент. Аргументы: элемент для удаления.'],
    
    // Замена элементов
    ['replaceChild(newElement, oldElement)', 'Замена элементов', 'Заменить старый элемент на новый. Аргументы: новый элемент, старый элемент.'],
    ['replaceWith(newElement)', 'Замена элементов', 'Заменить текущий элемент на новый. Аргументы: новый элемент.'],
    
    // Работа с классами
    ['classList.add(className)', 'Работа с классами', 'Добавить класс. Аргументы: название класса.'],
    ['classList.remove(className)', 'Работа с классами', 'Удалить класс. Аргументы: название класса.'],
    ['classList.toggle(className)', 'Работа с классами', 'Переключить класс (добавить если нет, удалить если есть). Аргументы: название класса.'],
    ['classList.contains(className)', 'Работа с классами', 'Проверить наличие класса. Аргументы: название класса.'],
    ['className', 'Работа с классами', 'Получить или установить все классы строкой.'],
    
    // Работа с содержимым
    ['innerHTML', 'Работа с содержимым', 'Получить или установить HTML-содержимое элемента.'],
    ['outerHTML', 'Работа с содержимым', 'Получить или установить HTML-содержимое элемента, включая сам элемент.'],
    ['textContent', 'Работа с содержимым', 'Получить или установить текстовое содержимое элемента.'],
    ['innerText', 'Работа с содержимым', 'Получить или установить отображаемый текст, учитывая стили.'],
    
    // Работа с атрибутами
    ['setAttribute(name, value)', 'Атрибуты', 'Установить атрибут. Аргументы: имя атрибута, значение.'],
    ['getAttribute(name)', 'Атрибуты', 'Получить значение атрибута. Аргументы: имя атрибута.'],
    ['removeAttribute(name)', 'Атрибуты', 'Удалить атрибут. Аргументы: имя атрибута.'],
    ['hasAttribute(name)', 'Атрибуты', 'Проверить наличие атрибута. Аргументы: имя атрибута.'],
    ['attributes', 'Атрибуты', 'Получить все атрибуты элемента.']
];



// Находим h2 с theme="methodsTable"
let tableH2 = document.querySelector('h2[theme="methodsTable"]')
console.log(tableH2);

// Создаем после него тег таблицы и даем ей BS5 классы и id
let table = document.createElement('table')

table.classList.add('table', 'table-striped', 'table-hover', 'table-bordered', 'table-responsive');

table.id = 'table'

// Добавляем ПОСЛЕ h2 с theme="methodsTable" таблицу
tableH2.insertAdjacentElement('afterend', table)

// Обходим через forEach массив с методами
methods.forEach(item => {
    // Создаем строку таблицы
    let tr = document.createElement('tr')
    // Открываем цикл для вложенного массива и создания ячеек таблицы
    item.forEach(item => {
        // Создаем для каждого элемента ВЛОЖЕННОГО массива ячейку таблицы
        let td = document.createElement('td')
        // Заполняем ячейку текстом
        td.textContent = item
        // Добавляем ячейку в строку таблицы
        tr.appendChild(td)
    })

    // Добавляем строку таблицы в таблицу
    table.appendChild(tr)
    })


// ЛИСТНЕРЫ!

let buttonStart = document.querySelector('#buttonStart')

// function handleClick() {
//     alert('Кнопка нажата')
//     console.log('Кнопка нажата')
//     // удалим кнопку
//     // buttonStart.remove()
// }


// // buttonStart.addEventListener('click', handleClick)

// // // Удалим слушателя по клику
// // buttonStart.removeEventListener('click', handleClick)

// // Добавляем listener к кнопке который выполнится только один раз once true
// buttonStart.addEventListener('click', handleClick, {once: true})


function handleClick(event) {
    alert('Кнопка нажата')
    console.log(event)
    // удалим кнопку
    // buttonStart.remove()
}

buttonStart.addEventListener('click', handleClick)
