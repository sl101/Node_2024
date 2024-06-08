// itgid.info - курс Node.js 2024

// Task 05.
// Напишите анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_05.csv, и возвращает массив заголовков csv файла. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');
const params = {
	delimiter: "=",
	encoding: 'utf8',
};

module.exports = async function () {
	const records = await getCSV('/f_06/v_05.csv', params);
	return records[0];
};
