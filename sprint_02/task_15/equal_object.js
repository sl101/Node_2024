module.exports = function (obj1, obj2) {
	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);

	if (obj1Keys.length !== obj2Keys.length) return false;

	for (let i = 0; i < obj1Keys.length; i++) {
		if (obj1Keys[i] !== obj2Keys[i]) return false;
	}

	const obj1Values = Object.values(obj1);
	const obj2Values = Object.values(obj2);

	for (let i = 0; i < obj1Values.length; i++) {
		if (obj1Values[i] !== obj2Values[i]) return false;
	}

	return true;
};