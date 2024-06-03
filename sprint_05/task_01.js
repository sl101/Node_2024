// itgid.info - курс NODE.JS 2024


// Task 01
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает объект из данного файла. Не забывайте выполнять валидацию JSON файлов!

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
	const filePath = path.join(__dirname, fileName);
	const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
	return JSON.parse(data);
}

