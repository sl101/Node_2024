// itgid.info - курс NODE.JS 2024


// Task 10
// Создайте анонимный модуль в данном файле, который получает массив, выбирает из него числа и записывает эти числа в виде массива в JSON файл:
// ./f_05/10.json.

const fs = require('fs');

module.exports = function (arr) {
	const filePath = './f_05/10.json';
	const numArr = arr.filter(num => (typeof num) === 'number');
	fs.writeFileSync(filePath, JSON.stringify(numArr), { encoding: 'utf8', flag: 'w' });
}

