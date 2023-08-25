module.exports = (sequelize, dataTypes) => {

    let alias = 'Ubicacion_riesgo';

    let cols = {
        id_ubicacion_riesgo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        calle: {
            type: dataTypes.STRING
        },
        altura: {
            type: dataTypes.STRING
        },
        piso: {
            type: dataTypes.STRING
        },
        departamento: {
            type: dataTypes.STRING
        },
        cp: {
            type: dataTypes.STRING
        },
        localidad: {
            type: dataTypes.STRING
        },
        provincia: {
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
        tableName: 'ubicaciones_riesgos',
        timestamps: true,
        paranoid: true
    };

    const Ubicacion_riesgo = sequelize.define(alias, cols, config)

    Ubicacion_riesgo.associate = function(models) {

        Ubicacion_riesgo.hasMany(models.Poliza,{
            foreignKey: 'ubicacion_riesgo_id',
            as: 'ubicaciones_riesgos'
        })
    }   

    return Ubicacion_riesgo;
}