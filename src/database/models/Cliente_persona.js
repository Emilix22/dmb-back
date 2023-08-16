module.exports = (sequelize, dataTypes) => {

    let alias = 'Cliente_persona';

    let cols = {
        id_cliente_persona: {
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
        telefono_fijo: {
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
        metodo_pago_id: {
            type: dataTypes.INTEGER
        },
        vendedor_id: {
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
        tableName: 'clientes_personas',
        timestamps: true,
        paranoid: true
    };

    const Cliente_persona = sequelize.define(alias, cols, config)

    Cliente_persona.associate = function(models) {
        Cliente_persona.belongsTo(models.Vendedor,{
            foreignKey: 'vendedor_id',
            as: 'vendedor'
        }),

        Cliente_persona.hasMany(models.Poliza,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes'
        })
    }

    return Cliente_persona;
}