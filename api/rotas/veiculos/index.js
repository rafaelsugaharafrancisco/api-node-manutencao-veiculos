const roteador = require('express').Router()
const Veiculo = require('./Veiculo')

roteador.get('/', async (req, res) => {
    const veiculo = new Veiculo({})
    const veiculos = await veiculo.lista()
    res.send(JSON.stringify(veiculos))
})

roteador.post('/', async (req, res) => {
    const veiculo = new Veiculo(req.body)
    await veiculo.criar()
    res.send(JSON.stringify(veiculo))
})

roteador.get('/:id', async (req, res) => {
    try {
        const veiculo = new Veiculo({id: req.params.id})
        await veiculo.pesquisaPorId()
        res.send(JSON.stringify(veiculo))
    } catch(e) {
        res.send(JSON.stringify({mensagem: e.message}))
    }
})

roteador.put('/:id', async (req, res) => {
    try {
        const dadosRequisicao = Object.assign({}, req.body, {id: req.params.id})
        const veiculo = new Veiculo(dadosRequisicao)
        await veiculo.atualiza()
        res.send(JSON.stringify(dadosRequisicao))
//        res.end()
    } catch (e) {
        res.send(JSON.stringify({mensagem: e.message}))
    }
})

roteador.delete('/:id', async (req, res) => {
    try {
        const veiculo = new Veiculo({ id: req.params.id })
        await veiculo.remove()
        res.end()
    } catch (e) {
        res.send(JSON.stringify({ mensagem: e.message }))
    }
})

module.exports = roteador