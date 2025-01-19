"""
19.01.2025
Python: Функции Ч2. Взаимодействие функций. Пакеты. Модули. Импорт. if __name__. Урок: 15
- Повторение типов аргументов в функциях
"""

# Функция которая принемает все типы аргументов
# Позиционные параметры
# Keyword аргументы
# Параметры по умолчанию
# Множественные позиционные параметры
# Множественные ключевые параметры

def all_param_func(a, b, c=10, *args, **kwargs):
    print(f"{a=}")
    print(f"{b=}")
    print(f"{c=}")
    print(f"{args=}")
    print(f"{kwargs=}")

all_param_func(1, 2, 3, 4, five=5)
