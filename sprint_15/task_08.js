// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив вида: 
// ['fusion',  2016]

// т.е. модель и год первого автомобиля в таблице
// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const task_01 = require('./task_01');
const query = 'SELECT model, year FROM cars LIMIT 1';

module.exports = function () {
	return Object.values(task_01(query)[0]);
};

