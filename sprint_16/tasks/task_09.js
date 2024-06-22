const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 09
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает название процессора на socket AM4 и cache 32.

module.exports = async function () {
	let result = await Processors.findOne({
		attributes: ['title'],
		where: { cache: 32, socket: 'AM4' }
	});
	return result.title;
};