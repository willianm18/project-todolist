const validaTitle = (request, response, next) =>{
    const {body} = request

    if (body.title === undefined){
        return response.status(400).json({ message:"O variavel title não existe"})
    }
    if (body.title === ""){
        return response.status(400).json({ message:"O titulo não pode ser vazio"})
    } 
    next()
    }

const validaStaus = (request, response, next) =>{
    const {body} = request

    if (body.status === undefined){
        return response.status(400).json({ message:"O variavel status não existe"})
    }
    if (body.status === ""){
        return response.status(400).json({ message:"O status não pode ser vazio"})
    } 
    next()
    }

    module.exports = {
        validaTitle,
        validaStaus
    }