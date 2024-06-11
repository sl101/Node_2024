// itgid.info - курс NODE.JS 2024


// Task 15
// Изучите как открыть файл в браузере. Выполните код.

const {execFile} = require('child_process');

execFile('start test.html', {shell: true}, function(err, stdout, stderr) {
    if (err) console.log(err);
    console.log(stdout);
});
