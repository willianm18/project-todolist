const mysql = require('mysql2/promise') // promise para pegar a versao mais atualizada do sql

const connection = mysql.createPool({ //responsavel pelas informações do banco de dados
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

module.exports = connection