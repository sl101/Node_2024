// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/gow/governor/сурт
// где сурт получаем как аргумент модуля
// и получает ответ - объект с описанием мира игры GoW где правитель Сурт
// Модуль должен возвращать title мира.

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (p) {
	const options = {
		'method': 'GET',
		'headers': {
			'apikey': APIKEY
		}
	};

	const res = await fetch(`${URL}/api/13/gow/governor/${p}`, options);
	const data = await res.json();
	if (data.success) return data.world.title;
	else console.log(data.error);
};

