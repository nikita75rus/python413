// ункции и их функциональность

// 1. **Функция `generateProverb(variants, proverbs)`**
//    - **Описание**: Эта функция выбирает случайную пословицу из массива `proverbs` и заменяет слово "Ум" на случайное слово из массива `variants`. После этого она удаляет использованную пословицу из списка, чтобы избежать повторения.
//    - **Подсказки**:
//      - Используйте `Math.random()` для получения случайного индекса массива.
//      - Используйте `splice()` для удаления элемента из массива.
//    - **Вход**:
//      - `variants`: Массив строк (слов, которые можно использовать в качестве замены).
//      - `proverbs`: Массив пословиц.
//    - **Выход**: Строка — модифицированная пословица.

// 2. **Функция `generateMultipleProverbs(count, variants, proverbs)`**
//    - **Описание**: Эта функция генерирует указанное количество уникальных модифицированных пословиц, используя функцию `generateProverb()`.
//    - **Подсказки**:
//      - Используйте цикл `for` или `while` для генерации нужного количества пословиц.
//    - **Вход**:
//      - `count`: Число — количество пословиц, которые нужно сгенерировать.
//      - `variants` и `proverbs`: Те же массивы, что и в предыдущей функции.
//    - **Выход**: Массив строк — модифицированные пословицы.

// 3. **Функция `displayProverbs(proverbsList)`**
//    - **Описание**: Эта функция отображает переданный список пословиц в виде HTML-списка (`<ul><li>...</li></ul>`).
//    - **Подсказки**:
//      - Получите элемент `<ul>` с помощью `document.getElementById()`.
//      - Внутри цикла `for`, создайте элемент `<li>`, задайте ему текст и добавьте в `<ul>` с помощью `appendChild()`.
//    - **Вход**:
//      - `proverbsList`: Массив строк (пословиц для отображения).
//    - **Выход**: Ничего не возвращает. Функция модифицирует DOM.


proverbs = [
    "Ум хорошо, а два лучше.",
    "Ум — горячая штука.",
    "Ум всё голова.",
    "Умом Россию не понять.",
    "Ум бережет, а глупость губит.",
    "Ум в голову приходит.",
    "Ум от ума не горит.",
    "Умом нагружен, а волосы развеваются.",
    "Умом обдумал, а ногами пошел.",
    "Ум — сокровище, не пропадет без него и копье на ветру.",
    "Ум — грех, а бес — мера.",
    "Ум есть богатство.",
    "Ум роднит народы.",
    "Ум краток, да забот — бездна.",
    "Ум не камень, взял и положил.",
    "Ум не велит, а наставляет.",
    "Ум с мерой, а глупость без меры.",
    "Ум — сокол, глаз его — телескоп.",
    "Ум — не конская морда, не разобьешь.",
    "Ум — семь пядей во лбу.",
    "Ум — не барсук, в нору не залезет.",
    "Ум в голове, а не на ветру.",
    "Ум греет душу, а глупость терпение.",
    "Ум служит человеку, а глупость — хозяином.",
    "Ум мил, да безумству хозяин.",
    "Ум в труде, да наслаждение в праздности.",
    "Ум глаза исправляет.",
    "Ум человека не обманешь.",
    "Ум на подобии огня — без сна не останешься.",
    "Ум к уму приходит.",
    "Ум с пользой тратит время.",
    "Ум желание творит.",
    "Ум общего дела дело.",
    "Ум — друг, а воля — враг.",
    "Ум — бесценное сокровище.",
    "Ум тонок, да разум невелик.",
    "Ум — враг бедности.",
    "Ум — теремок, да не на прокол.",
    "Ум силен, да не камень.",
    "Ум рассудит, что сердце не посоветует.",
    "Ум — подкова, а топор — ось.",
    "Ум легче камня, да весомей золота.",
    "Ум не вешать на гроздья.",
    "Ум — не мешок, на плечи не вешай.",
    "Ум — лучшая победа.",
    "Ум — в суде велик, а в деле своем мал.",
    "Ум голове краса.",
    "Ум — сокровище, а глупость — нищета.",
    "Ум человека — огонь, а глаза — масло.",
    "Ум — путь, а дорога — конец.",
    "Ум стоит денег.",
    "Ум от смеха бьет в ладоши.",
    "Ум — коза, к барскому плечу привыкает.",
    "Ум — лезвие, а лень — ржавчина.",
    "Ум на вершине — мир в руках.",
]

variants = [
			'кот',
			'шеф',
			'мозг',
			'лес',
			'фолк',
			'код',
			'рот',
			'мёд',
			'лук',
			'лес',
			'год',
			'час',
			'друг',
			'жена',
			'муж',
			'айфон',
			'работа',
]

const generateBtn = document.getElementById('generateBtn');
const refreshBtn = document.getElementById('refreshBtn');
const ulResult = document.getElementById('ulResult');
let count = 0;

// Функция генерации рандомного числа в диапазоне от 0 до maxThreshold не включая maxThreshold
function getRandomNumber(maxThreshold){
    // Math - служебный объект содержащий математические методы
    // random() - метод возвращает случайное число от 0 до 1
    // floor() - метод округляет число в меньшую сторону
    return Math.floor(Math.random() * maxThreshold);
}

function generateProverb(variants, proverbs){
    // Получаем рандомные индексы для массивов (не более их длины)
    let randomIndexVariant = getRandomNumber(variants.length);
    console.log(`randomIndexVariant: ${randomIndexVariant}`);
    
    let randomIndexProverb = getRandomNumber(proverbs.length);
    console.log(`randomIndexProverb: ${randomIndexProverb}`);

    // Получаем рандомные значения из массивов
    let randomVariant = variants[randomIndexVariant];
    let randomProverb = proverbs[randomIndexProverb];

    // Создаем строку с модифицированной пословицей
    let modifiedProverb = randomProverb.toLowerCase().replace('ум', randomVariant);
    // Делаем первую букву заглавной
    modifiedProverb = modifiedProverb.charAt(0).toUpperCase() + modifiedProverb.slice(1);

    // Удаляем из массивов через splice() элементы, которые уже использовали
    // variants.splice(randomIndexVariant, 1);
    // proverbs.splice(randomIndexProverb, 1);

    // Возвращаем модифицированную строку
    return modifiedProverb;
}

function generateMultipleProverbs(count, variants, proverbs){
    let result = [];
    // for (let i = 0; i < count; i++) {
    //     result.push(generateProverb(variants, proverbs));
    // }

    // Делаем while пока длина массива result не будет равна count
    while (result.length < count) {
        // Проверка что в массиве нет того что было сгенерировано
        newProverb = generateProverb(variants, proverbs);
        if (!result.includes(newProverb)) {
            result.push(newProverb);
        }
    }
    return result;
}

function refreshProverbs(){
    // Math.min - возвращает наименьшее число из переданных аргументов
    // let minLenghtCollections = Math.min(variants.length, proverbs.length);
    let maxProverbs = variants.length * proverbs.length;
    
    // Проверяем что count не пустой, что он в диапазоне от 1 до (длина самой длинной коллекции)
    // Првоерка на пустоту
    if (!count) {
        alert('Введите количество пословиц');
        return;
    }
    // Проверка на диапазон
    else if (count < 1 || count > maxProverbs) {
        alert('Введите количество пословиц от 1 до ' + maxProverbs);
        return;
    }


    // Создать копия массивов внутри функции
    let variantsCopy = [...variants];
    let proverbsCopy = [...proverbs];



    ulResult.innerHTML = '';
    let newProverbs = generateMultipleProverbs(count, variantsCopy, proverbsCopy);
    newProverbs.forEach(proverb => {
        ulResult.innerHTML += `<li>${proverb}</li>`;
    });

}

function generateProverbs(){
    count = prompt('Введите количество пословиц');
    refreshProverbs();
}