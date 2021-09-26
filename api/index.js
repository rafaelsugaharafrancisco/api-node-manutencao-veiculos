const express = require('express')
const config = require('config')
const roteador = require('./rotas/veiculos')

const app = express()
const porta = config.get('api.porta')

app.use(express.json())
app.use('/api/veiculos', roteador)
app.listen(porta, () => console.log(`A API está executando na porta ${porta}`))