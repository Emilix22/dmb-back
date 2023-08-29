module.exports = (sequelize, dataTypes) => {

    let alias = 'Siniestro_hogar';

    let cols = {
        id_siniestro_hogar: {
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
        incendio_contenido_total: {
            type: dataTypes.BOOLEAN
        },
        incendio_contenido_parcial: {
            type: dataTypes.BOOLEAN
        },
        incendio_edificio_total: {
            type: dataTypes.BOOLEAN
        },
        incendio_edificio_parcial: {
            type: dataTypes.BOOLEAN
        },
        granizo: {
            type: dataTypes.BOOLEAN
        },
        vientos_fuertes: {
            type: dataTypes.BOOLEAN
        },
        impacto_en_vehiculos_terrestres: {
            type: dataTypes.BOOLEAN
        },
        rayo_directo: {
            type: dataTypes.BOOLEAN
        },
        linderos: {
            type: dataTypes.BOOLEAN
        },
        cristales_rotura_accidental: {
            type: dataTypes.BOOLEAN
        },
        cristales_rajadura_accidental: {
            type: dataTypes.BOOLEAN
        },
        mobiliario_daño_parcial: {
            type: dataTypes.BOOLEAN
        },
        mobiliario_robo_parcial: {
            type: dataTypes.BOOLEAN
        },
        mobiliario_robo_total: {
            type: dataTypes.BOOLEAN
        },
        objetos_daño_parcial: {
            type: dataTypes.BOOLEAN
        },
        objetos_daño_total: {
            type: dataTypes.BOOLEAN
        },
        objetos_robo_total: {
            type: dataTypes.BOOLEAN
        },
        notebook_daño_parcial: {
            type: dataTypes.BOOLEAN
        },
        notebook_daño_total: {
            type: dataTypes.BOOLEAN
        },
        notebook_robo_parcial: {
            type: dataTypes.BOOLEAN
        },
        notebook_robo_total: {
            type: dataTypes.BOOLEAN
        },
        electronicos_robo: {
            type: dataTypes.BOOLEAN
        },
        electronicos_daño_parcial_accidente: {
            type: dataTypes.BOOLEAN
        },
        electronicos_daño_parcial_alta_baja_tension: {
            type: dataTypes.BOOLEAN
        },
        electronicos_daño_total_accidente: {
            type: dataTypes.BOOLEAN
        },
        electronicos_daño_total_alta_baja_tension: {
            type: dataTypes.BOOLEAN
        },
        bicicletas_robo: {
            type: dataTypes.BOOLEAN
        },
        bicicletas_incendio: {
            type: dataTypes.BOOLEAN
        },
        por_agua_daños_al_mobiliario: {
            type: dataTypes.BOOLEAN
        },
        daños_a_objetos: {
            type: dataTypes.BOOLEAN
        },
        lesiones_a_personas: {
            type: dataTypes.BOOLEAN
        },
        muerte_a_personas: {
            type: dataTypes.BOOLEAN
        },
        otro_tipo_de_bienes: {
            type: dataTypes.BOOLEAN
        },
        description: {
            type: dataTypes.BOOLEAN
        },
        affected_objects: {
            type: dataTypes.BOOLEAN
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
        tableName: 'siniestros_hogar',
        timestamps: true,
        paranoid: true
    };

    const Siniestro_hogar = sequelize.define(alias, cols, config)

    Siniestro_hogar.associate = function(models) {
        Siniestro_hogar.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes_personas_siniestro_hogar'
        }),

        Siniestro_hogar.belongsTo(models.Cliente_empresa,{
            foreignKey: 'cliente_empresa_id',
            as: 'clientes_empresas_siniestro_hogar'
        }),

        Siniestro_hogar.belongsTo(models.Poliza,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_hogar'
        })
    }

    return Siniestro_hogar;
}