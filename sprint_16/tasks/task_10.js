const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 10
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает массив title процессоров, которые имеют 2 и 6 ядра.

module.exports = async function () {
	let result = await Processors.findAll({
		attributes: ['title'],
		where: { core: [2, 6] }
	});
	return result.map(proc => proc.title);
};