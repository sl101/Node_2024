const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 05
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает массив title всех процессоров.

module.exports = async function () {
	const result = await Processors.findAll();
	return result.map(proc => proc.title);
};