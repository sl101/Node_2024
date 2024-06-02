// itgid.info - курс Node.js


// Task 07
// Создайте анонимный модуль в данном файле, который принимает аргумент - строку. Модуль должен записать строку в файл t_07.dat в папке d_04, причем после каждого символа строки должен быть пробел!!! Кодировка utf8. Флаг файловой системы - w. 

// например строка 'abba' в файле должен быть текст
//a b b a 
// не забываем пробел после последней строки!!!

const fs = require('fs');

module.exports = function (s) {
	const filePath = './d_04/t_07.dat';
	let text = s.split('').join(" ");
	text = text + ' ';
	fs.writeFileSync(filePath, text, { encoding: 'utf8', flag: 'w' });
}

