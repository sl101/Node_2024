// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя файла и возвращает его расширение. Допускается наличие точки перед расширением.

const path = require('path');
const fs = require('fs');

module.exports = function (fileName) {
	const filePath = path.join(__dirname, fileName);
	return path.extname(filePath);
}

