// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает количество автомобилей цена которых выше или равна 10000 и меньше (строго) 20000


// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT count(*) AS count FROM cars WHERE cost >= 10000 AND cost < 20000';

module.exports = function () {
	return task_01(query)[0].count;
};

