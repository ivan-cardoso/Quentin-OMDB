const Sequelize = require("sequelize");

const db = new Sequelize('omdb', null, null, {
  host : "localhost",
  dialect : "postgres"
})

module.exports = db;