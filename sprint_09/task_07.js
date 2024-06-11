// itgid.info - курс NODE.JS 2024


// Task 07
// Напишите код, который выводит в консоль 1 если в node.js приложение переданы аргументы и 0 если не переданы.

const arguments = process.argv;
console.log(arguments.length > 2 ? 1 : 0);