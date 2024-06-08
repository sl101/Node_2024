// itgid.info - курс Node.js 2024

// Task 07.
// Создайте анонимный модуль, который помощью модуля getCSV читает файл ./f_06/v_07.csv, и возвращает сумму всех чисел файла. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');
const params = {
	delimiter: ';',
	encoding: 'utf8'
};

module.exports = async function () {
	const records = await getCSV('./f_06/v_07.csv', params);
	const numArr = records.flat().filter(item => Number(item));
	return numArr.reduce((acc, item) => {
		acc += +item;
		return acc;
	}, 0);
};
