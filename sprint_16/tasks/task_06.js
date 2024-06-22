const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 06
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает title процессора стоимостью 6999.

module.exports = async function () {
	const result = await Processors.findOne({
		where: { 'cost': 6999 }
	});
	return result.title;
};