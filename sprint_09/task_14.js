// itgid.info - курс NODE.JS 2024


// Task 14
// Изучите как запустить браузер с заданным URL. Выполните код.

const {execFile} = require('child_process');

execFile('start chrome http://itgid.info',{shell: true}, function(err, stdout, stderr) {
    if (err) console.log(err);
    console.log(stdout);
});
