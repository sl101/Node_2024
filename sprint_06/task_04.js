// itgid.info - курс Node.js 2024

// Task 04.
// Напишите анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_04.csv, возвращает информацию из файла в виде одномерного массива цветов. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');
const params = {
	delimiter: ';',
	from_line: 2,
	encoding: 'utf8',
};

module.exports = async function () {
	const records = await getCSV('./f_06/v_04.csv', params);
	return records[0];
}

