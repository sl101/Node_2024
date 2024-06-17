// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/gow/random-world

// и получает ответ - объект со случайным миром игры GoW
// Модуль должен возвращать имя мира (world)

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
	const options = {
		'method': 'POST',
		'headers': {
			'apikey': APIKEY
		}
	};

	const res = await fetch(`${URL}/api/13/gow/random-world`, options);
	const data = await res.json();
	if (data.success) return data.world;
	else console.log(data.error);
};
