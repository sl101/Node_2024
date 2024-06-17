// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/gow/world
// и получает ответ - объект с описанием миров игры GoW
// Модуль должен возвращать массив c именами правителей миров (governor)

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
	const options = {
		'method': 'GET',
		'headers': {
			'apikey': APIKEY
		}
	};

	const res = await fetch(`${URL}/api/13/gow/world`, options);
	const data = await res.json();
	if (data.success) return data.worlds.map(world => world.governor);
	else console.log(data.error);
};
