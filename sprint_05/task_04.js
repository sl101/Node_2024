// itgid.info - курс NODE.JS 2024


// Task 04
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает сумму значений ключа AMOUNT.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
	const filePath = path.join(fileName);
	const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
	const dataObj = JSON.parse(data);
	return dataObj.EXPENSE.reduce((acc, element) => acc += element.AMOUNT, 0);
}

