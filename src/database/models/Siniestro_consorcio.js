module.exports = (sequelize, dataTypes) => {

    let alias = 'Siniestro_consorcio';

    let cols = {
        id_siniestro_consorcio: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_persona_id: {
            type: dataTypes.INTEGER
        },
        cliente_empresa_id: {
            type: dataTypes.INTEGER
        },
        fecha_siniestro: {
            type: dataTypes.DATE
        },
        hora_siniestro: {
            type: dataTypes.STRING
        },
        poliza_id: {
            type: dataTypes.INTEGER
        },
        incendio_contenido: {
            type: dataTypes.BOOLEAN
        },
        incendio_edificio: {
            type: dataTypes.BOOLEAN
        },
        cristales_rotura_accidental: {
            type: dataTypes.BOOLEAN
        },
        cristales_rajadura_accidental: {
            type: dataTypes.BOOLEAN
        },
        robo_mobiliario: {
            type: dataTypes.BOOLEAN
        },
        denuncia_mobiliario: {
            type: dataTypes.STRING
        },
        por_agua_daños_al_mobiliario: {
            type: dataTypes.BOOLEAN
        },
        otro_tipo_de_bienes: {
            type: dataTypes.BOOLEAN
        },
        descripcion_hechos: {
            type: dataTypes.STRING
        },
        bienes_afectados: {
            type: dataTypes.STRING
        },
        estado: {
            type: dataTypes.STRING
        },
        observaciones: {
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
        tableName: 'siniestros_consorcio',
        timestamps: true,
        paranoid: true
    };

    const Siniestro_consorcio = sequelize.define(alias, cols, config)

    Siniestro_consorcio.associate = function(models) {
        Siniestro_consorcio.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes_personas_siniestro_consorcio'
        }),

        Siniestro_consorcio.belongsTo(models.Cliente_empresa,{
            foreignKey: 'cliente_empresa_id',
            as: 'clientes_empresas_siniestro_consorcio'
        }),

        Siniestro_consorcio.belongsTo(models.Poliza,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_consorcio'
        })
    }

    return Siniestro_consorcio;
}