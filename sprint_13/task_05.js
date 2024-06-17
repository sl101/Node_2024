// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/employee/email?email=liliane_hirt@gmail.com
// где liliane_hirt@gmail.com берется из аргумента email модуля
// и получает ответ - описание сотрудника
// Модуль должен возвращать name

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

const options = {
	'method': 'GET',
	'headers': {
		'apikey': APIKEY
	}
};

module.exports = async function (email) {
	const res = await fetch(`${URL}/api/13/employee/email?email=${email}`, options);
	const data = await res.json();
	if (data.success) return data.result.name;
	else console.log(data.error);
};
