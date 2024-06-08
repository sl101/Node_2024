// itgid.info - курс Node.js 2024

// Task 03.
//  Напишите анонимный модуль который с помощью модуля getCSV читает файл ./f_06/v_03.csv, возвращает информацию из файла в виде массива объектов. Пример вызова модуля в index.js.

const getCSV = require('./get_csv');
const params = {
	delimiter: ';',
	columns: true,
	encoding: 'utf8',
};

module.exports = async function () {
	const records = await getCSV('./f_06/v_03.csv', params);
	return records;
}

