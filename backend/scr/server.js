//responsavel por roda o servidor

const app = require("./app")

app.listen(3333, () => console.log('servidor rodando na porta 3333')) //porta para executar o express sempre fica no final da aplicacao