const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('slashash', 'root', 'abhishek', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports={
    sequelize
}