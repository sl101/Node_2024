// itgid.info - курс NODE.JS 2024


// Task 12
// Напишите код на node.js, который запускает приложение монитор ресурсов в операционной системе windows. 
// Обычно расположение калькулятора находится в C:\Windows\System32
// файл называется resmon.exe

const { execFile } = require('child_process');

const resmonPath = 'C:\\Windows\\System32\\resmon.exe';

execFile(resmonPath, {}, (error, stdout, strerr) => {
	if (error) {
		console.log(error);
	} else {
		console.log(stdout);
	}
});