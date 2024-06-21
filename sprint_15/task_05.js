// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает объект, где ключ - цвет автомобиля, а значение - количество автомобилей в базе с таким цветом.

// постарайтесь уникальность выборки реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT color, COUNT(*) AS count FROM cars GROUP BY color';

module.exports = function () {
	const cars = task_01(query);
	const colorObj = {};
	for (let car of cars) {
		colorObj[car.color] = car.count;
	}
	return colorObj;
};