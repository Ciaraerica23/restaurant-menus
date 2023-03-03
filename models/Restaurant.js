const {Sequelize, sequelize} = require('../db');

const Restaurant = sequelize.define("restaurant",{
    name:Sequelize.STRING,
    location:Sequelize.STRING,
    cuisine:Sequelize.STRING

})

module.exports = {Restaurant};