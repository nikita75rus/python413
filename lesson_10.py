"""
"""

from marvel import simple_set, small_dict, full_dict

# Пересоберем сет

new_simple_set = set()

for film in simple_set:
    new_simple_set.add(film)

new_simple_set = {film for film in simple_set}
print(new_simple_set)

# cls - команда терминала для очистки экрана

new_simple_list = []

for film in simple_set:
    if len(film) > 10:
        new_simple_list.append(film.replace(' ', ''))


new_simple_list = [film.replace(' ', '') for film in simple_set if len(film) > 10]

print(new_simple_list)

# Вспомним тернарный IF
a = 5
b = True if a < 10 else False

# Если длина фильма больше 10 берем в обработку. Если содержит "Безымянный" - записываем его как None иначе как есть

new_simple_list = []

for film in simple_set:
    if len(film) > 10:
        if "безымянный" in film.lower():
            new_simple_list.append(None)
        else:
            new_simple_list.append(film)


# Если длина фильма больше 10 берем в обработку. Если содержит "Безымянный" - записываем его как None иначе как есть
new_simple_list = [film if "безымянный" not in film.lower() else None for film in simple_set if len(film) >10]

# Если длина фильма больше 10 берем в обработку. Если содержит "Безымянный" - записываем его как None иначе как есть/
# Хочу чтобы безымянные фильмы обрабатывались все вне зависимости от длины
new_simple_list = [
    film if "безымянный" not in film.lower() else None
    for film in simple_set
    if len(film) > 10 or "безымянный" in film.lower()
]

# Small dict - переходим на словари

films =list(small_dict.keys())