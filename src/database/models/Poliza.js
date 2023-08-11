module.exports = (sequelize, dataTypes) => {
    let alias = 'Poliza';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_poliza: {
            type: dataTypes.STRING
        },
        cliente_id: {
            type: dataTypes.INTEGER
        },
        tipo_id: {
            type: dataTypes.INTEGER
        },
        auto_id: {
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
        tableName: 'polizas',
        timestamps: true,
        paranoid: true
    };

    const Poliza = sequelize.define(alias, cols, config)

    Poliza.associate = function(models) {

        Poliza.belongsTo(models.Cliente,{
            foreignKey: 'cliente_id',
            as: 'clientes'
        }),

        Poliza.belongsTo(models.Auto,{
            foreignKey: 'auto_id',
            as: 'autos'
        })
    }   

    return Poliza;
}