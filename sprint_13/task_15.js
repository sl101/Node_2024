// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/test

// и получает ответ c данными
// Модуль должен возвращать значение под ключем site.

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

	const res = await fetch(`${URL}/api/test`, options);
	const data = await res.json();
	return data.site;
};
