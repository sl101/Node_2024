// itgid.info - курс Node.js


// Task 09
// Создайте анонимный модуль в данном файле, который принимает аргумент - arr. Модуль должен записать строку в файл t_09.txt массив arr. Файл размещен в d_04. Причем каждый вложенный массив должен идти с новой строки. Разделитель элементов вложенных массивов - пробел. Перенос строки осуществлять через \r\n. Кодировка utf8, ключ w.


const fs = require('fs');

module.exports = function (arr) {
	const filePath = './d_04/t_09.txt';
	const text = arr.map(item => item.join(' ')).join('\r\n');
	fs.writeFileSync(filePath, text, { encoding: 'utf8', flag: 'w' });
}

