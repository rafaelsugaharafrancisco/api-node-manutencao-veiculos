const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    marca:{
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ano:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    categoria:{
        type: Sequelize.ENUM('moto', 'caminhão')
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'veiculos', 
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('veiculos', colunas, opcoes)