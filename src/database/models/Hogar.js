module.exports = (sequelize, dataTypes) => {

    let alias = 'Hogar';

    let cols = {
        id_hogar: {
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
        tableName: 'hogares',
        timestamps: true,
        paranoid: true
    };

    const Hogar = sequelize.define(alias, cols, config)

    Hogar.associate = function(models) {

        Hogar.hasMany(models.Poliza,{
            foreignKey: 'hogar_id',
            as: 'hogares'
        })
    }   

    return Hogar;
}