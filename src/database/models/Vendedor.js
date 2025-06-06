module.exports = (sequelize, dataTypes) => {

    let alias = 'Vendedor';

    let cols = {
        id_vendedor: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
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
        tableName: 'vendedores',
        timestamps: true,
        paranoid: true
    };

    const Vendedor = sequelize.define(alias, cols, config)

    Vendedor.associate = function(models) {

        Vendedor.hasMany(models.Cliente_empresa,{
            foreignKey: 'Vendedor_id',
            as: 'vendedores_cliente_empresa'
        }),

        Vendedor.hasMany(models.Cliente_persona,{
            foreignKey: 'Vendedor_id',
            as: 'vendedores_cliente_persona'
        })
    }   

    return Vendedor;
}