// itgid.info - курс NODE.JS 2024


// Task 09
// Напишите код, который аргументы переданные в виде
// node task_09.js port 1500 hostname site.ua
// преобразует в объект вида
// {"port" : "1500", "hostname" : "site.ua"}
// порядок свойств в объекте - значения не имеет
// выведите в консоль объект

const arguments = process.argv.slice(2);
const argObj = {};
for (let i = 0; i < arguments.length; i += 2) {
	argObj[arguments[i]] = arguments[i + 1];
}

console.log(argObj);