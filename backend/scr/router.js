//é importante organizar os arquivos, com isso foi criado um novo arquivo apenas para rotas

const express = require('express')

const taskController = require('./controllers/taskController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')
const router = express()


router.get('/tasks', taskController.getAll)

router.post('/tasks', tasksMiddleware.validaTitle, taskController.createTask)

router.delete('/tasks/:id', taskController.deleteTask)

router.put('/tasks/:id', tasksMiddleware.validaTitle, tasksMiddleware.validaStaus, taskController.updateTask)

module.exports = router // exporta o router
