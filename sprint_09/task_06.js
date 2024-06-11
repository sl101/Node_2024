// itgid.info - курс NODE.JS 2024


// Task 06
// Напишите код, который выводит в консоль большую строку (по длине) из тех, что переданы в приложение node.js как аргументы. Количество строк - любое.
// node task_06.js abra jj bitrin
// ожидается результат bitrin

const arguments = process.argv.slice(2);
let longerString = arguments[0];
for (const element of arguments) {
	if (longerString.length < element.length) longerString = element;
}
console.log(longerString);