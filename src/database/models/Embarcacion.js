module.exports = (sequelize, dataTypes) => {

    let alias = 'Embarcacion';

    let cols = {
        id_embarcacion: {
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
        matricula: {
            type: dataTypes.STRING
        },
        casco: {
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
        tableName: 'embarcaciones',
        timestamps: true,
        paranoid: true
    };

    const Embarcacion = sequelize.define(alias, cols, config)

    Embarcacion.associate = function(models) {

        Embarcacion.hasMany(models.Poliza,{
            foreignKey: 'embarcacion_id',
            as: 'embarcaciones'
        })
    }   

    return Embarcacion;
}