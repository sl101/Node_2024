// itgid.info - курс NODE.JS 2024


// Task 03
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает массив состоящий из имен (name) сотрудников.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
	const filePath = path.join(__dirname, fileName);
	const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
	const dataObj = JSON.parse(data);
	return dataObj.employees.map(person => person.name);
}

