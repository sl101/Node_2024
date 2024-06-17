// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL -/api/12/random/random-string
// и получает ответ - cлучайную строку длиной 32 символа
// Модуль должен возвращать строку
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';
const options = {
	'method': 'GET',
	'headers': {
		'apikey': APIKEY
	}
};

module.exports = async function () {
	let data = await awaitRequest(`${URL}/api/12/random/random-string`, options);
	data = JSON.parse(data.body);
	if (data.success) return data['random-string'];
	else console.log(data.error);
};
