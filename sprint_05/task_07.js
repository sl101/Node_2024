// itgid.info - курс NODE.JS 2024


// Task 07
// Создайте анонимный модуль в данном файле, который при запуске делает копию файла 01.json в папке f_05 под именем 07.json.
// Внимание!!! Во всех задачах где создаются файлы json, подразумевается utf8, флаг - w. 

const fs = require('fs');

module.exports = function () {
	const filePath = 'f_05/01.json';
	if (fs.existsSync(filePath)) {
		const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
		fs.writeFileSync('f_05/07.json', data, { encoding: 'utf8', flag: 'w' });
	} else {
		console.log("Error: file ./f_05/01.json is not exist");
	}
}

