// curl https://api.openai.com/v1/chat/completions
// https://api.vsegpt.ru/v1
// https://api.vsegpt.ru/v1/chat/completions
// sk-or-vv-32acad84830483432df6bb1eb3114ede486fe620ba237c07f152b84c6a27e782

// -H "Content-Type: application/json"
// -H "Authorization: Bearer $OPENAI_API_KEY"
// -d '{
// "model": "openai/gpt-4o-mini",
// "messages": [
//     {
//     "role": "system",
//     "content": "You are a helpful assistant."
//     },
//     {
//     "role": "user",
//     "content": "Who won the world series in 2020?"
//     },
//     {
//     "role": "assistant",
//     "content": "The Los Angeles Dodgers won the World Series in 2020."
//     },
//     {
//     "role": "user",
//     "content": "Where was it played?"
//     }
// ]
// }'

const apiKey = 'sk-or-vv-32acad84830483432df6bb1eb3114ede486fe620ba237c07f152b84c6a27e782';
const apiUrl = 'https://api.vsegpt.ru/v1/chat/completions';
// 'openai/gpt-4o-mini'
// 'anthropic/claude-3-5-haiku'
const modelAI = 'anthropic/claude-3-5-haiku'; 
const chatHistory = [];
const systemPrompt = 'Ты асистент-помощник. Ты отвечаешь на вопросы пользователя на русском языке. Великолепно знаешь русский. Ты отвечаешь лаконично, если тебя не попросят об ином.';

// Универсальная функция для текстовых запросов.
// Принимает пользовательский запрос и модель. Возвращает ответ сервера. и пополняет историю чата (которая лежит в chatHistory)

async function makeRequest(userPrompt, model = modelAI) {
    // Добавляем системный промпт в начало истории, если история пуста
    if (chatHistory.length === 0) {
        chatHistory.push({
            role: 'system',
            content: systemPrompt
        });
    }

    // Добавляем запрос пользователя в историю
    chatHistory.push({
        role: 'user',
        content: userPrompt
    });

    // Формируем тело запроса
    const requestBody = {
        model: model,
        messages: chatHistory,
        temperature: 0.7,
        // Для gpt4o серии это 16000
        // Для claude haiku 3.5 это 8100
        max_tokens: 200
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        
        // Добавляем ответ ассистента в историю
        if (data.choices && data.choices[0].message) {
            chatHistory.push(data.choices[0].message);
        }

        return data.choices[0].message.content;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
}


// Пример использования
// makeRequest('Расскажи 5 шуток понятных жителю СНГ про JS разработчика')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
