// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/12/random/random-number
// и получает ответ - случайное число от 0 до 100
// Модуль должен возвращать случайное число.

// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';
const options = {
	'method': 'GET',
	'data': {
		'min': 0,
		'max': 100
	},
	'headers': {
		'apikey': APIKEY
	},
};

module.exports = async function () {
	let data = await awaitRequest(`${URL}/api/12/random/random-number`, options);
	data = JSON.parse(data.body);
	if (data.success) return data['random-number'];
};;
