// itgid.info - курс NODE.JS 2024


// Task 01
// Напишите код, который выводит в консоль произведение двух чисел переданных данному файлу из терминала
// node task_01.js 10 10 
// ожидается результат 100
const arguments = process.argv.slice(2);
const mult = arguments[0] * arguments[1];
console.log(mult)

