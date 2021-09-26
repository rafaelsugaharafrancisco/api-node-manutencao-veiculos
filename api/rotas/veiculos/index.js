const roteador = require('express').Router()
const tabelaVeiculo = require('./tabela-veiculos')

roteador.use('/', async (req, res) => {
    const resultado = await tabelaVeiculo.listar()
    res.send(JSON.stringify(resultado))
})

module.exports = roteador