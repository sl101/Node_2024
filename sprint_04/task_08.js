// itgid.info - курс Node.js


// Task 08
// Создайте анонимный модуль в данном файле, который принимает аргумент - массив строк и записывает их в файл t_08.txt в папке d_04. Каждый элемент - с новой строки. Перенос строки осуществлять через \r\n. Кодировка utf8, ключ w.


const fs = require('fs');
const path = require('path');

module.exports = function (arr) {
	const filePath = './d_04/t_08.txt';
	const text = arr.join("\r\n");
	fs.writeFileSync(filePath, text, { encoding: 'utf8', flag: 'w' });
}

