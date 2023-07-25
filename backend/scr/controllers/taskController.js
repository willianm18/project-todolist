const taskModel = require('../models/taskModels')

const getAll = async (request, response) => {

    const tasks = await taskModel.getAll()
    return response.status(200).json(tasks)
    
}

const createTask = async (request, response) => {

    const createTask = await taskModel.createTask(request.body)
    return response.status(201).json(createTask)
    
}

const deleteTask = async (request, response) => {

    const deleteTask = await taskModel.deleteTask(request.body)
    return response.status(201).json(deleteTask)
    
}

module.exports = {
    getAll,
    createTask,
    deleteTask
}