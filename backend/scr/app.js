const express = require('express') //Chama o express, inicia o express
const router = require('./router') // importa o router

const app = express() // varial app normalmente usada para o servidor express

app.use(router) // toda requisição usa o router

module.exports = app //exporta a variavel app