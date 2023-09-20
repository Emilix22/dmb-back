module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuario';

    let cols = {
        id_usuario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        celular: {
            type: dataTypes.STRING
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
        nacimiento: {
            type: dataTypes.DATE
        },
        nivel_permiso_id: {
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
        tableName: 'usuarios',
        timestamps: true,
        paranoid: true
    };

    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = function(models) {

        Usuario.hasMany(models.Permiso_usuario,{
            foreignKey: 'nivel_permiso_id',
            as: 'permisos_usuario'
        })
    }
    return Usuario;
}