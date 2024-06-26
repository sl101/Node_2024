// itgid.info - курс Node.js

// Создайте модуль password который принимает строку и проверяет, что ее длина больше 8 символов и символы, которые применяются в строке - уникальные в рамках строки. Возвращает true если все условия выполняются и false, если нет. Модуль должен предварительно удалить пробелы по краям строки.

module.exports.password = function (str) {
	const strLenth = str.trim().length;

	if (strLenth <= 8) return false;

	const strSet = new Set(str.trim());
	const setLength = strSet.size;

	return strLenth === setLength;
};