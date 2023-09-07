module.exports = (sequelize, dataTypes) => {

    let alias = 'Tipo_siniestro';

    let cols = {
        id_tipo_siniestro: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_tipo_siniestro: {
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
        tableName: 'tipos_siniestros',
        timestamps: true,
        paranoid: true
    };

    const Tipo_siniestro = sequelize.define(alias, cols, config)


    return Tipo_siniestro;
}            