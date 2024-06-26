// itgid.info - курс Node.js


// Task 04
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Файл содержит строку код. Пусть модуль возвращает true, если в коде есть число 7 и false в остальных случаях. Пример вызова в index.js

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
	const filePath = path.join(__dirname, fileName);
	const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
	const datasArray = data.split('');
	return datasArray.includes('7');
}

