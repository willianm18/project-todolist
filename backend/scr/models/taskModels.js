const connection = require('./conection') //importa a coneção com bd

const getAll = async() => {
    const tasks = await connection.execute('SELECT * FORN todolist') //await função assincrona tem que esperar retornar
    return tasks
}

module.exports = { //usado objeto pois será exportado mais que uma query sql
    getAll 
}