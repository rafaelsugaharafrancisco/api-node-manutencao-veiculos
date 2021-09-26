const modelo = require('./modelo-tabela-veiculos')

module.exports = { 
    listar () {
        return modelo.findAll()
    },
    inserir (veiculo) {
        return modelo.create(veiculo)
    }
}