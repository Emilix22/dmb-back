module.exports = (sequelize, dataTypes) => {

    let alias = 'Tarjeta_credito';

    let cols = {
        id_tarjeta_credito: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_tarjeta: {
            type: dataTypes.STRING
        },
        codigo_seguridad: {
            type: dataTypes.STRING
        },
        banco: {
            type: dataTypes.STRING
        },
        marca: {
            type: dataTypes.STRING
        },
        cliente_persona_id: {
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
        tableName: 'tarjetas_credito',
        timestamps: true,
        paranoid: true
    };

    const Tarjeta_credito = sequelize.define(alias, cols, config)

    Tarjeta_credito.associate = function(models) {

        Tarjeta_credito.belongsTo(models.Cliente_persona,{
                foreignKey: 'cliente_persona_id',
                as: 'clientes_personas_tarjeta_credito'
            })
    }   

    return Tarjeta_credito;
}