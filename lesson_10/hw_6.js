const pResult = document.getElementById('result');
const markNumber = prompt('Введите оценку для расшифровки (от 0 до 12)');

// Преобразуем ввод в число
// const markNumber = Number(markInput);

// Расшифровка оценок
const startLevel = "Начальный уровень"; // 0-3
const middleLevel = "Средний уровень"; // 4-6
const goodLevel = "Достаточный уровень"; // 7-9
const highLevel = "Высокий уровень"; // 10 - 12

// Мы проверяем, что введенное пользователем является числом
if (isNaN(markNumber)) {
    const logString = `Вы ввели НЕ число!\nisNaN(${markInput})=${isNaN(markInput)}`;
    console.error(logString);
    pResult.textContent = logString;
} 
else if (markNumber >= 0 && markNumber <= 3) {
    const logString = `Расшифровка оценки ${startLevel}`;
    console.log(logString);
    pResult.textContent = logString;
} 
else if (markNumber > 3 && markNumber <= 6) {
    const logString = `Расшифровка оценки ${middleLevel}`;
    console.log(logString);
    pResult.textContent = logString;
} 
else if (markNumber > 6 && markNumber <= 9) {
    const logString = `Расшифровка оценки ${goodLevel}`;
    console.log(logString);
    pResult.textContent = logString;
} 
else if (markNumber > 9 && markNumber <= 12) {
    const logString = `Расшифровка оценки ${highLevel}`;
    console.log(logString);
    pResult.textContent = logString;
} 
else {
    const logString = `Вы ввели число вне диапазона!`;
    console.error(logString);
    pResult.textContent = logString;
}