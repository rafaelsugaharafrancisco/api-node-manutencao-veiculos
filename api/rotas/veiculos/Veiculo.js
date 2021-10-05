const tabelaVeiculo = require('./tabela-veiculos')

class Veiculo {
    constructor({id, marca, modelo, ano, placa, categoria, dataCriacao, dataAtualizacao, versao}) {
        this.id = id,
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.placa = placa,
        this.categoria = categoria,
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao,
        this.versao = versao
    }

    async criar() {
        const resultado = await tabelaVeiculo.inserir({
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
            placa: this.placa,
            categoria: this.categoria
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async pesquisaPorId() {
        const encontrado = await tabelaVeiculo.pesquisarPorId(this.id)

        this.marca = encontrado.marca
        this.modelo = encontrado.modelo
        this.ano = encontrado.ano
        this.placa = encontrado.placa
        this.categoria = encontrado.categoria
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao
    }

    async atualiza() {
 //       await tabelaVeiculo.pesquisarPorId(this.id)
        await tabelaVeiculo.atualizar(this.id, {
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
            placa: this.placa,
            categoria: this.categoria
        })
    }

    requisicao() {
        const veiculo = {
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
            placa: this.placa,
            categoria: this.categoria
        }

        return veiculo
    }

    resposta(resultado) {
        const veiculo = {
            id: resultado.id,
            marca: resultado.marca,
            modelo: resultado.modelo,
            ano: resultado.ano,
            placa: resultado.placa,
            categoria: resultado.categoria
        }

        return veiculo
    }
}

module.exports = Veiculo