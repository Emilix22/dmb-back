dmb-back
dmb-back es el backend de una aplicación web diseñada para la gestión de compañías de seguros. Está desarrollado con Node.js y Express, utilizando Sequelize como ORM para manejar la base de datos. Este sistema proporciona una API REST robusta que permite a los administradores, agentes y usuarios gestionar pólizas, asegurados, siniestros y toda la información relacionada con el sector asegurador.

🧾 ¿Qué ofrece este sistema?
Este backend está orientado a facilitar:

La administración de compañías aseguradoras.

El manejo de pólizas de seguros, sus tipos y coberturas.

El registro y gestión de clientes y asegurados.

El control de siniestros y reclamos.

La integración con interfaces visuales mediante vistas EJS para ciertos módulos administrativos.

Está diseñado para integrarse con un frontend (en web o mobile) que consuma sus endpoints o incluso funcionar de forma autónoma con vistas renderizadas en servidor.

📁 Estructura del Proyecto
src/:

routes/: Definición de rutas de la API.

controllers/: Lógica del negocio para cada módulo.

models/: Modelos de Sequelize (usuarios, pólizas, siniestros, etc.).

views/: Plantillas EJS para vistas administrativas.

public/: Archivos estáticos.

app.js: Archivo principal que configura y lanza Express.

.sequelizerc: Configuración para el CLI de Sequelize.

package.json: Dependencias y scripts.

🚀 Instalación y Ejecución
Clona el repositorio:

bash
Copiar
Editar
git clone https://github.com/Emilix22/dmb-back.git
cd dmb-back
Instala dependencias:

bash
Copiar
Editar
npm install
Configura la base de datos:

Modifica el archivo config/config.json o usa un .env para conectar a tu base de datos (PostgreSQL, MySQL, etc.).

Ejecuta migraciones:

bash
Copiar
Editar
npx sequelize-cli db:migrate
Inicia el servidor:

bash
Copiar
Editar
npm start
Por defecto corre en http://localhost:3000.

🧪 Scripts disponibles
npm start: Ejecuta el servidor.

npm run dev: Ejecuta en modo desarrollo con nodemon.

🤝 Contribuciones
Contribuciones, issues y pull requests son bienvenidos. ¡Súmate para seguir mejorando el sistema!

📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT.