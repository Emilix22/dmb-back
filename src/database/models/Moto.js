module.exports = (sequelize, dataTypes) => {

    let alias = 'Moto';

    let cols = {
        id_moto: {
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
        año: {
            type: dataTypes.INTEGER
        },
        patente: {
            type: dataTypes.STRING
        },
        chasis: {
            type: dataTypes.STRING
        },
        motor: {
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
        tableName: 'motos',
        timestamps: true,
        paranoid: true
    };

    const Moto = sequelize.define(alias, cols, config)

    Moto.associate = function(models) {

        Moto.hasMany(models.Poliza,{
            foreignKey: 'moto_id',
            as: 'motos'
        })
    }   

    return Moto;
}