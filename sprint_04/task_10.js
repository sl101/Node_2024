// itgid.info - курс Node.js


// Task 10
// Создайте анонимный модуль в данном файле, который принимает аргументы - исходный файл и конечный. Модуль должен получить содержимое исходного файла (текст) и записывать в конечный файл. Кодировки utf8, флаг w.


const fs = require('fs');

module.exports = function (fileFrom, fileTo) {
	const data = fs.readFileSync(fileFrom, { encoding: 'utf8', flag: 'r' });
	fs.writeFileSync(fileTo, data, { encoding: 'utf8', flag: 'w' });
}

