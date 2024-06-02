// itgid.info - курс Node.js


// Task 02
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Возвращает сумму чисел из файла. Пример вызова в index.js. Для простоты считаем что в файле будут только числа.

const fs = require('fs');

module.exports = function (fileName) {
	const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
	let dataArray = data.split('\r\n');
	dataArray = dataArray.filter(item => item !== '').map(item => Number(item));
	return dataArray.reduce((acc, num) => acc + num);
}

