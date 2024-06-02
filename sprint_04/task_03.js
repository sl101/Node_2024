// itgid.info - курс Node.js


// Task 03
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Возвращает массив слов из первой строки файла. Разбиение производить по символу пробел. Пример вызова в index.js

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
	const filePath = path.join(__dirname, fileName);
	const data = fs.readFileSync(filePath, { encoding: 'utf-8', flag: 'r' });
	const firstLine = data.trim().split('\r\n')[0];
	return firstLine.split(' ');
}

