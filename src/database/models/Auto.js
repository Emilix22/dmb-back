module.exports = (sequelize, dataTypes) => {

    let alias = 'Auto';

    let cols = {
        id_auto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: {
            type: dataTypes.STRING
        },
        modelo: {
            type: dataTypes.STRING
        },
        patente: {
            type: dataTypes.STRING
        },
        chasis: {
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
        tableName: 'autos',
        timestamps: true,
        paranoid: true
    };

    const Auto = sequelize.define(alias, cols, config)

    Auto.associate = function(models) {

        Auto.hasMany(models.Poliza,{
            foreignKey: 'auto_id',
            as: 'autos'
        })
    }   

    return Auto;
}