// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает объект вида название файла - размер.

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {
	const folderPath = path.join(__dirname, folderName);
	const folderFilesArray = fs.readdirSync(folderPath);
	const folder = {};

	folderFilesArray.forEach(element => {
		const filePath = path.join(folderPath, element);

		const fileSize = fs.statSync(filePath).size;
		folder[element] = fileSize;
	});

	return folder;
}

