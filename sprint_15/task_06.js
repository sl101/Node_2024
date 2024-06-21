// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает максимальную цену на автомобиль в таблице

// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT MAX(cost) AS max_price FROM cars ';

module.exports = function () {
	return task_01(query)[0].max_price;
};