module.exports = (sequelize, dataTypes) => {
    let alias = 'Poliza';

    let cols = {
        id_poliza: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_poliza: {
            type: dataTypes.STRING
        },
        vigencia_desde: {
            type: dataTypes.DATE
        },
        vigencia_hasta: {
            type: dataTypes.DATE
        },
        tipo_poliza_id: {
            type: dataTypes.INTEGER
        },
        cliente_persona_id: {
            type: dataTypes.INTEGER
        },
        auto_id: {
            type: dataTypes.INTEGER
        },
        hogar_id: {
            type: dataTypes.INTEGER
        },
        aseguradora_id: {
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

        Poliza.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes'
        }),

        Poliza.belongsTo(models.Auto,{
            foreignKey: 'auto_id',
            as: 'autos'
        })
    }   

    return Poliza;
}