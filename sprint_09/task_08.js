// itgid.info - курс NODE.JS 2024


// Task 08
// Напишите код, который аргументы переданные в виде
// node task_08.js port=1500 hostname=site.ua
// преобразует в объект вида
// {"port" : "1500", "hostname" : "site.ua"}
// порядок свойств в объекте - значения не имеет
// выведите в консоль объект

const arguments = process.argv.slice(2);
const argObj = {};
for (const element of arguments) {
	const elementArgs = element.split('=');
	argObj[elementArgs[0]] = elementArgs[1];
}

console.log(argObj);