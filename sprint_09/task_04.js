// itgid.info - курс NODE.JS 2024


// Task 04
// Напишите код, который выводит в консоль большее из чисел переданных как аргументы. Количество переданных чисел - любое
// node task_04.js 10 33 -4 23 11 99 23 77 
// ожидается результат 99
// node task_04.js -2 -1 -3
// ожидается результат -1

const arguments = process.argv.slice(2).map(Number);
const maxValue = Math.max(...arguments);
console.log(maxValue);