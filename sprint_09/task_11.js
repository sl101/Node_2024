// itgid.info - курс NODE.JS 2024


// Task 11
// Напишите код на node.js, который запускает приложение калькулятор в операционной системе windows. 
// Обычно расположение калькулятора находится в C:\Windows\System32
// файл называется calc.exe

const { execFile } = require('child_process');

const calcPath = "C:\\Windows\\System32\\calc.exe";

execFile(calcPath, {}, (error, stdout, strerr) => {
	if (error) {
		console.log(error);
	} else {
		console.log(stdout);
	}
});