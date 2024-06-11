// itgid.info - курс NODE.JS 2024


// Task 10
// Напишите код, который аргументы переданные в виде
// node task_10.js --port=1500 --hostname=site.ua primer abba
// преобразует в объект вида
// {"port" : "1500", "hostname" : "site.ua"}
// значения не начинающиеся на -- отбрасывает
// порядок свойств в объекте - значения не имеет
// выведите в консоль объект

const arguments = process.argv.
	slice(2)
	.filter(item => item.slice(0, 2) === "--")
	.map(item => item.slice(2))
	.map(item => item.split('='));
const argObj = {};
for (elem of arguments) {
	argObj[elem[0]] = elem[1];
}

console.log(argObj);
