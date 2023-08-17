module.exports = (sequelize, dataTypes) => {

    let alias = 'Tipo_poliza';

    let cols = {
        id_tipo_poliza: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_tipo_poliza: {
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
        tableName: 'tipos_polizas',
        timestamps: true,
        paranoid: true
    };

    const Tipo_poliza = sequelize.define(alias, cols, config)

    Tipo_poliza.associate = function(models) {

        Tipo_poliza.hasMany(models.Poliza,{
            foreignKey: 'tipo_poliza_id',
            as: 'tipos_polizas'
        })
    }   

    return Tipo_poliza;
}