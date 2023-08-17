module.exports = (sequelize, dataTypes) => {

    let alias = 'Metodo_pago';

    let cols = {
        id_metodo_pago: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_metodo_pago: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: 'metodos_pago',
        timestamps: true,
        paranoid: true
    };

    const Metodo_pago = sequelize.define(alias, cols, config)

    Metodo_pago.associate = function(models) {

        Metodo_pago.hasMany(models.Cliente_empresa,{
            foreignKey: 'metodo_pago_id',
            as: 'metodos_pagos_cliente_empresa'
        }),

        Metodo_pago.hasMany(models.Cliente_persona,{
            foreignKey: 'metodo_pago_id',
            as: 'metodos_pagos_cliente_persona'
        })
    }   

    return Metodo_pago;
}