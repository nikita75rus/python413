function showNotification(message, type = "primary") {
  const container = document.getElementById("notifications-container");
  // Создаем элемент уведомления
  const notification = document.createElement("div");
  // Добавляем классы для стилизации
  // position-fixed - фиксирует уведомление на экране (оно не двигается при скролле)
  // bottom-0 - размещает уведомление внизу экрана
  // end-0 - размещает уведомление справа экрана
  // m-3 - добавляет отступ со всех сторон (margin)

  notification.className = `alert alert-${type} alert-dismissible fade show`;
  // notification.role - добавляет роль уведомления что бы браузер понимал что это уведомление
  notification.role = "alert";

  // Добавляем сообщение и кнопку закрытия
  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
    `;

  // Добавляем на страницу в контейнер
  container.appendChild(notification);

  // Удаляем через 3 секунды
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// function addTooltip(element, message) {
//     // Устанавливаем необходимые атрибуты для Bootstrap Tooltip

//     // element.setAttribute('data-bs-container', 'body');
//     element.setAttribute('data-bs-toggle', 'tooltip');
//     element.setAttribute('data-bs-placement', 'top');
//     element.setAttribute('data-bs-content', message);

// }
// // Находим все элементы заголовков h1-h6
// const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

// // Проходим по каждому заголовку и добавляем тултип
// headers.forEach((header) => {
//     addTooltip(header.tagName, header)
// });

// Функция для добавления кнопок копирования к блокам кода
function addCodeCopyButtons() {
    console.log("Добавляем кнопки копирования");
  // Находим все блоки pre
  document.querySelectorAll("pre").forEach((preBlock) => {
    // Создаем в каждом из них контейнер
    preBlock.classList.add("pre-container");
    console.log(preBlock);
    // Создаем кнопку копирования
    const copyButton = createCopyButton();
    // Добавляем кнопку в контейнер
    preBlock.appendChild(copyButton);
    // Добавляем листнер по клику
    copyButton.addEventListener(
      "click",
      handleCopyButtonClick.bind(null, preBlock, copyButton)
    );
  });
}

// Функция создания кнопки копирования
function createCopyButton() {
const btn = document.createElement("i");
btn.classList.add("bi", "bi-clipboard", "code-copy-btn");
console.log(btn);
return btn;
}

// Функция обработки клика по кнопке копирования
function handleCopyButtonClick(preBlock, copyButton) {
// Добываем текст из блока кода
const codeContent = preBlock.querySelector("code").innerText;
// Копируем текст в буфер обмена
navigator.clipboard.writeText(codeContent).then(() => {
toggleCopyIcon(copyButton, true);
// Скрываем кнопку через 3 секунду
setTimeout(() => toggleCopyIcon(copyButton, false), 3000);
});
}

// Переключение иконки кнопки и её цвета
function toggleCopyIcon(copyButton, copied) {
copyButton.classList.toggle("bi-clipboard", !copied);
copyButton.classList.toggle("bi-clipboard-check", copied);
copyButton.style.color = copied ? "lightgreen" : "white";}


// По загрузке страницы добавляем кнопки копирования
document.addEventListener("DOMContentLoaded", addCodeCopyButtons);
console.log("Тест")