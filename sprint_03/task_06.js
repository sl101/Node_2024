// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя файла и возвращает его размер. Если файла нет - возвращает 0.

const path = require('path');
const fs = require('fs');

module.exports = function (fileName) {
	const filePath = path.join(__dirname, fileName);
	return fs.existsSync(filePath) ? fs.statSync(filePath).size : 0;
}

