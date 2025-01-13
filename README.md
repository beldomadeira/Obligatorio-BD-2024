# Proyecto Final BD1 - UCU

Desarrollo de un sistema administrativo para la futura escuela de deportes de nieve de la UCU, proyecto que busca ampliar la oferta deportiva mediante actividades únicas en el contexto nacional. El sistema fue diseñado para gestionar de manera eficiente las operaciones de la escuela, abarcando la administración de instructores, turnos, alumnos, clases y alquiler de equipamiento.

## Funcionalidades Principales

- Alta, baja y modificación (ABM) de instructores, turnos y alumnos.
- Gestión de actividades y clases.
- Generación de reportes clave:
  - Actividades con mayores ingresos.
  - Actividades más concurridas.
  - Turnos más utilizados.

El proyecto fue desarrollado utilizando un enfoque modular, empleando **Python** para la construcción del backend y una base de datos relacional **MySQL** para almacenar la información. El diseño se centró en garantizar la consistencia de los datos mediante validaciones en todas las capas del sistema.

Este informe detalla:
- Decisiones de implementación.
- Mejoras realizadas al modelo de datos original.
- Bitácora del trabajo llevado a cabo.
- Fuentes consultadas.

A través de este desarrollo, se busca ofrecer una solución robusta y escalable que facilite las operaciones de la escuela y permita su adaptación a futuras necesidades.

---

## Estructura del Proyecto y Tecnologías Utilizadas

El proyecto fue diseñado con una arquitectura modular, priorizando la separación de responsabilidades y la escalabilidad. La estructura está organizada en las siguientes capas y componentes principales:

### Backend

- Implementado en **Python** utilizando el framework **Flask**.
- Manejo de lógica del negocio mediante rutas RESTful para:
  - ABM de instructores, turnos, alumnos y actividades.
  - Generación de reportes.
- Organización en módulos y paquetes para separar controladores, servicios y validaciones.
- Uso de la librería `mysql-connector-python` para la conexión con la base de datos.

### Base de Datos

- **MySQL** como sistema de gestión de bases de datos relacional.
- Modelo diseñado y optimizado cumpliendo con reglas de normalización.
- Gestión eficiente de tablas como:
  - **Instructores**
  - **Alumnos**
  - **Turnos**
  - **Clases**
  - **Actividades**
- Scripts SQL desarrollados sin ORM para mayor control y optimización.

---

## Fundamentación de las Decisiones de Implementación

### Elección del Sistema de Gestión de Bases de Datos (SGBD)

- Sistema relacional debido a:
  - Naturaleza estructurada de los datos.
  - Múltiples relaciones entre entidades (alumnos, actividades, instructores, clases).
- Se consideraron **MySQL** y **SQL Server** por:
  - Robustez.
  - Amplia documentación.
  - Compatibilidad con herramientas modernas.

### Diseño del Modelo de Datos

- **Entidades principales**:  
  Tablas como `alumnos`, `actividades`, `instructores` y `clases` representan los elementos fundamentales del sistema. Cada entidad cuenta con un identificador único (`ci`, `id`, etc.).
  
- **Relaciones entre entidades**:  
  - Uno a muchos: Equipamiento relacionado con actividades.
  - Muchos a muchos: `alumno_clase` conecta alumnos y clases.
  - Uso de claves foráneas para mantener integridad referencial.

- **Restricciones**:  
  - `ON DELETE CASCADE` y `ON DELETE SET NULL` para manejar eliminaciones de registros relacionados.

### Mejoras Implementadas o Consideradas

- **Integridad y consistencia**:
  - Relaciones y restricciones garantizan la integridad de los datos.
  - Ejemplo: Eliminación automática de clases asociadas a una actividad eliminada.

- **Optimización del diseño**:
  - Modelo normalizado para evitar redundancias.
  - Tabla intermedia `alumno_clase` para gestionar relaciones muchos a muchos.

- **Escalabilidad**:
  - Diseño permite la fácil incorporación de nuevas actividades, instructores y turnos.

### Posibles Mejoras Futuras

- **Índices adicionales**:  
  Implementar índices en campos usados frecuentemente (e.g., `ci_alumno`, `id_clase`).

- **Validaciones en la base de datos**:  
  Incorporar restricciones como límites en costos o longitudes de cadenas.

---

## Frontend

- Desarrollado con **React**.
- Interfaz web intuitiva y responsive.
- Validaciones adicionales para garantizar la consistencia de los datos ingresados.

---

## Despliegue

Inicialmente, se planteó el uso de **Docker** para el despliegue, pero surgieron inconvenientes con **MySQL** y su compatibilidad con contenedores. Como alternativa, se evaluaron plataformas con opciones de hosting gratuito.

---

## Instructivo para Ejecutar la Aplicación de Forma Local

A continuación, se describen los pasos necesarios para configurar y ejecutar la aplicación de forma local en un entorno de desarrollo.

### Requisitos Previos

1. Instalación de herramientas necesarias:
   - **Python** 3.9 o superior  
   - **MySQL**  
   - **Node.js** y **npm**  
   - **Git**

2. Clonar el repositorio del proyecto:
   - **git clone** https://github.com/beldomadeira/Obligatorio-BD-2024.git

3. Configurar variables de entorno:
- Actualizar el archivo config.py que se encuentra en el directorio backend con los siguientes valores:
  
DB_HOST = "localhost"
DB_USER = "tu_usuario"
DB_PASSWORD = "tu_contraseña"
DB_NAME = "escuelaDeportesNieve"


### Configuración del Backend

- Instalar las dependencias del backend:
    - Navegar al directorio del backend y ejecutar: pip install -r requirements.txt


### Crear la base de datos:

- Abrir MySQL o un cliente SQL.
- Ejecutar los dos scripts de creación de base de datos que se encuentran dentro de la carpeta Database.
- Iniciar el servidor del backend:
Ejecutar el siguiente comando desde el directorio del backend: python backend.py

### Configuración del Frontend

- Instalar las dependencias del frontend:
    - Navegar al directorio del frontend y ejecutar: npm install

- Iniciar el servidor del frontend: npm start

### Ejecución de la Aplicación
Después de completar los pasos anteriores, la aplicación estará lista y funcionando en tu entorno local.
