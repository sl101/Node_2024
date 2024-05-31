// itgid.info - курс Node.js

// Создайте анонимный модуль, который принимает строку и возвращает строку 'image', если исходная строка равна или 'gif', или 'png', или 'jpeg', или 'jpeg'. И false в противном случае. 
const imagesArray = ['gif', 'png', 'jpeg', 'jpg'];

module.exports = function (s) {
	return imagesArray.includes(s) && "image";
};
