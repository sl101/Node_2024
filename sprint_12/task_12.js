// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/employee/read
// и получает ответ - массив всех сотрудников организации. 
// Модуль должен возвратить профессий сотрудников (designation)
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
	let data = await awaitRequest(`${URL}/api/12/employee/read`, options);
	data = JSON.parse(data.body);
	if (data.success) {
		const designationArray = [];
		for (employee of data.result) {
			designationArray.push(employee.designation);
		}
		return designationArray;
	} else console.log(data.error);
};
