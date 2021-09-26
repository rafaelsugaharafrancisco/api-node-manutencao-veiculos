class Veiculo {
    constructor({marca, modelo, ano, placa, categoria}) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.placa = placa,
        this.categoria = categoria
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