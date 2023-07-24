
const getAll = (request, response) => {
    return response.status(200).json({message:'controller esta funcionando'})
}

module.exports = {
    getAll
}