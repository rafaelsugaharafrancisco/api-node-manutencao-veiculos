const roteador = require('express').Router()
const tabelaFornecedor = require('./tabela-veiculos')

roteador.use('/', async (req, res) => {
    const resultado = await tabelaFornecedor.listar()
    res.send(JSON.stringify(resultado))
})

module.exports = roteador