// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/random/random-number
// в body запроса передайте аргумент min равной переменной x аргумента запроса, и max равную значению y из аргумента запроса.
// и получает ответ - случайное число в диапазоне от x до y
// Модуль должен возвращать случайное число

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (x, y) {
	const options = {
		'method': 'POST',
		'body': JSON.stringify({
			'min': x,
			'max': y
		}),
		'headers': {
			'apikey': APIKEY
		}
	};

	const res = await fetch(`${URL}/api/13/random/random-number`, options);
	const data = await res.json();
	if (data.success) return data['random-number'];
	else console.log(data.error);
};
