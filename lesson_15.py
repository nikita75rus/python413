"""
19.01.2025
Python: Функции Ч2. Взаимодействие функций. Пакеты. Модули. Импорт. if __name__. Урок: 15
- Повторение типов аргументов в функциях
- Варианты импортов модулей и модулей из пакетов
- Корневая директория
- Примеры импортов
- Работа с Open AI через vsegpt.ru
"""

# pip install openai
from pyexpat.errors import messages
from openai import OpenAI
from settings import VSE_GPT_API_KEY

client = OpenAI(
    api_key=VSE_GPT_API_KEY,  # ваш ключ в VseGPT после регистрации
    base_url="https://api.vsegpt.ru/v1",
)


prompt = "Напиши андекдот про то как Python разработчик выбирает имя функции"

# message = [{"role": "user", "content": prompt}]

# response_big = client.chat.completions.create(
#     model="openai/gpt-4o-mini",  # id модели из списка моделей - можно использовать OpenAI, Anthropic и пр. меняя только этот параметр
#     messages=message,
#     temperature=0.9,
#     max_tokens=100,  # максимальное число ВЫХОДНЫХ токенов. Для большинства моделей не должно превышать 4096
# )

# response = response_big.choices[0].message.content
# print("Response:", response)

#  PRACTICE
"""
функция get_openai_request
Принемает:
- Объект клиента OpenAI   client: OpenAI
- Cообщение пользователя prompt: str
- Модель  модели для генерации ответа model: str
- Максимальное число токенов ответа max_tokens: int
- Температура ответа temperature: float

Отдает ответ response: str
"""


def get_openai_request(
    client: OpenAI,
    prompt: str,
    max_tokens: int,
    model: str = "openai/gpt-4o-mini",
    temperature: float = 0.6,
) -> str:
    """
    Функция get_openai_request
    Принемает:
    - Объект клиента OpenAI   client: OpenAI
    - Cообщение пользователя prompt: str
    - Модель  модели для генерации ответа model: str
    - Максимальное число токенов ответа max_tokens: int
    - Температура ответа temperature: float
    Отдает ответ response: str
    """

    message = [{"role": "user", "content": prompt}]

    response_big = client.chat.completions.create(
        model=model,
        messages=message,
        temperature=temperature,
        max_tokens=max_tokens,
    )
    response = response_big.choices[0].message.content
    return response


# result = get_openai_request(
#     client=client,
#     prompt="Напиши андекдот про то как Python разработчик выбирает имя функции",
#     max_tokens=400,
#     model="anthropic/claude-3-5-haiku",
#     temperature=0.9,
# )

# print(result)

import base64

# # Функция для кодирования изображения в base64
# def encode_image(image_path):
#     with open(image_path, "rb") as image_file:
#         return base64.b64encode(image_file.read()).decode("utf-8")

# # Путь к вашему изображению
# image_path = r"C:\Users\user\Pictures\кристалл.jpg"

# # Получаем строку в формате base64
# base64_image = encode_image(image_path)

# response = client.chat.completions.create(
#     model="gpt-4o-mini",
#     temperature=0.5,
#     max_tokens=200,
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "Ответить коротко. Что изображено на этой картинке?",
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"},
#                 },
#             ],
#         }
#     ],
# )

# print(response.choices[0].message.content)

#  PRACTICE
"""
Функция для анализа изображения
Позволяет отправить картинку на анализ и получить ответ от GPT


 client: OpenAI,
    prompt: str,
    max_tokens: int,
    model: str = "openai/gpt-4o-mini",
    temperature: float = 0.6,
"""


def analyze_image(
    client: OpenAI,
    prompt: str,
    max_tokens: int,
    image_path: str,
    model: str = "openai/gpt-4o-mini",
    temperature: float = 0.6,
):
    """
    Функция для анализа изображения
    Позволяет отправить картинку на анализ и получить ответ от GPT
    """

    with open(image_path, "rb") as image_file:
        base64_image = base64.b64encode(image_file.read()).decode("utf-8")

    response = client.chat.completions.create(
        model=model,
        temperature=temperature,
        max_tokens=max_tokens,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt,
                    },
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"},
                    },
                ],
            }
        ],
    )
    return response.choices[0].message.content


if __name__ == "__main__":
    result = analyze_image(
        client=client,
        prompt="Опиши изображение",
        max_tokens=400,
        image_path= r"C:\Users\user\Pictures\photo_2024-08-05_23-15-36.jpg",
        model="openai/gpt-4o-mini",
        temperature=0.9,
    )
    print(result)

