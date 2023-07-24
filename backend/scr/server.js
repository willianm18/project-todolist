//responsavel por roda o servidor

const app = require("./app")

require('dotenv').config()

const PORT = process.env.PORT 

app.listen(PORT, () => console.log('servidor rodando na porta ${PORT}')) //porta para executar o express sempre fica no final da aplicacao