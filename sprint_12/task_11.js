// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/gow/rune
// и получает ответ - описание всех рун из игры God of War
// Модуль должен возвратить массив!!!! только ссылок на изображения рун. 
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function () {
	const options = {
		'method': 'POST',
		'headers': {
			'apikey': APIKEY
		}
	};
	let data = await awaitRequest(`${URL}/api/12/gow/rune`, options);
	data = JSON.parse(data.body);
	if (data.success) return Object.values(data.rune);
	else console.log(data.error);
};
