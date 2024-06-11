// itgid.info - курс NODE.JS 2024


// Task 02
// Напишите код, который выводит в консоль сумму двух чисел переданных данному файлу из терминала
// node task_02.js 10 10 
// ожидается результат 20
const arguments = process.argv.slice(2);
const summ = Number(arguments[0]) + +arguments[1];
console.log(summ);