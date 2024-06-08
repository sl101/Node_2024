// itgid.info - курс Node.js 2024

// Task 02.
//  Напишите анонимный модуль который с помощью модуля getCSV читает файл ./f_06/v_02.csv, возвращает информацию из файла в виде массива объектов. Пример вызова модуля в index.js.

const getCSV = require('./get_csv');

module.exports = async function () {
	const records = await getCSV('./f_06/v_02.csv', { columns: true });
	return records;
}

