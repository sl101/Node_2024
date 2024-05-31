// itgid.info - курс Node.js

// Создайте анонимный модуль который принимает строку и возвращает случайный символ из данной строки. Весь код реализуйте внутри функции модуля.

module.exports = function (str) {
	return str.at(Math.floor(Math.random() * str.length));
};