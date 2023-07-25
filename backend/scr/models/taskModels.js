const connection = require('./conection') //importa a coneção com bd



const getAll = async() => {
    const [tasks] = await connection.execute('SELECT * FROM todolist') //await função assincrona tem que esperar retornar
    return tasks //[tasks] - pega a primeira possição do array e pode pegar a segunda possição com [task, buffer]
}

const createTask = async(task) => {
    const { title } = task;
    const dateNow = new Date(Date.now()).toLocaleDateString()

    const [createTask] = await connection.execute('INSERT INTO todolist(title,status, datacreate) VALUES (?,?,?)',[title, 'pendente',dateNow])
    return createTask
}

const deleteTask = async(id) => {
    const idtask = id.id;
    console.log(idtask)
    const dateNow = new Date(Date.now()).toLocaleDateString()

    const [deleteTask] = await connection.execute('DELETE FROM todolist WHERE id = ?', [idtask])
    return deleteTask
}

module.exports = { //usado objeto pois será exportado mais que uma query sql
    getAll,
    createTask,
    deleteTask
}