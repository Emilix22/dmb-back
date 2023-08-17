module.exports = (sequelize, dataTypes) => {

    let alias = 'Cliente_empresa';

    let cols = {
        id_cliente_empresa: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_empresa: {
            type: dataTypes.STRING
        },
        cuit: {
            type: dataTypes.STRING
        },
        nombre_contacto: {
            type: dataTypes.STRING
        },
        dni_contacto: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        celular: {
            type: dataTypes.STRING
        },
        telefono_fijo: {
            type: dataTypes.STRING
        },
        calle: {
            type: dataTypes.STRING
        },
        altura: {
            type: dataTypes.STRING
        },
        piso: {
            type: dataTypes.STRING
        },
        departamento: {
            type: dataTypes.STRING
        },
        cp: {
            type: dataTypes.STRING
        },
        localidad: {
            type: dataTypes.STRING
        },
        provincia: {
            type: dataTypes.STRING
        },
        metodo_pago_id: {
            type: dataTypes.INTEGER
        },
        vendedor_id: {
            type: dataTypes.INTEGER
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
        tableName: 'clientes_empresas',
        timestamps: true,
        paranoid: true
    };

    const Cliente_empresa = sequelize.define(alias, cols, config)

    Cliente_empresa.associate = function(models) {
        Cliente_empresa.belongsTo(models.Vendedor,{
            foreignKey: 'vendedor_id',
            as: 'vendedores_cliente_empresa'
        }),

        Cliente_empresa.belongsTo(models.Metodo_pago,{
            foreignKey: 'metodo_pago_id',
            as: 'metodos_pagos_cliente_empresa'
        })

        Cliente_empresa.hasMany(models.Siniestro_auto,{
            foreignKey: 'cliente_empresa_id',
            as: 'clientes_empresas'
        })
    }

    return Cliente_empresa;
}