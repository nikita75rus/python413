"""
Lesson 14
18.01.2025

Python: Функции Ч1. Нейминг. Философия. Типы аргументов. Урок: 14

- DRY - Don't Repeat Yourself (Не повторяйся)
- SRP - Single Responsibility Principle (Принцип единственной ответственности)
- Функия - возможность вынести логику в целостную независимую сущность. Которая может что-то принять на вход, и что то отдать на выходе
- Позиционные аргументы
- KW аргументы
- функция main как точка входа в программу
-Правила нейминга для функций в PYTHON

"""

"""
1. snake_case для названий
2. наличие глагола в названии
3. максимально точное описане действия в названии
4. Не используем служебные имена
5. Можно использовть 3-4 слова 

Нельзя начинать с цифр
Нельзя использовать дефисы
Нельзя использовать пробелы
Нельзя использовать зарезервированные слова Python

Известные цитаты про функции:

"Функции должны делать что-то одно. Они должны делать это хорошо. Они должны делать только это."

Роберт Мартин (Uncle Bob)

"Хорошая функция похожа на хороший абзац: она посвящена одной теме и содержит детали, поддерживающие эту тему."

Стив Макконнелл

"Функциональное программирование - это программирование без побочных эффектов. Оно делает поведение программы более предсказуемым."

Джон Хьюз

"Если функция делает больше, чем говорит её название - у вас проблемы."

Мартин Фаулер

"Функции - это рецепты. Параметры - ингредиенты. Результат - готовое блюдо."
Эрик Эллиотт
"""


def print_hello():
    print("Hello")


print_hello()
print_hello()
print_hello()


def print_message(name, message):
    print(f"Имя {name}, сообщение: {message}")


# Позиционные аргументы
print_message("Алексей", "Привет")
print_message("Привет", "Алексей")

# Имя Алексей, сообщение: Привет
# Имя Привет, сообщение: Алексей

# keyword аргументы
print_message(message="Привет", name="Егор")

arguments = ["Анна", "Привет"]
print_message(*arguments)
print_message(arguments[0], arguments[1])

arguments_dict = {
    "name": "Анна", 
    "message": "Привет"
    }

print_message(**arguments_dict)
print_message(name=arguments_dict["name"], message=arguments_dict["message"])

print(*arguments)
print(*arguments_dict)
# print(**arguments_dict) # TypeError: print() got an unexpected keyword argument 'name'

print_cofig = {
    "sep": "_",
    "end": "+++",
}

print("ананас", "кокос", **print_cofig)

# print_cofig = {
#     "values": "ананас",
#     "sep": "_",
#     "end": "+++",
# }

# print(**print_cofig)

# 1. Позиционные аргументы
# 2. Keyword аргументы
# 3. Аргуементы по умолчанию

# return -  возвращает значение. Если нет возвращаемого значения, то возвращает None
# Останавливает полностью выполнение функции и возвращает данные. Циклы условия - всё останавливает.

# функция с этими типами аргументов

def some_func(name, last_name, age=18):
    return f"Имя: {name}, Фамилия: {last_name}, Возраст: {age}"


print(some_func("Алексей", "Иванов"))
print(some_func("Алексей", "Иванов", 25))
print(some_func(name="Алексей", last_name="Иванов"))
print(some_func(name="Алексей", last_name="Иванов", age=25))

student = {"name": "Алексей", "last_name": "Иванов", "age": 25}
some_func(**student)

# PRACTICE - Функция проверки на совершенолетие
"""
Напишите функцию is_adult которая прнимает один обязательный аргумент ( возраст) и 
аргумент по умолчанию (порог совершенолетия).
Возвращает True или False в зависимости от того, является ли возраст больше или равным порогу совершенолетия.

"""

def is_adult(age, threshold=18):
    return age >= threshold

def main():
    user_age = int(input("Введите возраст: "))

    if is_adult(user_age, 21):
        print("Можешь войти")
    else:
        print("Ты еще молод")

    input("Нажажмите Enter для выхода")
    # exit()

main()


# print(f"Имя: Владимир, Возраст: 25, Можешь войти: {is_adult(25)}")

# AGE = 20
# TRESHOLD = 21

# if is_adult(AGE, TRESHOLD):
#     print("Можешь войти")
# else:
#     print("Ты еще молод")


# user_age = int(input("Введите возраст: "))
# if is_adult(user_age):
#     print("Можешь войти")
# else:
#     print("Ты еще молод")

print("Один")
print("Один", "Два", "Три", sep=", ", end="\n")
print(["Один"], ["Два"], ["Три"], sep=", ", end="\n")

# *args - аргументы. Множественные аргументы, в неограниченном количестве


def print_all(*items):
    print(items)
    print(type(items)) # <class 'tuple'>
    for item in items:
        print(item)

print_all("Один")
print_all("Один", "Два", "Три")

items = ["Один", "Два", "Три"]
print_all(*items)

# PRACTICE - Функция c *words для проверки на палиндром
"""
Напишите функцию is_palindrome которая принимает *words аргументы
и печатает Word - это ...
Пусть проверка будет включать и регистр, а так же пробелы - чтобы многословные палиндромы тоже проверялись
"""

palindormes = [
    "казак",
    "КазаК",
    "КазаК",
    "Топот",
    "ДОвоД",
    "А роза упала на лапу Азора",
    "Аргентина МаниТ негра",
]



#ЧТО бы она могла отдавать наружу?
# 1. Список списков. [["ТопоТ", True], ...]
# 2. Список словарей [{"word": "ТопоТ", "result": True}, ...]
# 3. Словарь {"ТопоТ": True, ...}


def is_palindrome(*words):
    result_dict = {}
    
    for word in words:
        raw_words = word.lower().replace(" ", "")
        if word not in result_dict.keys():
            if raw_words == raw_words[::-1]:
                result_dict[word.lower()] = True
            else:
                result_dict[word.lower()] = False
    
    return result_dict


print(is_palindrome(*palindormes))
# {'казак': True, 'КазаК': True, 'Топот': True, 'ДОвоД': True, 'А роза упала на лапу Азора': True, 'Аргентина МаниТ негра': True}

{'казак': True, 'топот': True, 'довод': True, 'арозаупаланалапуазора': True, 'аргентинаманитнегра': True}