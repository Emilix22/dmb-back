module.exports = (sequelize, dataTypes) => {

    let alias = 'Aseguradora';

    let cols = {
        id_aseguradora: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        telefono: {
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
        tableName: 'aseguradoras',
        timestamps: true,
        paranoid: true
    };

    const Aseguradora = sequelize.define(alias, cols, config)

    Aseguradora.associate = function(models) {

        Aseguradora.hasMany(models.Poliza,{
            foreignKey: 'aseguradora_id',
            as: 'aseguradoras'
        })
    }   

    return Aseguradora;
}