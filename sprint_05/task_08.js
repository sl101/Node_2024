// itgid.info - курс NODE.JS 2024


// Task 08
// Создайте анонимный модуль в данном файле, который при запуске делает читает файл ./f_05/01.json и записывает из него данные в файл ./f_05/08.json без ключа "os".

const fs = require('fs');

module.exports = function () {
	const filePath = "./f_05/01.json";
	if (fs.existsSync(filePath)) {

		const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
		const dataObj = JSON.parse(data);

		const newObj = {};
		for (let key in dataObj) {
			if (key !== 'os') {
				newObj[key] = dataObj[key];
			}
		}

		fs.writeFileSync('./f_05/08.json', JSON.stringify(newObj), { encoding: 'utf8', flag: 'w' });

	} else {
		console.log("Error: file ./f_05/01.json is not exist");
	}
}

