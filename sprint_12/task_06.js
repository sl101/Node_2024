// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/get-time
// и получает ответ - текущее время сервера
// Модуль должен возвращать время в формате часы:минуты
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';
const options = {
	'method': 'POST',
	'headers': {
		'apikey': APIKEY
	}
};

module.exports = async function () {

	let data = await awaitRequest(`${URL}/api/12/get-time`, options);
	data = JSON.parse(data.body);
	if (data.success) return `${data.time.h}:${data.time.m}`;

};
