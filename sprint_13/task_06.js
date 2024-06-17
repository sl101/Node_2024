// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/sr/read
// и получает ответ - описание рас игры космические рейнджеры
// Модуль должен возвращать массив title рас

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

const options = {
	'method': 'POST',
	'headers': {
		'apikey': APIKEY
	}
};

module.exports = async function (email) {
	const res = await fetch(`${URL}/api/13/sr/read`, options);
	const data = await res.json();
	if (data.success) return data.result.map(race => race.title);
	else console.log(data.error);
};
