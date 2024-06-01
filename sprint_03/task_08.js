// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает количество файлов в ней. Для простоты считаем что в папке могут лежать только файлы (других папок нет).

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {
	const folderPath = path.join(__dirname, folderName);
	return fs.readdirSync(folderPath).length;
}

