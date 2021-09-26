const modeloTabela = require('../rotas/veiculos/modelo-tabela-veiculos')

modeloTabela.sync().then(() => console.log('tabela criada com sucesso')).catch(console.log)