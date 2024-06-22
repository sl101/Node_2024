const Sequelize = require("sequelize");


module.exports = function (sequelize) {
	return sequelize.define('Processors', {
		id: {
			type: Sequelize.SMALLINT.UNSIGNED,
			primaryKey: true
		},
		title: {
			type: Sequelize.STRING(300),
		},
		family: {
			type: Sequelize.STRING(300),
		},
		socket: {
			type: Sequelize.STRING(50),
		},
		core: {
			type: Sequelize.SMALLINT.UNSIGNED,
		},
		video: {
			type: Sequelize.STRING(50),
		},
		cache: {
			type: Sequelize.SMALLINT.UNSIGNED,
		},
		cost: {
			type: Sequelize.FLOAT.UNSIGNED,
		},
	},
		{
			timestamps: false,
			tableName: 'processors'
		});
};
