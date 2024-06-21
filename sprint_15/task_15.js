// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает объект вида производитель(make) : количество машин в продаже.


// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT make, count(*) AS count FROM cars GROUP BY make';

module.exports = function () {
	const cars = task_01(query);
	const makeObj = {};
	for (let car of cars) {
		makeObj[car.make] = car.count;
	}
	return makeObj;
};
