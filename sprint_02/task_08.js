// itgid.info - курс Node.js

// Создайте анонимный модуль, который принимает массив чисел и строк и возвращает массив содержащий только числа из исходного. Если строка может быть приведена к числу - то выполните приведение и добавьте в результат. Например:
// исходный [3, '33', '56b'] результат [3, 33]


module.exports = function (arr) {
	//arr.forEach(element => {
	//	element = Number(element);
	//});
	//console.log("🚀 ~ arr:", arr);

	return arr.map(element => !isNaN(Number(element)) && Number(element)).filter(element => element);
};
