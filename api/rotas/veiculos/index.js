const roteador = require('express').Router()
const tabelaVeiculo = require('./tabela-veiculos')
const Veiculo = require('./Veiculo')

roteador.get('/', async (req, res) => {
    const resultado = await tabelaVeiculo.listar()
    res.send(JSON.stringify(resultado))
})

roteador.post('/', async (req, res) => {
    const veiculo = new Veiculo(req.body)
    const resultado = await tabelaVeiculo.criar(veiculo.requisicao())
    res.send(JSON.stringify(veiculo.resposta(resultado)))
})

module.exports = roteador