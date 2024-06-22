const Sequelize = require("sequelize");

const sequelize = new Sequelize("comp", "root", "admin", {
	dialect: "mysql",
	//host: "127.0.0.1",
	host: "localhost",
	port: 3306,
	logging: false
});

const Processors = require('./Processors')(sequelize);

module.exports = {
	sequelize: sequelize,
	processors: Processors
};