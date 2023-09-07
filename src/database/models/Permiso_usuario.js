module.exports = (sequelize, dataTypes) => {

    let alias = 'Permiso_usuario';

    let cols = {
        id_permisos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_permiso: {
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
        tableName: 'permisos_usuarios',
        timestamps: true,
        paranoid: true
    };

    const Permiso_usuario = sequelize.define(alias, cols, config)

    Permiso_usuario.associate = function(models) {

        Permiso_usuario.belongsTo(models.Usuario,{
            foreignKey: 'nivel_permiso_id',
            as: 'permisos_usuario'
        })
    }   

    return Permiso_usuario;
}