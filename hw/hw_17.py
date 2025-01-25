"""
HW 17
Разбор домашнего задания "Шифр Цезаря"
ord - возвращает числовое значение символа
chr - возвращает символ по числовому значению
"""
from data.marvel import full_dict
print(full_dict)

INDEX = -1
STRING = "Ехал Фёдор через реку видит Фёдор в реке рак, рак..."
ENCODE_STRING = "Жцбм Хђепс шжсжи сжлф гйейу Хђепс г сжлж сбл- сбл///"
letter = STRING[0]
letter_index = ord(letter)
letter_out = chr(letter_index)
print(letter_out)


# Кодируем букву
letter_index += INDEX
letter_out = chr(letter_index)
print(letter_out)

# Раскодируем букву
letter_index = ord(letter_out)
letter_out = chr(letter_index - INDEX)
print(letter_out)


result_string = ""

for letter in ENCODE_STRING:
    # Проверяем символ на пробел
    if letter == " ":
        result_string += letter
        continue

    # Кодируем букву

    # Получаем индекс буквы в строке
    letter_index = ord(letter)
    # Сдвигаем индекс на заданное число
    letter_index += INDEX
    # Получаем символ по индексу
    letter_out = chr(letter_index)
    # Добавляем символ в строку
    result_string += letter_out

print(result_string)


def encode(string: str, index: int) -> str:
    """
    Функция кодирования
    :param string: строка для кодирования
    :param index: сдвиг для кодирования
    :return: закодированная строка
    """
    result_string = ""

    for letter in string:
        # Проверяем символ на пробел
        if letter == " ":
            result_string += letter
            continue

        # Кодируем букву
        letter_index = ord(letter)
        letter_index += index
        letter_out = chr(letter_index)
        result_string += letter_out

    return result_string
