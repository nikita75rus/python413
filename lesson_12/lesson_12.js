// Lesson 12 
// While и Do While в JS

// While - пока. Цикл работает пока условие выполняется. Проверяет условие перед выполнением тела цикла.
// Do While - делает. Цикл работает пока условие выполняется. Проверяет условие после выполнения тела цикла.

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Вариант DO  WHILE
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);



// while (true) {
//     console.log('Hello');
// }

// continue - пропускает итерацию
// break - прерывает цикл

// Вывести все четные числа от 0 до 20 в консоль
// а на нечетных делаем continue

// let k = 0;

// while (k <= 20) {
//     // Проверяем через оператор остаток НЕ четность числа
//     k++;
//     if (k % 2 !== 0) {
//         continue;
//     }
//     if (k > 10) {
//         break;
//     }
//     console.log(k);
//     // k++;
// }

// let rWords = ["рррраф кофе!","автомобиль", "трактор", "ружье", "компьютер", "телевизор", "бронетранспортер", "деревня"]

// // Пройдем по массиву, если букв р больше 2, остановим цикл

// for (word of rWords) {
//     console.log(word.split('р'));

//     if (word.split('р').length > 3) {
//         console.error(`Слово ${word} не подходит`);
//         continue;
//     }
//     console.log(`Слово ${word} подходит`);
// }

// // Объекты
// let person = {
//     firstName: "Кузьма",
//     middleName: "Михайлович",
//     lastName: "Петров",
//     age: 30,
//     isMarried: true,
//     "is Student": false,
//     hobbies: ["SQL injection", "Взлом Пентагона по пятницам", "Уходить в дауншифтинг на даче от жены по субботам"],
// }

// person.firstName = "Василий";
// person.middleName = "Иванович";
// console.log(person)
// console.log(person[firstName]);
// console.log(person.hobbies[1])

// let someKey = 'firstName';
// console.log(person[someKey]);


// for (let key in person) {
//     console.log(key, ":", person.key);
// }

// Обращение к свойству объекта может быть через точку или через квадратные скобки
// Динамическое обращение к свойству объекта с помощью квадратных скобок


let people = [
    {
        firstName: "Зульфия",
        middleName: "Ахметовна",
        lastName: "Нурмагомедова",
        age: 28,
        isMarried: false,
        hobbies: ["Горный альпинизм", "Создание авторских духов", "Робототехника"]
    },
    {
        firstName: "Арсений",
        middleName: "Викторович",
        lastName: "Яценюк",
        age: 35,
        isMarried: true,
        hobbies: ["Подводная археология", "Создание бонсай", "Экстремальное вязание"]
    },
    {
        firstName: "Гульнара",
        middleName: "Рустамовна",
        lastName: "Каримова",
        age: 42,
        isMarried: false,
        hobbies: ["Парашютный спорт", "Молекулярная кухня", "Реставрация старинных автомобилей"]
    },
    {
        firstName: "Тимур",
        middleName: "Ильдарович",
        lastName: "Батрутдинов",
        age: 31,
        isMarried: true,
       
    },
    {
        firstName: "Алёна",
        middleName: "Игоревна",
        lastName: "Винницкая",
        age: 39,
        isMarried: false,
        hobbies: ["Паркур", "Создание ледяных скульптур", "Квантовая физика"]
    }
];

// 1. Простой обход массива объектов
console.warn("1. Простой обход массива объектов");
for (let person of people) {
    console.log(`${person.firstName} ${person.middleName} ${person.lastName}, возраст: ${person.age}, ${person.isMarried ? "В браке" : "Не в браке"}`);
}

// 2. Напечатать так же, но не всех, а кто младше 36 лет
console.warn("2. Напечатать так же, но не всех, а кто младше 36 лет");
for (let person of people) {
    if (person.age < 36) {
        console.log(`${person.firstName} ${person.middleName} ${person.lastName}, возраст: ${person.age}, женат/замужем: ${person.isMarried}`);
    }
}

// 3. Создать отдельный пустой массив. Наполнить его объектами которые НЕ женаты.
console.warn("3. Создать отдельный пустой массив. Наполнить его объектами которые НЕ женаты.");
let notMarried1 = [];
for (let person of people) {
    if (!person.isMarried) {
        notMarried1.push(person);
       
    }
}
console.log(notMarried1);
// 4. Остановить цикл, по наполнении массива НЕ женатыми (если 2 человека набралось)
console.warn("4. Создать отдельный пустой массив. Наполнить его объектами которые НЕ женаты.");
let notMarried = [];
for (let person of people) {
    if (!person.isMarried) {
        notMarried.push(person);
        if (notMarried.length === 2) {
            break;
        }
    }
}
console.log(notMarried);
// 5. Увеличить возраст всех женатых на 1 год.
console.warn("5. Увеличить возраст всех женатых на 1 год.");
for (let person of people) {
    // Проверка что is_married = true
    if (person.isMarried) {
        // Увеличить возраст
        person.age += 1;
    }
}

// 6. Посчитать средний возраст всех людей в массиве
console.warn("6. Посчитать средний возраст всех людей в массиве");
let totalAge = 0;
for (let person of people) {
    totalAge += person.age;
}
let averageAge = totalAge / people.length;
console.log(`Средний возраст: ${averageAge}`);

// 7. Найти человека с самым длинным полным именем
console.warn("7. Найти человека с самым длинным полным именем");
let longestNamePerson = people[0];
let maxNameLength = longestNamePerson.firstName.length + longestNamePerson.middleName.length + longestNamePerson.lastName.length;

for (let person of people) {
    let currentNameLength = person.firstName.length + person.middleName.length + person.lastName.length;
    if (currentNameLength > maxNameLength) {
        maxNameLength = currentNameLength;
        longestNamePerson = person;
    }
}
console.log(`Человек с самым длинным именем: ${longestNamePerson.firstName} ${longestNamePerson.middleName} ${longestNamePerson.lastName}. Длина имени: ${maxNameLength}`);

// 8. Перепаковка коллекции
console.warn("8. Перепаковка коллекции");
let newPeople = [];
for (let person of people) {
    newPeople.push({
        name: person.firstName,
        surname: person.lastName,
        age: person.age
    });
}
console.log(newPeople);

// let namesArray = people.map(person => person.firstName);
let namesArray = ['Зульфия', 'Арсений', 'Гульнара', 'Ти{мур', 'Алёна']
let specSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '?', '/', '|', '\\', '[', ']', '{', '}', '<', '>', ',', '.', ';', ':', '`', '~'];
console.log(namesArray);

// Мы открыли цикл по массиву имен
for (let name of namesArray) {
    console.log(name);
    // Мы открыли цикл по буквам имени
    for (let char of name) {
        console.log(char);
        if (specSymbols.includes(char)) {
            console.error(`Символ ${char} встретился в имени ${name}`);
        }
    }
}