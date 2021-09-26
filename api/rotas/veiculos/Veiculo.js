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