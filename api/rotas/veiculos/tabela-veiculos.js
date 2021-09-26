const modelo = require('./modelo-tabela-veiculos')

module.exports = { 
    listar () {
        return modelo.findAll()
    },
    criar (veiculo) {
        return modelo.create(veiculo)
    }
}