// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/employee/read
// и получает ответ - массив сотрудников
// Модуль должен возвращать массив email сотрудников

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

const options = {
	'method': 'GET',
	'headers': {
		'apikey': APIKEY
	}
};

module.exports = async function () {
	const res = await fetch(`${URL}/api/13/employee/read`, options);
	const data = await res.json();
	if (data.success) return data.result.map(employee => employee.email);
};
