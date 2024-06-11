// itgid.info - курс NODE.JS 2024


// Task 03
// Напишите код, который выводит в консоль большее из двух чисел переданных как аргументы. При равенстве - выводит первое.
// node task_03.js 10 33 
// ожидается результат 33

const arguments = process.argv.slice(2);
const maxValue = Math.max(Number(arguments[0]), Number(arguments[1]));
console.log(maxValue);