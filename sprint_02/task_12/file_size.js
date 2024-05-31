module.exports = function (n) {
	const num = Math.ceil(n);
	if (num < 0) {
		return false;
	} else if (num === 0) {
		return 0;
	} else if (num > 0 && num < 999) {
		return "b";
	} else if (num >= 1000 && num <= 999999) {
		return "kb";
	} else if (num >= 1000000) {
		return "mb";
	}
};