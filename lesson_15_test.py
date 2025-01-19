# lesson_15_test.py
# Вариант иморта №1
# import lesson_15

# Вариант импорта №2
# from lesson_15 import *

# Вариант импорта №3
from lesson_15 import all_param_func

# Вариант 3.1 - псевдоним
from lesson_15 import all_param_func as apf
# Вызов функции по варианту №1
# lesson_15.all_param_func(1, 2, 3, 4, five=5)

# Вызов функции по варианту №2
# all_param_func(1, 2, 3, 4, five=5)

# Вызов функции по варианту №3
# all_param_func(1, 2, 3, 4, five=5)

# Вызов функции по варианту №3.1
apf(1, 2, 3, 4, five=5)

# Импорт модуля из пакета
from data.marvel import full_dict

print(full_dict)
