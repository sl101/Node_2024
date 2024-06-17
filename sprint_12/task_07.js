// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/gow/random-world
// и получает ответ - случайное имя мира из игры God of War
// Модуль должен возвращать имя мира.
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
	let data = await awaitRequest(`${URL}/api/12/gow/random-world`, options);
	data = JSON.parse(data.body);
	if (data.success) return data.world;
	else console.log(data.error);
};
