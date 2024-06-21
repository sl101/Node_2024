// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает модель самого низкого по цене автомобиля в базе данных

// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT model, cost FROM cars ORDER BY cost ASC LIMIT 1';

module.exports = function () {
	return task_01(query)[0].model;
};

