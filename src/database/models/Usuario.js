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
        nivel_permiso: {
            type: dataTypes.STRING
        },
        puesto: {
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
        tableName: 'usuarios',
        timestamps: true,
        paranoid: true
    };

    const Usuario = sequelize.define(alias, cols, config)

    
    return Usuario;
}