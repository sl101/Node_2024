// itgid.info - курс Node.js 2024

// Task 08.
// Создайте анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_08.csv, выводит в консоль и возвращает массив объектов - записей файла. В результирующем массиве не должно быть объектов с пустым емейл. Файл csv править - запрещено. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');
const params = {
	delimiter: ',',
	encoding: 'utf8',
	columns: true,
	relax_column_count: true
};

module.exports = async function () {
	const records = await getCSV('./f_06/v_08.csv', params);
	return records.filter(item => Object.values(item)[2]);
};