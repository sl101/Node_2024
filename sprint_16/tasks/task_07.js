const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 07
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает массив кешей процессоров с сокетом AM4

module.exports = async function () {
	const result = await Processors.findAll({
		where: { 'socket': 'AM4' },
		attributes: ['cache']
	});
	return result.map(proc => proc.cache);
};