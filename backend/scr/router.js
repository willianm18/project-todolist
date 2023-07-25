//é importante organizar os arquivos, com isso foi criado um novo arquivo apenas para rotas

const express = require('express')

const taskController = require('./controllers/taskController')

const router = express()


router.get('/tasks', taskController.getAll)

router.post('/tasks', taskController.createTask)

router.post('/tasks/delete', taskController.deleteTask)

module.exports=router // exporta o router
