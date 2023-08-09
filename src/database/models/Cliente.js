module.exports = (sequelize, dataTypes) => {

    let alias = 'Cliente';

    let cols = {
        id: {
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
        cuit: {
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
        metodo_pago: {
            type: dataTypes.STRING
        },
        numero_tarjeta: {
            type: dataTypes.STRING
        },
        cbu: {
            type: dataTypes.STRING
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
        tableName: 'clientes',
        timestamps: true,
        paranoid: true
    };

    const Cliente = sequelize.define(alias, cols, config)

    Cliente.associate = function(models) {
        Cliente.belongsTo(models.Vendedor,{
            foreignKey: 'vendedor_id',
            as: 'vendedor'
        }),

        Cliente.hasMany(models.Poliza,{
            foreignKey: 'cliente_id',
            as: 'clientes'
        })
    }

    return Cliente;
}