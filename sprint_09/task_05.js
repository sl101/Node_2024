// itgid.info - курс NODE.JS 2024


// Task 05
// Напишите код, который выводит в консоль большую строку из тех, что переданы в приложение node.js как аргументы. Количество строк - любое.
// node task_05.js abra jj bitrin
// ожидается результат jj

const arguments = process.argv.slice(2);
let biggerString = arguments[0];
for (const element of arguments) {
	if (biggerString < element) biggerString = element;
}
console.log(biggerString);
