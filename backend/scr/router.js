//é importante organizar os arquivos, com isso foi criado um novo arquivo apenas para rotas

const express = require('express')
const router = express()

router.get('/task', (request, response) => response.status(200).send('O router esta funcionando')) //sempre usa req e res na variavel

module.exports=router // exporta o router
