// itgid.info - курс NODE.JS 2024


// Task 05
// Создайте анонимный модуль в данном файле, который принимает аргумент - путь к файлу JSON, и возвращает сумму его элементов.

const fs = require('fs');

module.exports = function (fileName) {
	const data = fs.readFileSync(fileName, { encoding: 'utf8' });
	const dataObj = JSON.parse(data);

	return dataObj.reduce((acc, num) => acc += num, 0);
}

