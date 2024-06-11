// itgid.info - курс NODE.JS 2024


// Task 13
// Напишите код на node.js, который запускает приложение google chrome в операционной системе windows. 
// Обычно расположение chrome: 
// "C:\Program Files\Google\Chrome\Application\chrome.exe"

const { execFile } = require('child_process');

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

execFile(chromePath, {}, () => { });