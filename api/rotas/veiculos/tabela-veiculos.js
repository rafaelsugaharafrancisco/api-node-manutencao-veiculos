const modelo = require('./modelo-tabela-veiculos')

module.exports = { 
    listar () {
        return modelo.findAll()
    },
    inserir (veiculo) {
        return modelo.create(veiculo)
    },
    async pesquisarPorId(id) {
        const encontrado = await modelo.findOne({
            where: { id: id }
        })

        if (!encontrado) {
            throw new Error(`Veículo com id ${id} não encontrado!`)
        }

        return encontrado
    },
    async atualizar(id, veiculo) {
        const resultado = await modelo.update(veiculo,{where:{id: id}})

        if (resultado[0] === 0) {
            throw new Error(`Não atualizado. Pois não existe id ${id}`)
        }
    },
    remover(id) {
        modelo.destroy({ where: {id: id} })
    }
}