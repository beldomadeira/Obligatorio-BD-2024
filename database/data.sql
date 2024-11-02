-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS EscuelaDeportesNieve;
USE EscuelaDeportesNieve;

-- Tabla login
CREATE TABLE login (
    correo VARCHAR(100) PRIMARY KEY,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla actividades
CREATE TABLE actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    costo DECIMAL(10, 2) NOT NULL
);

-- Tabla equipamiento
CREATE TABLE equipamiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_actividad INT,
    descripcion VARCHAR(100) NOT NULL,
    costo DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_actividad) REFERENCES actividades(id)
);

-- Tabla instructores
CREATE TABLE instructores (
    ci CHAR(8) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL
);

-- Tabla turnos
CREATE TABLE turnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hora_inicio INT NOT NULL,
    hora_fin INT NOT NULL
);


-- Tabla alumnos
CREATE TABLE alumnos (
    ci CHAR(8) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    telefono_contacto CHAR(9) NOT NULL,
    correo_electronico VARCHAR(50) NOT NULL
);

-- Tabla clase
CREATE TABLE clase (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_instructor CHAR(8),
    id_actividad INT,
    id_turno INT,
    dictada BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (ci_instructor) REFERENCES instructores(ci) ON DELETE SET NULL,
    FOREIGN KEY (id_actividad) REFERENCES actividades(id) ON DELETE CASCADE,
    FOREIGN KEY (id_turno) REFERENCES turnos(id) ON DELETE CASCADE
);

-- Tabla alumno_clase
CREATE TABLE alumno_clase (
    id_clase INT,
    ci_alumno CHAR(8),
    id_equipamiento INT,
    PRIMARY KEY (id_clase, ci_alumno),
    FOREIGN KEY (id_clase) REFERENCES clase(id) ON DELETE CASCADE,
    FOREIGN KEY (ci_alumno) REFERENCES alumnos(ci) ON DELETE CASCADE,
    FOREIGN KEY (id_equipamiento) REFERENCES equipamiento(id) ON DELETE SET NULL
);