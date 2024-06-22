// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив моделей автомобилей 2015 и 2017 года выпуска


// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT model FROM cars WHERE year = 2015 OR year = 2017';

module.exports = function () {
	return task_01(query).map(car => car.model);
};
