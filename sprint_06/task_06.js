// itgid.info - курс Node.js 2024

// Task 06.
// Создайте анонимный модуль, который помощью модуля getCSV читает файл ./f_06/v_06.csv, и возвращает информацию из файла в виде массива объектов. Обратите внимание - файл содержит пустые строки. В результирующем массиве пустых элементов быть не должно. Файл csv править - запрещено. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');
const params = {
	delimiter: ',',
	columns: true,
	skip_empty_lines: true,
	encoding: 'utf8',
};

module.exports = async function () {
	const records = await getCSV('./f_06/v_06.csv', params);
	return records;
};
