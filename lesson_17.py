"""
Python: Функции Ч4. Работа с файлами. TXT CSV JSON YAML. Урок: 17
- Контекстный менеджер with
"""

# Как пишется контекстный менеджер?

with open("lesson_17.txt", "w", encoding="utf-8") as file:
    file.write("Первая строка\n")
    file.write("Вторая строка\n")

# JSON - JavaScript Object Notation
import json

metallica_songs = [
    {
        "name": "Nothing Else Matters",
        "author": "James Hetfield, Lars Ulrich",
        "year": 1991,
        "duration": 390,  # 6 минут 30 секунд
        "description": "Одна из самых известных баллад Metallica, написанная Джеймсом Хэтфилдом. Песня о доверии и преданности."
    },
    {
        "name": "Enter Sandman",
        "author": "James Hetfield, Lars Ulrich, Kirk Hammett",
        "year": 1991,
        "duration": 332,  # 5 минут 32 секунды
        "description": "Хит из альбома 'Metallica', ставший визитной карточкой группы. Песня о кошмарах и страхах."
    },
    {
        "name": "Master of Puppets",
        "author": "James Hetfield, Lars Ulrich, Kirk Hammett, Cliff Burton",
        "year": 1986,
        "duration": 515,  # 8 минут 35 секунд
        "description": "Эпическая композиция из одноимённого альбома, классика трэш-метала. Песня о зависимости и контроле."
    },
]

new_data = [
    {
        "name": "One",
        "author": "James Hetfield, Lars Ulrich",
        "year": 1988,
        "duration": 446,  # 7 минут 26 секунд
        "description": "Мощная песня из альбома '...And Justice for All', известная своим социальным посылом. Песня о войне и её последствиях."
    },
    {
        "name": "Fade to Black",
        "author": "James Hetfield, Lars Ulrich, Kirk Hammett, Cliff Burton",
        "year": 1984,
        "duration": 420,  # 7 минут 0 секунд
        "description": "Лирическая композиция из альбома 'Ride the Lightning', одна из первых баллад группы. Песня о депрессии и потере смысла жизни."
    },
]

# 4 метода для работы с JSON
# dump - записывает данные в файл
# dumps - возвращает строку
# load - читает данные из файла
# loads - возвращает словарь

json_string = json.dumps(metallica_songs, indent=4, ensure_ascii=False)
back_data = json.loads(json_string)

# Записали
with open("metallica_songs.json", "w", encoding="utf-8") as file:
    json.dump(metallica_songs, file, indent=4, ensure_ascii=False)

# Дозапись
# 1. Читаем
with open("metallica_songs.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# 2. Добавляем в исходные данные новые
data.extend(new_data)

# 3. Перезаписываем файл
with open("metallica_songs.json", "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

# 4. Проверяем
# Прочитали
with open("metallica_songs.json", "r", encoding="utf-8") as file:
    data = json.load(file)

print(data)
# json.decoder.JSONDecodeError: Extra data: line 23 column 2 (char 851)