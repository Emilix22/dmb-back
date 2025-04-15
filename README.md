# 🛡️ dmb-back — Backend para Gestión de Compañías de Seguros

`dmb-back` es una API RESTful desarrollada con **Node.js**, **Express** y **Sequelize**. Está diseñada para servir como backend de una aplicación integral para la gestión de compañías de seguros, incluyendo módulos para pólizas, asegurados, siniestros, agentes y más.

> 🚀 Escalable, modular y lista para producción.

---

## 🧰 Stack Tecnológico

| Tecnología    | Descripción                          |
|--------------|--------------------------------------|
| Node.js      | Runtime JavaScript en el servidor    |
| Express.js   | Framework minimalista y flexible     |
| Sequelize    | ORM para manejo de base de datos     |
| EJS          | Renderizado de vistas desde el servidor |
| MySQL / PostgreSQL | Soporte para múltiples motores de BD |

---

## 📦 Funcionalidades Principales

- 📑 Gestión de pólizas y coberturas.
- 👤 Administración de asegurados y usuarios.
- 📝 Registro y seguimiento de siniestros.
- 🔐 Roles de usuario (admin, agente, cliente).
- 🌐 Vistas administrativas renderizadas con EJS.
- 📊 Control de flujos internos para operaciones aseguradoras.

---

## 🚀 Instalación Rápida

```bash
# 1. Clonar repositorio
git clone https://github.com/Emilix22/dmb-back.git
cd dmb-back

# 2. Instalar dependencias
npm install

# 3. Configurar base de datos en config/config.json

# 4. Ejecutar migraciones
npx sequelize-cli db:migrate

# 5. Iniciar servidor
npm run dev
```

> El servidor estará disponible por defecto en `http://localhost:3000`

---

## 🗂️ Estructura del Proyecto

```bash
dmb-back/
│
├── src/               # Código fuente
│   ├── controllers/   # Lógica de negocio
│   ├── models/        # Modelos Sequelize
│   ├── routes/        # Rutas API REST
│
├── views/             # Plantillas EJS
├── public/            # Archivos estáticos
├── app.js             # Entry point principal
├── .sequelizerc       # Configuración CLI de Sequelize
└── package.json       # Dependencias y scripts
```

---

## 🧪 Scripts Disponibles

| Comando         | Descripción                         |
|----------------|-------------------------------------|
| `npm start`     | Ejecuta en modo producción          |
| `npm run dev`   | Ejecuta con `nodemon` en desarrollo |
| `npm test`      | Ejecuta pruebas (si están definidas) |

---

## 🧱 Futuras Mejoras

- 📤 API para exportación de reportes PDF/Excel
- 📨 Notificaciones por correo y SMS
- 📱 Autenticación JWT + integración con frontend mobile

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📝 Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [`LICENSE`](LICENSE) para más detalles.

---

## 📬 Contacto

¿Tienes preguntas o ideas para mejorar el proyecto?  
Puedes abrir un [issue](https://github.com/Emilix22/dmb-back/issues) o contactar directamente a través de GitHub.

---

> Made with 💼 by profesionales del backend.
