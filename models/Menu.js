const {Sequelize, sequelize} = require('../db');

const Menu= sequelize.define("menu",{
    title:Sequelize.STRING
})

module.exports = {Menu};