-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2023 a las 02:37:46
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dmb_database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aseguradoras`
--

CREATE TABLE `aseguradoras` (
  `id_aseguradora` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aseguradoras`
--

INSERT INTO `aseguradoras` (`id_aseguradora`, `nombre`, `telefono`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Allianz', '1132569854', '2023-09-06 19:50:56', NULL, NULL),
(2, 'ATM', '1132569854', '2023-09-06 19:50:59', NULL, NULL),
(3, 'Federación Patronal', '1132569854', '2023-09-06 19:52:01', NULL, NULL),
(4, 'Holando Seguros', '1132569854', '2023-09-06 19:52:04', NULL, NULL),
(5, 'Mapfre', '1132569854', '2023-09-06 19:52:57', NULL, NULL),
(6, 'Mercantil Andina', '1132569854', '2023-09-06 19:53:00', NULL, NULL),
(7, 'Victoria Seguros', '1132569854', '2023-09-06 19:53:51', NULL, NULL),
(8, 'EXPERTA', '1132569854', '2023-09-06 19:53:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autos`
--

CREATE TABLE `autos` (
  `id_auto` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `año` year(4) NOT NULL,
  `patente` varchar(10) NOT NULL,
  `chasis` varchar(20) NOT NULL,
  `motor` varchar(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autos`
--

INSERT INTO `autos` (`id_auto`, `marca`, `modelo`, `año`, `patente`, `chasis`, `motor`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'PEUGEOT', '208 ALLURE 1.5 NAV', '2016', 'AA586HC', '936CLYFZ0HB018896', '10DBSZ0024085', '2023-09-06 20:02:04', NULL, NULL),
(2, 'FORD', 'TERRITORY 1.5', '2020', 'AB697JV', '947CLZGZ0HB017796', '10DVCZ0023855', '2023-09-06 20:02:07', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cbu_cuentas`
--

CREATE TABLE `cbu_cuentas` (
  `id_cbu_cuenta` int(11) NOT NULL,
  `cbu_numero` varchar(20) NOT NULL,
  `cuenta_numero` varchar(20) NOT NULL,
  `cuenta_tipo` varchar(50) NOT NULL,
  `banco` varchar(50) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cbu_cuentas`
--

INSERT INTO `cbu_cuentas` (`id_cbu_cuenta`, `cbu_numero`, `cuenta_numero`, `cuenta_tipo`, `banco`, `cliente_persona_id`, `cliente_empresa_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '002223366554458', '65986598659865', 'caja ahorro', 'BVA Francés', 1, NULL, '2023-09-07 01:37:19', NULL, NULL),
(2, '000256325000124', '99923565412347', 'cuenta corriente', 'Santander', NULL, 1, '2023-09-07 01:37:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_empresas`
--

CREATE TABLE `clientes_empresas` (
  `id_cliente_empresa` int(11) NOT NULL,
  `nombre_empresa` varchar(50) NOT NULL,
  `cuit` varchar(20) NOT NULL,
  `nombre_contacto` varchar(50) NOT NULL,
  `dni_contacto` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `telefono_fijo` varchar(20) DEFAULT NULL,
  `calle` varchar(50) NOT NULL,
  `altura` varchar(10) NOT NULL,
  `piso` varchar(10) DEFAULT NULL,
  `departamento` varchar(10) DEFAULT NULL,
  `cp` varchar(10) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `metodo_pago_id` int(11) NOT NULL,
  `vendedor_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes_empresas`
--

INSERT INTO `clientes_empresas` (`id_cliente_empresa`, `nombre_empresa`, `cuit`, `nombre_contacto`, `dni_contacto`, `email`, `celular`, `telefono_fijo`, `calle`, `altura`, `piso`, `departamento`, `cp`, `localidad`, `provincia`, `metodo_pago_id`, `vendedor_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Rivotel S.A', '20262836828', 'Roberto Salindo', '28589653', 'emiliano.dev.torres@gmail.com', '1135644857', NULL, 'Esmeralda', '48', NULL, NULL, '1824', 'CABA', 'Ciudad Autónoma de Buenos Aires', 3, 1, '2023-09-07 01:34:37', NULL, NULL),
(2, 'NH Hoteles', '20275469859', 'Ignacio Lando', '23658974', 'nacho@gmail.com', '1143216547', NULL, 'Zuviría', '455', '2', 'A', '1824', 'CABA', 'Ciudad Autónoma de Buenos Aires', 2, 2, '2023-09-07 01:34:39', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_personas`
--

CREATE TABLE `clientes_personas` (
  `id_cliente_persona` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `telefono_fijo` varchar(20) DEFAULT NULL,
  `calle` varchar(50) NOT NULL,
  `altura` varchar(10) NOT NULL,
  `piso` varchar(10) DEFAULT NULL,
  `departamento` varchar(10) DEFAULT NULL,
  `cp` varchar(10) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `metodo_pago_id` int(11) NOT NULL,
  `vendedor_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes_personas`
--

INSERT INTO `clientes_personas` (`id_cliente_persona`, `nombre`, `apellido`, `dni`, `email`, `celular`, `telefono_fijo`, `calle`, `altura`, `piso`, `departamento`, `cp`, `localidad`, `provincia`, `metodo_pago_id`, `vendedor_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Emiliano', 'Torres', '26283682', 'torresdragon@hotmail.com', '1136388857', '42436739', 'Dr. Pedro Ignacio Rivera', '3160', '5', 'B', '1428', 'CABA', 'Ciudad Autónoma de Buenos Aires', 1, 1, '2023-09-07 01:30:43', NULL, NULL),
(2, 'Guadalupe', 'Cordone', '32143856', 'emiliano.dev.torres@gmail.com', '1150459606', '', 'Av. Siemprviva', '742', '', '', '1234', 'Lomas de Zamora', 'Buenos Aires', 2, 2, '2023-09-07 01:30:45', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `embarcaciones`
--

CREATE TABLE `embarcaciones` (
  `id_embarcacion` int(11) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `año` year(4) NOT NULL,
  `matricula` varchar(8) NOT NULL,
  `casco` varchar(20) NOT NULL,
  `motor` varchar(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodos_pago`
--

CREATE TABLE `metodos_pago` (
  `id_metodo_pago` int(11) NOT NULL,
  `nombre_metodo_pago` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `metodos_pago`
--

INSERT INTO `metodos_pago` (`id_metodo_pago`, `nombre_metodo_pago`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Tarjeta de Crédito', '2023-09-07 01:27:51', NULL, NULL),
(2, 'Débito Automático', '2023-09-07 01:27:53', NULL, NULL),
(3, 'Efectivo', '2023-09-07 01:28:22', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motos`
--

CREATE TABLE `motos` (
  `id_moto` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `año` year(4) NOT NULL,
  `patente` varchar(10) NOT NULL,
  `chasis` varchar(50) NOT NULL,
  `motor` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `motos`
--

INSERT INTO `motos` (`id_moto`, `marca`, `modelo`, `año`, `patente`, `chasis`, `motor`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Honda', 'CR 250', '2003', 'CD456E', '936CLYFZ0HB018896', '10DVCZ0023855', '2023-09-07 01:39:11', NULL, NULL),
(2, 'Harley Davinson', 'Cruise 1000', '2010', 'AS585DF', '936CLYFZ0HB018896', '10DVCZ0023855', '2023-09-07 01:39:14', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_usuarios`
--

CREATE TABLE `permisos_usuarios` (
  `id_permisos` int(11) NOT NULL,
  `nombre_permiso` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `polizas`
--

CREATE TABLE `polizas` (
  `id_poliza` int(11) NOT NULL,
  `numero_poliza` varchar(20) NOT NULL,
  `cobertura` varchar(50) NOT NULL,
  `vigencia_desde` date NOT NULL,
  `vigencia_hasta` date NOT NULL,
  `tipo_poliza_id` int(11) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `auto_id` int(11) DEFAULT NULL,
  `moto_id` int(11) DEFAULT NULL,
  `embarcacion_id` int(11) DEFAULT NULL,
  `ubicacion_riesgo_id` int(11) DEFAULT NULL,
  `aseguradora_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `polizas`
--

INSERT INTO `polizas` (`id_poliza`, `numero_poliza`, `cobertura`, `vigencia_desde`, `vigencia_hasta`, `tipo_poliza_id`, `cliente_persona_id`, `cliente_empresa_id`, `auto_id`, `moto_id`, `embarcacion_id`, `ubicacion_riesgo_id`, `aseguradora_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '123456789123', 'Todo Riesgo', '2023-09-01', '2023-09-30', 1, 1, NULL, 1, NULL, NULL, NULL, 1, '2023-09-07 01:54:48', NULL, NULL),
(2, '987654321654', 'Tercero completo', '2023-09-01', '2023-10-31', 1, 2, NULL, 2, NULL, NULL, NULL, 3, '2023-09-07 01:54:51', NULL, NULL),
(3, '456123789546', 'Todo Riesgo', '2023-09-01', '2024-09-05', 3, NULL, 1, NULL, NULL, NULL, 1, 4, '2023-09-07 01:57:14', NULL, NULL),
(4, '456123789546', 'Todo Riesgo', '2023-09-01', '2024-09-05', 3, 2, NULL, NULL, NULL, NULL, 1, 4, '2023-09-07 01:57:16', NULL, NULL),
(5, '123456789987', 'Todo Riesgo', '2023-09-08', '2023-09-30', 2, 1, NULL, NULL, 1, NULL, NULL, 5, '2023-09-08 16:09:40', NULL, NULL),
(6, '123456788888', 'Todo Riesgo', '2023-09-08', '2023-09-30', 2, NULL, 2, NULL, 2, NULL, NULL, 5, '2023-09-08 16:09:43', NULL, NULL),
(7, '987456123', 'Tercero completo', '2023-09-08', '2023-09-30', 4, 2, NULL, NULL, NULL, NULL, 2, 8, '2023-09-09 00:44:02', NULL, NULL),
(8, '987456123', 'Tercero completo', '2023-09-08', '2023-09-30', 4, NULL, 2, NULL, NULL, NULL, 1, 8, '2023-09-09 00:44:06', NULL, NULL),
(9, '357864321', 'Todo Riesgo', '2023-09-05', '2023-09-21', 8, 1, NULL, NULL, NULL, NULL, NULL, 6, '2023-09-10 11:45:42', NULL, NULL),
(10, '357864321', 'Todo Riesgo', '2023-09-05', '2023-09-21', 8, 1, NULL, NULL, NULL, NULL, NULL, 6, '2023-09-10 11:45:48', NULL, NULL),
(11, '98653214', 'Tercero completo', '2023-09-01', '2023-09-30', 9, NULL, 1, NULL, NULL, NULL, NULL, 6, '2023-09-10 12:54:49', NULL, NULL),
(12, '98653214', 'Tercero completo', '2023-09-01', '2023-09-30', 9, NULL, 1, NULL, NULL, NULL, NULL, 6, '2023-09-10 12:54:52', NULL, NULL),
(13, '852369417', 'Todo Riesgo', '2023-09-01', '2024-09-20', 1, NULL, 1, 1, NULL, NULL, NULL, 2, '2023-09-11 20:59:59', NULL, NULL),
(14, '852369417', 'Todo Riesgo', '2023-09-01', '2024-09-20', 1, NULL, 1, 1, NULL, NULL, NULL, 2, '2023-09-11 21:00:03', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `siniestros_auto`
--

CREATE TABLE `siniestros_auto` (
  `id_siniestro` int(11) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `fecha_siniestro` date NOT NULL,
  `hora_siniestro` time NOT NULL,
  `poliza_id` int(11) NOT NULL,
  `motivo` tinytext NOT NULL,
  `consecuencia` tinytext NOT NULL,
  `denuncia_policial` tinytext DEFAULT NULL,
  `lugar_calle` tinytext NOT NULL,
  `lugar_altura` tinytext NOT NULL,
  `lugar_cp` tinytext NOT NULL,
  `lugar_provincia` tinytext NOT NULL,
  `lugar_localidad` tinytext NOT NULL,
  `descripcion_hechos` text NOT NULL,
  `lugar_caracteristicas` tinytext NOT NULL,
  `registro_frente` tinytext NOT NULL,
  `registro_dorso` tinytext NOT NULL,
  `conducia_asegurado` tinytext NOT NULL,
  `lesionados_dentro_vehiculo` tinytext NOT NULL,
  `lesionados_fuera_vehiculo` tinytext NOT NULL,
  `vehiculos_terceros_involucrados` tinytext NOT NULL,
  `cnc_nombre` tinytext DEFAULT NULL,
  `cnc_apellido` tinytext DEFAULT NULL,
  `cnc_dni` tinytext DEFAULT NULL,
  `cnc_telefono` tinytext DEFAULT NULL,
  `cnc_nacimiento` date DEFAULT NULL,
  `cnc_nacionalidad` tinytext DEFAULT NULL,
  `cnc_calle` tinytext DEFAULT NULL,
  `cnc_altura` tinytext DEFAULT NULL,
  `cnc_cp` tinytext DEFAULT NULL,
  `cnc_provincia` tinytext DEFAULT NULL,
  `cnc_localidad` tinytext DEFAULT NULL,
  `ldv_cantidad` tinytext DEFAULT NULL,
  `ldv_nombre1` tinytext DEFAULT NULL,
  `ldv_nombre2` tinytext DEFAULT NULL,
  `ldv_nombre3` tinytext DEFAULT NULL,
  `ldv_nombre4` tinytext DEFAULT NULL,
  `ldv_nombre5` tinytext DEFAULT NULL,
  `ldv_apellido1` tinytext DEFAULT NULL,
  `ldv_apellido2` tinytext DEFAULT NULL,
  `ldv_apellido3` tinytext DEFAULT NULL,
  `ldv_apellido4` tinytext DEFAULT NULL,
  `ldv_apellido5` tinytext DEFAULT NULL,
  `ldv_dni1` tinytext DEFAULT NULL,
  `ldv_dni2` tinytext DEFAULT NULL,
  `ldv_dni3` tinytext DEFAULT NULL,
  `ldv_dni4` tinytext DEFAULT NULL,
  `ldv_dni5` tinytext DEFAULT NULL,
  `ldv_telefono1` tinytext DEFAULT NULL,
  `ldv_telefono2` tinytext DEFAULT NULL,
  `ldv_telefono3` tinytext DEFAULT NULL,
  `ldv_telefono4` tinytext DEFAULT NULL,
  `ldv_telefono5` tinytext DEFAULT NULL,
  `lfv_cantidad` tinytext DEFAULT NULL,
  `lfv_nombre1` tinytext DEFAULT NULL,
  `lfv_nombre2` tinytext DEFAULT NULL,
  `lfv_nombre3` tinytext DEFAULT NULL,
  `lfv_nombre4` tinytext DEFAULT NULL,
  `lfv_nombre5` tinytext DEFAULT NULL,
  `lfv_apellido1` tinytext DEFAULT NULL,
  `lfv_apellido2` tinytext DEFAULT NULL,
  `lfv_apellido3` tinytext DEFAULT NULL,
  `lfv_apellido4` tinytext DEFAULT NULL,
  `lfv_apellido5` tinytext DEFAULT NULL,
  `lfv_dni1` tinytext DEFAULT NULL,
  `lfv_dni2` tinytext DEFAULT NULL,
  `lfv_dni3` tinytext DEFAULT NULL,
  `lfv_dni4` tinytext DEFAULT NULL,
  `lfv_dni5` tinytext DEFAULT NULL,
  `lfv_telefono1` tinytext DEFAULT NULL,
  `lfv_telefono2` tinytext DEFAULT NULL,
  `lfv_telefono3` tinytext DEFAULT NULL,
  `lfv_telefono4` tinytext DEFAULT NULL,
  `lfv_telefono5` tinytext DEFAULT NULL,
  `vti_patente` tinytext DEFAULT NULL,
  `vti_aseguradora` tinytext DEFAULT NULL,
  `vti_nombre` tinytext DEFAULT NULL,
  `vti_apellido` tinytext DEFAULT NULL,
  `vti_dni` tinytext DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `siniestros_auto`
--

INSERT INTO `siniestros_auto` (`id_siniestro`, `cliente_persona_id`, `cliente_empresa_id`, `fecha_siniestro`, `hora_siniestro`, `poliza_id`, `motivo`, `consecuencia`, `denuncia_policial`, `lugar_calle`, `lugar_altura`, `lugar_cp`, `lugar_provincia`, `lugar_localidad`, `descripcion_hechos`, `lugar_caracteristicas`, `registro_frente`, `registro_dorso`, `conducia_asegurado`, `lesionados_dentro_vehiculo`, `lesionados_fuera_vehiculo`, `vehiculos_terceros_involucrados`, `cnc_nombre`, `cnc_apellido`, `cnc_dni`, `cnc_telefono`, `cnc_nacimiento`, `cnc_nacionalidad`, `cnc_calle`, `cnc_altura`, `cnc_cp`, `cnc_provincia`, `cnc_localidad`, `ldv_cantidad`, `ldv_nombre1`, `ldv_nombre2`, `ldv_nombre3`, `ldv_nombre4`, `ldv_nombre5`, `ldv_apellido1`, `ldv_apellido2`, `ldv_apellido3`, `ldv_apellido4`, `ldv_apellido5`, `ldv_dni1`, `ldv_dni2`, `ldv_dni3`, `ldv_dni4`, `ldv_dni5`, `ldv_telefono1`, `ldv_telefono2`, `ldv_telefono3`, `ldv_telefono4`, `ldv_telefono5`, `lfv_cantidad`, `lfv_nombre1`, `lfv_nombre2`, `lfv_nombre3`, `lfv_nombre4`, `lfv_nombre5`, `lfv_apellido1`, `lfv_apellido2`, `lfv_apellido3`, `lfv_apellido4`, `lfv_apellido5`, `lfv_dni1`, `lfv_dni2`, `lfv_dni3`, `lfv_dni4`, `lfv_dni5`, `lfv_telefono1`, `lfv_telefono2`, `lfv_telefono3`, `lfv_telefono4`, `lfv_telefono5`, `vti_patente`, `vti_aseguradora`, `vti_nombre`, `vti_apellido`, `vti_dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, NULL, '2023-09-07', '16:50:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'la de maga', '154', '5478', 'Santa Cruz', 'Magallanes', 'sdfghgfd dffdfdsfhh thrhrthg', 'Avenida', '1694052521070-913034131.png', '1694052521078-752671084.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-07 02:08:41', '2023-09-07 02:08:41', NULL),
(2, 1, NULL, '2023-09-06', '17:20:00', 1, 'robo', 'robo del vehículo', '1694104558148-386709906.pdf', 'dfgdfg', '154', '4521', 'Santa Fe', 'General López', 'dfgdfgdfgdfgdfgdfgdfgdfg', 'Autopista', '1694104558153-860355841.jpg', '1694104558155-48073614.png', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-07 16:35:58', '2023-09-07 16:35:58', NULL),
(3, 1, NULL, '2023-09-06', '17:35:00', 1, 'robo', 'robo del vehículo', '1694195256688-518491835.pdf', 'dfdf', '15', '3258', 'Santa Fe', 'San Martín', 'sdfsdf sdfsdfsd sdf sd', 'Autopista', '1694195256694-335386223.jpg', '1694195256695-126968854.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-08 17:47:36', '2023-09-08 17:47:36', NULL),
(4, 1, NULL, '2023-09-06', '17:00:00', 1, 'robo', 'robo del vehículo', '1694196526591-973803648.jpg', 'dfgdfgdfg', '154', '6547', 'Neuquén', 'Lácar', 'dfgdfg dfgdfg dfgdfgd', 'Autopista', '1694196526593-660206560.jpg', '1694196526594-343682650.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-08 18:08:46', '2023-09-08 18:08:46', NULL),
(5, 1, NULL, '2023-09-06', '13:30:00', 1, 'colisión', 'siniestro con bicicletas', NULL, 'sdsds', '1245', '3256', 'Santa Fe', 'San Jerónimo', 'sdsdasdasdasdasdasdasd', 'Autopista', '1694196725263-835230440.jpg', '1694196725276-804081455.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-08 18:12:05', '2023-09-08 18:12:05', NULL),
(6, 1, NULL, '2023-09-05', '12:25:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdsdsdsd', '1245', '1245', 'Santiago del Estero', 'Río Hondo', 'sdsdsdasdasdsdasdasdas', 'Autopista', '1694451991997-554859319.jpg', '1694451992001-635540732.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 17:06:32', '2023-09-11 17:06:32', NULL),
(7, 2, NULL, '2023-09-07', '13:35:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdfsdfsdf', '12', '6547', 'Catamarca', 'Santa María', 'sdfsdfsdf sdfsdfsdf sdf', 'Autopista', '1694452459326-867774639.jpg', '1694452459330-839071093.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 17:14:19', '2023-09-11 17:14:19', NULL),
(8, 1, NULL, '2023-09-01', '12:40:00', 1, 'cristales y cerraduras', 'daños a cristales y cerraduras', NULL, 'sdsdsd', '15', '6523', 'Tucumán', 'Cruz Alta', 'sdasdasdasd asdasdsdas', 'Autopista', '1694453093605-462317424.jpg', '1694453093608-510125320.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 17:24:53', '2023-09-11 17:24:53', NULL),
(9, 1, NULL, '2023-09-07', '14:30:00', 1, 'cristales y cerraduras', 'daños a cristales y cerraduras', NULL, 'Probando que funcione', '1245', '3256', 'Santa Fe', 'General Obligado', 'asdasdasdasd asdasdasd', 'Autopista', '1694453748722-772272071.jpg', '1694453748726-354966977.png', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 17:35:48', '2023-09-11 17:35:48', NULL),
(10, 1, NULL, '2023-09-06', '15:45:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdsdsd', '12', '6523', 'La Pampa', 'Utracán', 'sdasdasdasdasd asdasd', 'Autopista', '1694455765805-615000188.jpg', '1694455765809-252513767.pdf', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 18:09:25', '2023-09-11 18:09:25', NULL),
(11, 1, NULL, '2023-08-31', '15:40:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdsdsd', '124', '54658', 'Santa Fe', 'San Cristóbal', 'sdasdasd sadasdasd asd', 'Autopista', '1694456735602-81348892.jpg', '1694456735603-995899354.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 18:25:35', '2023-09-11 18:25:35', NULL),
(12, 1, NULL, '2023-09-08', '14:45:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdfsdfdsf', '124', '3256', 'Corrientes', 'Paso de los Libres', 'sdfsdf sdfsdf sdfsdf s', 'Autopista', '1694457793659-501965606.jpg', '1694457793660-887730322.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 18:43:13', '2023-09-11 18:43:13', NULL),
(13, 1, NULL, '2023-09-08', '15:35:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'lklk', '12', '3254', 'La Pampa', 'Hucal', 'xcvxcvxcv xcvxcvxcvxcv', 'Autopista', '1694458294154-100271219.jpg', '1694458294155-556109979.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 18:51:34', '2023-09-11 18:51:34', NULL),
(14, 1, NULL, '2023-09-06', '17:45:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sadasd', '15', '6512', 'Neuquén', 'Collón Curá', 'asdasdasd asdasdsad as', 'Autopista', '1694458458442-648204975.jpg', '1694458458443-566959.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 18:54:18', '2023-09-11 18:54:18', NULL),
(15, 1, NULL, '2023-09-06', '15:40:00', 1, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'asdasdasd', '124', '1546', 'Catamarca', 'El Alto', 'asdasd asd asdasdasdas', 'Sobre puente', '1694459670033-69978000.pdf', '1694459670037-281840833.pdf', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 19:14:30', '2023-09-11 19:14:30', NULL),
(16, 2, NULL, '2023-09-06', '15:45:00', 2, 'colisión', 'siniestro con bicicletas', NULL, 'rivera', '3160', '1428', 'Ciudad Autónoma de Buenos Aires', 'CABA', 'lalala nmsnsgdbf trtrtgdhfgd kgfjgfhf ngdjfgf hdgdsfds lk', 'Autopista', '1694461122803-63541841.jpg', '1694461122807-365726481.pdf', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 19:38:42', '2023-09-11 19:38:42', NULL),
(17, 2, NULL, '2023-09-01', '15:40:00', 2, 'colisión', 'siniestro con bicicletas', NULL, 'asdasd', '154', '3214', 'San Luis', 'Ayacucho', 'asdasd asd asdasdasd asd asdasd', 'Autopista', '1694461941904-346749632.jpg', '1694461941906-670353069.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 19:52:21', '2023-09-11 19:52:21', NULL),
(18, 2, NULL, '2023-08-31', '16:10:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdfdsf', '321', '6542', 'Santiago del Estero', 'Guasayán', 'sdfsdf dsfsdfsdf sdfsdf', 'Autopista', '1694462459206-162239388.png', '1694462459224-454758848.png', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 20:00:59', '2023-09-11 20:00:59', NULL),
(19, 2, NULL, '2023-09-01', '13:35:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdsdsd', '2145', '3256', 'Chubut', 'Paso de Indios', 'sdsda asdasdadsasd asdasd', 'Autopista', '1694463337114-923865473.jpg', '1694463337119-516110146.pdf', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 20:15:37', '2023-09-11 20:15:37', NULL),
(20, 2, NULL, '2023-09-07', '17:10:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'asdasdsdas', '15', '3586', 'Misiones', 'Leandro N. Alem', 'asdasd asdasd ghjhg hgjhgjkhkjhgkjh', 'Autopista', '1694465251379-417392075.jpg', '1694465251382-107181674.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 20:47:31', '2023-09-11 20:47:31', NULL),
(21, NULL, 1, '2023-09-01', '15:10:00', 13, 'cristales y cerraduras', 'daños a cristales y cerraduras', NULL, 'sdfsdfsdf', '154', '6523', 'Misiones', 'Capital', 'sdfsdfdsf dsfsdfsdf sdf', 'Autopista', '1694466148764-824002204.jpg', '1694466148768-758334883.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, '2023-09-11 21:02:28', '2023-09-11 21:02:28', NULL),
(22, NULL, 1, '2023-09-01', '14:35:00', 13, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdfsdfsdf', '2145', '6523', 'San Luis', 'Belgrano', 'sdfsdf sdfsdf sdf  sdfsdf', 'Autopista', '1694466951408-921657582.pdf', '1694466951412-749215454.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, '2023-09-11 21:15:51', '2023-09-11 21:15:51', NULL),
(23, 2, NULL, '2023-09-07', '17:35:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'asdasdasd', '154', '2154', 'San Luis', 'Ayacucho', 'asdasd sad asd sa fdg hgfhgfh', 'Autopista', '1694467317933-158784192.jpg', '1694467317937-39971607.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 21:21:57', '2023-09-11 21:21:57', NULL),
(24, 2, NULL, '2023-09-07', '17:35:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'asdasdasd', '154', '2154', 'San Luis', 'Ayacucho', 'asdasd sad asd sa fdg hgfhgfh', 'Autopista', '1694467567375-47426875.jpg', '1694467567377-549531217.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-11 21:26:07', '2023-09-11 21:26:07', NULL),
(25, NULL, 1, '2023-09-01', '17:50:00', 13, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdfdsfdsfds', '1542', '3245', 'San Luis', 'Ayacucho', 'sdfds dsf sdf dsf dsf dsf ', 'Autopista', '1694470386903-166802373.pdf', '1694470386907-73409131.pdf', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, '2023-09-11 22:13:06', '2023-09-11 22:13:06', NULL),
(26, 2, NULL, '2023-09-07', '16:30:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'fdghg', '15', '6875', 'Santa Cruz', 'Corpen Aike', 'fghfg hjhklhjkjhkhjfdgafga ', 'Autopista', '1694521204004-243799394.jpg', '1694521204008-675564944.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-12 12:20:04', '2023-09-12 12:20:04', NULL),
(27, 2, NULL, '2023-09-07', '16:30:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'fdghg', '15', '6875', 'Santa Cruz', 'Corpen Aike', 'fghfg hjhklhjkjhkhjfdgafga ', 'Autopista', '1694521390348-531136749.jpg', '1694521390351-729281707.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-12 12:23:10', '2023-09-12 12:23:10', NULL),
(28, 2, NULL, '2023-09-07', '16:30:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'fdghg', '15', '6875', 'Santa Cruz', 'Corpen Aike', 'fghfg hjhklhjkjhkhjfdgafga ', 'Autopista', '1694521694512-481785357.jpg', '1694521694518-841379093.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-12 12:28:14', '2023-09-12 12:28:14', NULL),
(29, 2, NULL, '2023-09-07', '10:40:00', 2, 'colisión', 'colisión con cosas (no vehículos)', NULL, 'sdsasda', '1542', '1524', 'Tucumán', 'Capital', 'asdasd asdasda sdasdas', 'Autopista', '1694557315854-165858194.jpg', '1694557315859-773859026.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-09-12 22:21:55', '2023-09-12 22:21:55', NULL),
(30, NULL, 1, '2023-09-06', '18:10:00', 13, 'colisión', 'siniestro con bicicletas', NULL, 'dfgdfgdfgdf', '154', '1547', 'Santiago del Estero', 'Silípica', 'dfgdfg dfgdfgdfg dfgdf', 'Autopista', '1694558653954-196473714.jpg', '1694558653955-606932598.pdf', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, '2023-09-12 22:44:13', '2023-09-12 22:44:13', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `siniestros_consorcio`
--

CREATE TABLE `siniestros_consorcio` (
  `id_siniestro_consorcio` int(11) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `fecha_siniestro` date NOT NULL,
  `hora_siniestro` time NOT NULL,
  `poliza_id` int(11) NOT NULL,
  `incendio_contenido` tinyint(1) DEFAULT NULL,
  `incendio_edificio` tinyint(1) DEFAULT NULL,
  `cristales_rotura_accidental` tinyint(1) DEFAULT NULL,
  `cristales_rajadura_accidental` tinyint(1) DEFAULT NULL,
  `robo_mobiliario` tinyint(1) DEFAULT NULL,
  `denuncia_mobiliario` varchar(45) DEFAULT NULL,
  `por_agua_daños_al_mobiliario` tinyint(1) DEFAULT NULL,
  `otro_tipo_de_bienes` tinyint(1) DEFAULT NULL,
  `descripcion_hechos` varchar(255) NOT NULL,
  `bienes_afectados` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `siniestros_consorcio`
--

INSERT INTO `siniestros_consorcio` (`id_siniestro_consorcio`, `cliente_persona_id`, `cliente_empresa_id`, `fecha_siniestro`, `hora_siniestro`, `poliza_id`, `incendio_contenido`, `incendio_edificio`, `cristales_rotura_accidental`, `cristales_rajadura_accidental`, `robo_mobiliario`, `denuncia_mobiliario`, `por_agua_daños_al_mobiliario`, `otro_tipo_de_bienes`, `descripcion_hechos`, `bienes_afectados`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, NULL, '2023-09-06', '14:35:00', 7, 1, 0, 0, 0, 0, NULL, NULL, 0, 'sdf', 'sdfsdf', '2023-09-09 00:52:21', '2023-09-09 00:52:21', NULL),
(2, 2, NULL, '2023-09-07', '04:10:00', 7, 0, 0, 0, 0, 1, '1694220802617-641936774.pdf', NULL, 0, 'dfgdgdfgfd', 'dfgdfgdfg', '2023-09-09 00:53:22', '2023-09-09 00:53:22', NULL),
(3, NULL, 2, '2023-09-06', '11:35:00', 8, 0, 0, 1, 1, 0, NULL, NULL, 0, 'sdsd', 'sdsd', '2023-09-09 01:30:25', '2023-09-09 01:30:25', NULL),
(4, NULL, 2, '2023-09-01', '16:35:00', 8, 0, 0, 0, 0, 1, '1694223058209-114837295.jpg', NULL, 0, 'sdsd', 'sdsdsd', '2023-09-09 01:30:58', '2023-09-09 01:30:58', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `siniestros_hogar`
--

CREATE TABLE `siniestros_hogar` (
  `id_siniestro_hogar` int(11) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `fecha_siniestro` date NOT NULL,
  `hora_siniestro` time NOT NULL,
  `poliza_id` int(11) NOT NULL,
  `incendio_contenido` tinyint(1) NOT NULL,
  `incendio_edificio` tinyint(1) NOT NULL,
  `cristales_rotura_accidental` tinyint(1) NOT NULL,
  `cristales_rajadura_accidental` tinyint(1) NOT NULL,
  `robo_mobiliario` tinyint(1) NOT NULL,
  `denuncia_mobiliario` varchar(45) DEFAULT NULL,
  `notebook_rotura` tinyint(1) NOT NULL,
  `notebook_robo` tinyint(1) NOT NULL,
  `denuncia_notebook` varchar(45) DEFAULT NULL,
  `electrodomesticos_rotura` tinyint(1) NOT NULL,
  `electrodomesticos_robo` tinyint(1) NOT NULL,
  `denuncia_electro` varchar(45) DEFAULT NULL,
  `bicicletas_robo` tinyint(1) NOT NULL,
  `denuncia_bicicleta` varchar(45) DEFAULT NULL,
  `por_agua_daños_al_mobiliario` tinyint(1) NOT NULL,
  `otro_tipo_de_bienes` tinyint(1) NOT NULL,
  `descripcion_hechos` text NOT NULL,
  `bienes_afectados` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `siniestros_hogar`
--

INSERT INTO `siniestros_hogar` (`id_siniestro_hogar`, `cliente_persona_id`, `cliente_empresa_id`, `fecha_siniestro`, `hora_siniestro`, `poliza_id`, `incendio_contenido`, `incendio_edificio`, `cristales_rotura_accidental`, `cristales_rajadura_accidental`, `robo_mobiliario`, `denuncia_mobiliario`, `notebook_rotura`, `notebook_robo`, `denuncia_notebook`, `electrodomesticos_rotura`, `electrodomesticos_robo`, `denuncia_electro`, `bicicletas_robo`, `denuncia_bicicleta`, `por_agua_daños_al_mobiliario`, `otro_tipo_de_bienes`, `descripcion_hechos`, `bienes_afectados`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, NULL, '2023-09-06', '18:30:00', 4, 0, 0, 0, 1, 0, NULL, 0, 0, NULL, 0, 0, NULL, 0, NULL, 0, 0, 'dfghjhghh hhghghgh ghghgfghfgh fghfghgfh ', 'heladera, calefón, etc..', '2023-09-07 12:48:43', '2023-09-07 12:48:43', NULL),
(2, NULL, 1, '2023-09-04', '13:15:00', 3, 0, 0, 0, 0, 0, NULL, 0, 0, NULL, 0, 0, NULL, 1, NULL, 0, 0, 'fghdfghdgfh dgfhdgfhdgfh', 'fghdgfhd', '2023-09-07 12:51:27', '2023-09-07 12:51:27', NULL),
(3, 2, NULL, '2023-09-01', '08:25:00', 4, 0, 0, 0, 0, 1, '1694122964368-448972680.jpg', 0, 1, '1694122964373-113475261.pdf', 0, 1, '1694122964374-726109128.png', 1, '1694122964392-388006780.pdf', 0, 0, 'asdasd', 'asdasdasd', '2023-09-07 21:42:44', '2023-09-07 21:42:44', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `siniestros_moto`
--

CREATE TABLE `siniestros_moto` (
  `id_siniestro` int(11) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `fecha_siniestro` date NOT NULL,
  `hora_siniestro` time NOT NULL,
  `poliza_id` int(11) NOT NULL,
  `motivo` tinytext NOT NULL,
  `consecuencia` tinytext NOT NULL,
  `denuncia_policial` tinytext DEFAULT NULL,
  `lugar_calle` tinytext NOT NULL,
  `lugar_altura` tinytext NOT NULL,
  `lugar_cp` tinytext NOT NULL,
  `lugar_provincia` tinytext NOT NULL,
  `lugar_localidad` tinytext NOT NULL,
  `descripcion_hechos` text NOT NULL,
  `lugar_caracteristicas` tinytext NOT NULL,
  `registro_frente` tinytext NOT NULL,
  `registro_dorso` tinytext NOT NULL,
  `conducia_asegurado` tinytext NOT NULL,
  `lesionados_dentro_vehiculo` tinytext NOT NULL,
  `lesionados_fuera_vehiculo` tinytext NOT NULL,
  `vehiculos_terceros_involucrados` tinytext NOT NULL,
  `cnc_nombre` tinytext DEFAULT NULL,
  `cnc_apellido` tinytext DEFAULT NULL,
  `cnc_dni` tinytext DEFAULT NULL,
  `cnc_telefono` tinytext DEFAULT NULL,
  `cnc_nacimiento` date DEFAULT NULL,
  `cnc_nacionalidad` tinytext DEFAULT NULL,
  `cnc_calle` tinytext DEFAULT NULL,
  `cnc_altura` tinytext DEFAULT NULL,
  `cnc_cp` tinytext DEFAULT NULL,
  `cnc_provincia` tinytext DEFAULT NULL,
  `cnc_localidad` tinytext DEFAULT NULL,
  `ldv_cantidad` tinytext DEFAULT NULL,
  `ldv_nombre1` tinytext DEFAULT NULL,
  `ldv_nombre2` tinytext DEFAULT NULL,
  `ldv_apellido1` tinytext DEFAULT NULL,
  `ldv_apellido2` tinytext DEFAULT NULL,
  `ldv_dni1` tinytext DEFAULT NULL,
  `ldv_dni2` tinytext DEFAULT NULL,
  `ldv_telefono1` tinytext DEFAULT NULL,
  `ldv_telefono2` tinytext DEFAULT NULL,
  `lfv_cantidad` tinytext DEFAULT NULL,
  `lfv_nombre1` tinytext DEFAULT NULL,
  `lfv_nombre2` tinytext DEFAULT NULL,
  `lfv_nombre3` tinytext DEFAULT NULL,
  `lfv_nombre4` tinytext DEFAULT NULL,
  `lfv_nombre5` tinytext DEFAULT NULL,
  `lfv_apellido1` tinytext DEFAULT NULL,
  `lfv_apellido2` tinytext DEFAULT NULL,
  `lfv_apellido3` tinytext DEFAULT NULL,
  `lfv_apellido4` tinytext DEFAULT NULL,
  `lfv_apellido5` tinytext DEFAULT NULL,
  `lfv_dni1` tinytext DEFAULT NULL,
  `lfv_dni2` tinytext DEFAULT NULL,
  `lfv_dni3` tinytext DEFAULT NULL,
  `lfv_dni4` tinytext DEFAULT NULL,
  `lfv_dni5` tinytext DEFAULT NULL,
  `lfv_telefono1` tinytext DEFAULT NULL,
  `lfv_telefono2` tinytext DEFAULT NULL,
  `lfv_telefono3` tinytext DEFAULT NULL,
  `lfv_telefono4` tinytext DEFAULT NULL,
  `lfv_telefono5` tinytext DEFAULT NULL,
  `vti_patente` tinytext DEFAULT NULL,
  `vti_aseguradora` tinytext DEFAULT NULL,
  `vti_nombre` tinytext DEFAULT NULL,
  `vti_apellido` tinytext DEFAULT NULL,
  `vti_dni` tinytext DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `siniestros_moto`
--

INSERT INTO `siniestros_moto` (`id_siniestro`, `cliente_persona_id`, `cliente_empresa_id`, `fecha_siniestro`, `hora_siniestro`, `poliza_id`, `motivo`, `consecuencia`, `denuncia_policial`, `lugar_calle`, `lugar_altura`, `lugar_cp`, `lugar_provincia`, `lugar_localidad`, `descripcion_hechos`, `lugar_caracteristicas`, `registro_frente`, `registro_dorso`, `conducia_asegurado`, `lesionados_dentro_vehiculo`, `lesionados_fuera_vehiculo`, `vehiculos_terceros_involucrados`, `cnc_nombre`, `cnc_apellido`, `cnc_dni`, `cnc_telefono`, `cnc_nacimiento`, `cnc_nacionalidad`, `cnc_calle`, `cnc_altura`, `cnc_cp`, `cnc_provincia`, `cnc_localidad`, `ldv_cantidad`, `ldv_nombre1`, `ldv_nombre2`, `ldv_apellido1`, `ldv_apellido2`, `ldv_dni1`, `ldv_dni2`, `ldv_telefono1`, `ldv_telefono2`, `lfv_cantidad`, `lfv_nombre1`, `lfv_nombre2`, `lfv_nombre3`, `lfv_nombre4`, `lfv_nombre5`, `lfv_apellido1`, `lfv_apellido2`, `lfv_apellido3`, `lfv_apellido4`, `lfv_apellido5`, `lfv_dni1`, `lfv_dni2`, `lfv_dni3`, `lfv_dni4`, `lfv_dni5`, `lfv_telefono1`, `lfv_telefono2`, `lfv_telefono3`, `lfv_telefono4`, `lfv_telefono5`, `vti_patente`, `vti_aseguradora`, `vti_nombre`, `vti_apellido`, `vti_dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, NULL, '2023-09-06', '11:25:00', 5, 'colisión', 'siniestro con bicicletas', NULL, 'sdfsdf', '1245', '6544', 'Catamarca', 'Santa María', 'sdfsdfsdf dsfsdfsdfsdf', 'Avenida', '1694197071808-217257575.jpg', '1694197071815-168151438.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, '', '', NULL, NULL, NULL, '', '', NULL, NULL, NULL, '', '', NULL, NULL, NULL, '', '', '', '', '', '2023-09-08 18:17:51', '2023-09-08 18:17:51', NULL),
(2, 1, NULL, '2023-09-05', '15:40:00', 5, 'robo', 'robo del vehículo', '1694197156297-711424073.jpg', 'sdsdsds', '154', '6541', 'Chubut', 'Río Senguer', 'sdfsdfsdfsdfsdfsdfsdfs', 'Avenida', '1694197156298-585600380.jpg', '1694197156300-400277647.jpg', 'si', 'no', 'no', 'no', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, '', '', NULL, NULL, NULL, '', '', NULL, NULL, NULL, '', '', NULL, NULL, NULL, '', '', '', '', '', '2023-09-08 18:19:16', '2023-09-08 18:19:16', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `siniestros_otro`
--

CREATE TABLE `siniestros_otro` (
  `id_siniestro` int(11) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `fecha_siniestro` date NOT NULL,
  `hora_siniestro` time NOT NULL,
  `poliza_id` int(11) NOT NULL,
  `lugar_calle` varchar(45) NOT NULL,
  `lugar_altura` varchar(8) NOT NULL,
  `lugar_cp` varchar(8) NOT NULL,
  `lugar_provincia` varchar(45) NOT NULL,
  `lugar_localidad` varchar(45) NOT NULL,
  `descripcion_hechos` varchar(255) NOT NULL,
  `equipos_objetos_siniestrados` varchar(255) DEFAULT NULL,
  `denuncia_policial` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `siniestros_otro`
--

INSERT INTO `siniestros_otro` (`id_siniestro`, `cliente_persona_id`, `cliente_empresa_id`, `fecha_siniestro`, `hora_siniestro`, `poliza_id`, `lugar_calle`, `lugar_altura`, `lugar_cp`, `lugar_provincia`, `lugar_localidad`, `descripcion_hechos`, `equipos_objetos_siniestrados`, `denuncia_policial`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, NULL, '2023-08-31', '13:05:00', 9, 'dfgggfdfgd', '1234', '32145', 'San Juan', 'Iglesia', 'dfgdfg dfgdfgdfgdfg', 'dfgdfg dfg ghfjgfj dfd', '1694349487159-453051971.pdf', '2023-09-10 12:38:07', '2023-09-10 12:38:07', NULL),
(2, 1, NULL, '2023-08-30', '12:15:00', 9, 'dfgdfgdfg', '321', '6542', 'Entre Ríos', 'Tala', 'dfgdffdg', 'fdgdfg', NULL, '2023-09-10 12:38:51', '2023-09-10 12:38:51', NULL),
(3, NULL, 1, '2023-09-07', '15:35:00', 11, 'asdasdasd', '12345', '3254', 'San Luis', 'Gobernador Dupuy', 'asdasd', 'asdasd', NULL, '2023-09-10 12:56:13', '2023-09-10 12:56:13', NULL),
(4, NULL, 1, '2023-09-06', '15:30:00', 11, 'asdasd', '3214', '1245', 'San Luis', 'Belgrano', 'asdasd', 'asdasdas', '1694350610602-464970351.pdf', '2023-09-10 12:56:50', '2023-09-10 12:56:50', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetas_credito`
--

CREATE TABLE `tarjetas_credito` (
  `id_tarjeta_credito` int(11) NOT NULL,
  `numero_tarjeta` varchar(20) NOT NULL,
  `codigo_seguridad` varchar(10) NOT NULL,
  `banco` varchar(50) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `cliente_persona_id` int(11) DEFAULT NULL,
  `cliente_empresa_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tarjetas_credito`
--

INSERT INTO `tarjetas_credito` (`id_tarjeta_credito`, `numero_tarjeta`, `codigo_seguridad`, `banco`, `marca`, `cliente_persona_id`, `cliente_empresa_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '1234545566667777', '152', 'BVA Francés', 'Visa', 1, NULL, '2023-09-07 01:51:58', NULL, NULL),
(2, '1234545566662222', '563', 'Santander', 'Mastercard', NULL, 2, '2023-09-07 01:52:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_polizas`
--

CREATE TABLE `tipos_polizas` (
  `id_tipo_poliza` int(11) NOT NULL,
  `nombre_tipo_poliza` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_polizas`
--

INSERT INTO `tipos_polizas` (`id_tipo_poliza`, `nombre_tipo_poliza`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Auto', '2023-09-07 01:42:50', NULL, NULL),
(2, 'Moto', '2023-09-07 01:42:53', NULL, NULL),
(3, 'Hogar', '2023-09-07 01:43:19', NULL, NULL),
(4, 'Consorcio', '2023-09-07 01:43:45', NULL, NULL),
(5, 'Comercio', '2023-09-07 01:44:19', NULL, NULL),
(6, 'Robo', '2023-09-07 01:44:21', NULL, NULL),
(7, 'Incendio', '2023-09-07 01:45:13', NULL, NULL),
(8, 'Accidentes Personales', '2023-09-07 01:45:16', NULL, NULL),
(9, 'Transporte', '2023-09-07 01:46:09', NULL, NULL),
(10, 'Cauciones', '2023-09-07 01:46:12', NULL, NULL),
(11, 'Objetos Personales', '2023-09-07 01:47:26', NULL, NULL),
(12, 'Embarcaciones', '2023-09-07 01:47:29', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones_riesgos`
--

CREATE TABLE `ubicaciones_riesgos` (
  `id_ubicacion_riesgo` int(11) NOT NULL,
  `calle` varchar(50) NOT NULL,
  `altura` varchar(10) NOT NULL,
  `piso` varchar(10) DEFAULT NULL,
  `departamento` varchar(10) DEFAULT NULL,
  `cp` varchar(10) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ubicaciones_riesgos`
--

INSERT INTO `ubicaciones_riesgos` (`id_ubicacion_riesgo`, `calle`, `altura`, `piso`, `departamento`, `cp`, `localidad`, `provincia`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Velez Sarfield', '330', '1', '', '1834', 'Banfield', 'Buenos Aires', '2023-09-07 01:50:06', NULL, NULL),
(2, 'Moldes', '124', '', '', '1428', 'CABA', 'Ciudad Autónoma de Buenos Aires', '2023-09-07 01:50:09', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` varchar(50) NOT NULL,
  `calle` varchar(50) NOT NULL,
  `altura` varchar(10) NOT NULL,
  `piso` varchar(10) DEFAULT NULL,
  `departamento` varchar(10) DEFAULT NULL,
  `cp` varchar(10) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `nacimiento` date NOT NULL,
  `nivel_permiso_id` int(11) NOT NULL,
  `puesto` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `id_vendedor` int(11) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`id_vendedor`, `dni`, `nombre`, `apellido`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '25987654', 'Ricardo', 'Bochini', '2023-09-07 01:29:04', NULL, NULL),
(2, '25987654', 'Lionel', 'Scaloni', '2023-09-07 01:29:06', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aseguradoras`
--
ALTER TABLE `aseguradoras`
  ADD PRIMARY KEY (`id_aseguradora`);

--
-- Indices de la tabla `autos`
--
ALTER TABLE `autos`
  ADD PRIMARY KEY (`id_auto`);

--
-- Indices de la tabla `cbu_cuentas`
--
ALTER TABLE `cbu_cuentas`
  ADD PRIMARY KEY (`id_cbu_cuenta`),
  ADD KEY `cbu_cliente_persona` (`cliente_persona_id`),
  ADD KEY `cbu_cliente_empresa` (`cliente_empresa_id`);

--
-- Indices de la tabla `clientes_empresas`
--
ALTER TABLE `clientes_empresas`
  ADD PRIMARY KEY (`id_cliente_empresa`),
  ADD KEY `cliente_empresa_metodo_pago` (`metodo_pago_id`),
  ADD KEY `cliente_empresa_vendedor` (`vendedor_id`);

--
-- Indices de la tabla `clientes_personas`
--
ALTER TABLE `clientes_personas`
  ADD PRIMARY KEY (`id_cliente_persona`),
  ADD KEY `cliente_persona_metodo_pago` (`metodo_pago_id`),
  ADD KEY `cliente_persona_vendedor` (`vendedor_id`);

--
-- Indices de la tabla `embarcaciones`
--
ALTER TABLE `embarcaciones`
  ADD PRIMARY KEY (`id_embarcacion`);

--
-- Indices de la tabla `metodos_pago`
--
ALTER TABLE `metodos_pago`
  ADD PRIMARY KEY (`id_metodo_pago`);

--
-- Indices de la tabla `motos`
--
ALTER TABLE `motos`
  ADD PRIMARY KEY (`id_moto`);

--
-- Indices de la tabla `permisos_usuarios`
--
ALTER TABLE `permisos_usuarios`
  ADD PRIMARY KEY (`id_permisos`);

--
-- Indices de la tabla `polizas`
--
ALTER TABLE `polizas`
  ADD PRIMARY KEY (`id_poliza`),
  ADD KEY `poliza_tipo` (`tipo_poliza_id`),
  ADD KEY `poliza_cliente_persona` (`cliente_persona_id`),
  ADD KEY `poliza_cliente_empresa` (`cliente_empresa_id`),
  ADD KEY `poliza_auto` (`auto_id`),
  ADD KEY `poliza_moto` (`moto_id`),
  ADD KEY `poliza_ubicacion_riesgo` (`ubicacion_riesgo_id`),
  ADD KEY `poliza_aseguradora` (`aseguradora_id`),
  ADD KEY `poliza_embarcacion` (`embarcacion_id`);

--
-- Indices de la tabla `siniestros_auto`
--
ALTER TABLE `siniestros_auto`
  ADD PRIMARY KEY (`id_siniestro`),
  ADD KEY `siniestro_auto_cliente_persona` (`cliente_persona_id`),
  ADD KEY `siniestro_auto_cliente_empresa` (`cliente_empresa_id`),
  ADD KEY `siniestro_auto_poliza` (`poliza_id`);

--
-- Indices de la tabla `siniestros_consorcio`
--
ALTER TABLE `siniestros_consorcio`
  ADD PRIMARY KEY (`id_siniestro_consorcio`);

--
-- Indices de la tabla `siniestros_hogar`
--
ALTER TABLE `siniestros_hogar`
  ADD PRIMARY KEY (`id_siniestro_hogar`),
  ADD KEY `siniestro_hogar_cliente_persona` (`cliente_persona_id`),
  ADD KEY `siniestro_hogar_cliente_empresa` (`cliente_empresa_id`),
  ADD KEY `siniestro_hogar_poliza` (`poliza_id`);

--
-- Indices de la tabla `siniestros_moto`
--
ALTER TABLE `siniestros_moto`
  ADD PRIMARY KEY (`id_siniestro`),
  ADD KEY `siniestro_moto_cliente_persona` (`cliente_persona_id`),
  ADD KEY `siniestro_moto_cliente_empresa` (`cliente_empresa_id`),
  ADD KEY `siniestro_moto_poliza` (`poliza_id`);

--
-- Indices de la tabla `siniestros_otro`
--
ALTER TABLE `siniestros_otro`
  ADD PRIMARY KEY (`id_siniestro`),
  ADD KEY `siniestro_otro_cliente_empresa` (`cliente_empresa_id`),
  ADD KEY `siniestro_otro_cliente_persona` (`cliente_persona_id`),
  ADD KEY `siniestro_otro_poliza` (`poliza_id`);

--
-- Indices de la tabla `tarjetas_credito`
--
ALTER TABLE `tarjetas_credito`
  ADD PRIMARY KEY (`id_tarjeta_credito`),
  ADD KEY `tarjeta_credito_cliente_persona` (`cliente_persona_id`),
  ADD KEY `tarjeta_credito_cliente_empresa` (`cliente_empresa_id`);

--
-- Indices de la tabla `tipos_polizas`
--
ALTER TABLE `tipos_polizas`
  ADD PRIMARY KEY (`id_tipo_poliza`);

--
-- Indices de la tabla `ubicaciones_riesgos`
--
ALTER TABLE `ubicaciones_riesgos`
  ADD PRIMARY KEY (`id_ubicacion_riesgo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `usuarios_permisos` (`nivel_permiso_id`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`id_vendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aseguradoras`
--
ALTER TABLE `aseguradoras`
  MODIFY `id_aseguradora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `autos`
--
ALTER TABLE `autos`
  MODIFY `id_auto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cbu_cuentas`
--
ALTER TABLE `cbu_cuentas`
  MODIFY `id_cbu_cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clientes_empresas`
--
ALTER TABLE `clientes_empresas`
  MODIFY `id_cliente_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clientes_personas`
--
ALTER TABLE `clientes_personas`
  MODIFY `id_cliente_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `embarcaciones`
--
ALTER TABLE `embarcaciones`
  MODIFY `id_embarcacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodos_pago`
--
ALTER TABLE `metodos_pago`
  MODIFY `id_metodo_pago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `motos`
--
ALTER TABLE `motos`
  MODIFY `id_moto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `permisos_usuarios`
--
ALTER TABLE `permisos_usuarios`
  MODIFY `id_permisos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `polizas`
--
ALTER TABLE `polizas`
  MODIFY `id_poliza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `siniestros_auto`
--
ALTER TABLE `siniestros_auto`
  MODIFY `id_siniestro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `siniestros_consorcio`
--
ALTER TABLE `siniestros_consorcio`
  MODIFY `id_siniestro_consorcio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `siniestros_hogar`
--
ALTER TABLE `siniestros_hogar`
  MODIFY `id_siniestro_hogar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `siniestros_moto`
--
ALTER TABLE `siniestros_moto`
  MODIFY `id_siniestro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `siniestros_otro`
--
ALTER TABLE `siniestros_otro`
  MODIFY `id_siniestro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tarjetas_credito`
--
ALTER TABLE `tarjetas_credito`
  MODIFY `id_tarjeta_credito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipos_polizas`
--
ALTER TABLE `tipos_polizas`
  MODIFY `id_tipo_poliza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `ubicaciones_riesgos`
--
ALTER TABLE `ubicaciones_riesgos`
  MODIFY `id_ubicacion_riesgo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id_vendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cbu_cuentas`
--
ALTER TABLE `cbu_cuentas`
  ADD CONSTRAINT `cbu_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `cbu_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `clientes_empresas`
--
ALTER TABLE `clientes_empresas`
  ADD CONSTRAINT `cliente_empresa_metodo_pago` FOREIGN KEY (`metodo_pago_id`) REFERENCES `metodos_pago` (`id_metodo_pago`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `cliente_empresa_vendedor` FOREIGN KEY (`vendedor_id`) REFERENCES `vendedores` (`id_vendedor`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `clientes_personas`
--
ALTER TABLE `clientes_personas`
  ADD CONSTRAINT `cliente_persona_metodo_pago` FOREIGN KEY (`metodo_pago_id`) REFERENCES `metodos_pago` (`id_metodo_pago`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `cliente_persona_vendedor` FOREIGN KEY (`vendedor_id`) REFERENCES `vendedores` (`id_vendedor`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `polizas`
--
ALTER TABLE `polizas`
  ADD CONSTRAINT `poliza_aseguradora` FOREIGN KEY (`aseguradora_id`) REFERENCES `aseguradoras` (`id_aseguradora`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_auto` FOREIGN KEY (`auto_id`) REFERENCES `autos` (`id_auto`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_embarcacion` FOREIGN KEY (`embarcacion_id`) REFERENCES `embarcaciones` (`id_embarcacion`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_moto` FOREIGN KEY (`moto_id`) REFERENCES `motos` (`id_moto`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_tipo` FOREIGN KEY (`tipo_poliza_id`) REFERENCES `tipos_polizas` (`id_tipo_poliza`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `poliza_ubicacion_riesgo` FOREIGN KEY (`ubicacion_riesgo_id`) REFERENCES `ubicaciones_riesgos` (`id_ubicacion_riesgo`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `siniestros_auto`
--
ALTER TABLE `siniestros_auto`
  ADD CONSTRAINT `siniestro_auto_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_auto_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_auto_poliza` FOREIGN KEY (`poliza_id`) REFERENCES `polizas` (`id_poliza`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `siniestros_hogar`
--
ALTER TABLE `siniestros_hogar`
  ADD CONSTRAINT `siniestro_hogar_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_hogar_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_hogar_poliza` FOREIGN KEY (`poliza_id`) REFERENCES `polizas` (`id_poliza`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `siniestros_moto`
--
ALTER TABLE `siniestros_moto`
  ADD CONSTRAINT `siniestro_moto_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_moto_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_moto_poliza` FOREIGN KEY (`poliza_id`) REFERENCES `polizas` (`id_poliza`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `siniestros_otro`
--
ALTER TABLE `siniestros_otro`
  ADD CONSTRAINT `siniestro_otro_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_otro_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `siniestro_otro_poliza` FOREIGN KEY (`poliza_id`) REFERENCES `polizas` (`id_poliza`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `tarjetas_credito`
--
ALTER TABLE `tarjetas_credito`
  ADD CONSTRAINT `tarjeta_credito_cliente_empresa` FOREIGN KEY (`cliente_empresa_id`) REFERENCES `clientes_empresas` (`id_cliente_empresa`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `tarjeta_credito_cliente_persona` FOREIGN KEY (`cliente_persona_id`) REFERENCES `clientes_personas` (`id_cliente_persona`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_permisos` FOREIGN KEY (`nivel_permiso_id`) REFERENCES `permisos_usuarios` (`id_permisos`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
