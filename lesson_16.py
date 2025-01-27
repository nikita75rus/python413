"""
Python: Функции Ч3. Разбор ДЗ. Работа с файлами. Практика. Урок: 16
"""

"""
ОТНОСИТЕЛЬНЫЕ ПУТИ
./ - текущая директория
../ - родительская директория
../../ - родительская директория родительской директории

АБСОЛЮТНЫЕ ПУТИ
"C:\\Users\\user\\Desktop\\Новая папка\20250124_153344.dng"
C:\\PY\\ПРИМЕРЫ КОДА\\python413\\lesson_16.py
"C:\\Users\\user\\Desktop\\Новая папка\20250124_153344.dng"
"""
txt_file = "lesson_16.txt"

# Откроем файл open
# file = open(txt_file, "a", encoding="utf-8")

# Запишем в файл текст
# file.write("Первая строка" + "\n")
# file.write("Вторая строка" + "\n")

# file.close()

# ФЛАГИ
# r - открыть файл только для чтения - падает с ошибкой если файла нет
# w - открыть файл для записи - создаст файл если его нет и перезапишет его если он есть
# a - открыть файл для добавления данных - создаст файл если его нет, и добавит данные в конец файла
# b - открыть файл в бинарном режиме

# Список функций для TXT
# open() - открывает файл и возвращает итератор
# read() - прочитать весь файл - возвращает строку с содержимым всего файла. Если файл большой, может занять много памяти
# readline() - прочитать одну строку - возвращает строку до символа переноса строки \n. При повторном вызове читает следующую строку
# readlines() - прочитать все строки и вернуть список строк - каждый элемент списка это отдельная строка с \n в конце
# write() - записать данные в файл - принимает строку, возвращает количество записанных символов. Не добавляет \n автоматически
# writelines() - записать список строк в файл - принимает список строк, не добавляет \n между строками автоматически. Нужно добавлять самостоятельно
# close() - закрывает файл и освобождает ресурсы. Важно всегда закрывать файлы после работы

file = open(txt_file, "r", encoding="utf-8")
# <_io.TextIOWrapper name='lesson_16.txt' mode='r' encoding='utf-8'>

# ИТЕРАТИВНОЕ ЧТЕНИЕ ФАЙЛА

# print(file)
# print(next(file))
# StopIteration - итератор закончился

# for line in file:
#     print(line.strip())

# file.close()

# print(file.readline().strip())
# print(file.readline().strip())
# print(file.readline().strip())

lines = file.readlines()
clear_lines = [line.strip() for line in lines]
print(clear_lines)

file.close()

#  PRACTICE
"""
1. Функция чтения txt файла read_txt(file_path: str, encoding: str = "utf-8") -> list[str]
2. Функция записи txt файла write_txt(file_path: str, data: list[str], encoding: str = "utf-8") -> None
3. Функция добавления txt файла append_txt(file_path: str, data: list[str], encoding: str = "utf-8") -> None
"""


def read_txt(file_path: str, encoding: str = "utf-8") -> list[str]:
    """
    Функция для текстового документа.
    :param  :
    :return :
    :raise :
    """
    file = open(file_path, "r", encoding=encoding)
    lines = file.readlines()
    clear_lines = [line.strip() for line in lines]
    file.close()
    return clear_lines


def write_txt(file_path: str, data: list[str], encoding: str = "utf-8") -> None:
    """
    Функция для текстового документа.
    :param  :
    :return :
    :raise :
    """
    file = open(file_path, "w", encoding=encoding)
    file.writelines(data)
    file.close()



def append_txt(file_path: str, data: list[str], encoding: str = "utf-8") -> None:
    """
    Функция для текстового документа.
    :param  :
    :return :
    :raise :
    """
    file = open(file_path, "a", encoding=encoding)
    file.writelines(data)
    file.close()
    
