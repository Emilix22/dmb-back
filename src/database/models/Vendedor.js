module.exports = (sequelize, dataTypes) => {

    let alias = 'Vendedor';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_vendedor: {
            type: dataTypes.STRING
        },
        apellido_vendedor: {
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
        Vendedor.hasMany(models.Cliente,{
            foreignKey: 'Vendedor_id',
            as: 'vendedor'
        })
    }   

    return Vendedor;
}