USE escuelaDeportesNieve;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO login (correo, contraseña) VALUES 
('user1@example.com', 'password123'),
('user10@example.com', 'password890'),
('user11@example.com', 'password111'),
('user12@example.com', 'password222'),
('user13@example.com', 'password333'),
('user14@example.com', 'password444'),
('user15@example.com', 'password555'),
('user16@example.com', 'password666'),
('user17@example.com', 'password777'),
('user18@example.com', 'password888'),
('user19@example.com', 'password999'),
('user2@example.com', 'password456'),
('user20@example.com', 'password000'),
('user3@example.com', 'password789'),
('user4@example.com', 'password012'),
('user5@example.com', 'password345'),
('user6@example.com', 'password678'),
('user7@example.com', 'password901'),
('user8@example.com', 'password234'),
('user9@example.com', 'password567');

-- ----------------------------
-- Records of turnos
-- ----------------------------
INSERT INTO turnos (id, hora_inicio, hora_fin) VALUES 
(3, 12, 14),
(5, 16, 18),
(9, 9, 11);

-- ----------------------------
-- Records of alumnos
-- ----------------------------
INSERT INTO alumnos (ci, nombre, apellido, fecha_nacimiento, telefono_contacto, correo_electronico) VALUES 
('00001111', 'Valeria', 'Ramos', '1996-12-15', '600000010', 'valeria@example.com'),
('11112222', 'Javier', 'Santos', '1995-05-14', '600000001', 'javier@example.com'),
('11223210', 'Adriana', 'Hernández', '1986-01-30', '600000020', 'adriana@example.com'),
('12344321', 'Mateo', 'Soto', '1995-04-17', '600000011', 'mateo@example.com'),
('22223333', 'Carmen', 'Gil', '1993-04-23', '600000002', 'carmen@example.com'),
('23455432', 'Irene', 'Pérez', '1994-05-26', '600000012', 'irene@example.com'),
('33334444', 'Eduardo', 'Romero', '1990-03-12', '600000003', 'eduardo@example.com'),
('34566543', 'Alejandro', 'Vidal', '1991-10-10', '600000013', 'alejandro@example.com'),
('44445555', 'Beatriz', 'Ríos', '1997-06-30', '600000004', 'beatriz@example.com'),
('45677654', 'Natalia', 'Flores', '1993-11-24', '600000014', 'natalia@example.com'),
('55556666', 'Gonzalo', 'Vega', '1985-07-18', '600000005', 'gonzalo@example.com'),
('56788765', 'Sergio', 'Navarro', '1987-06-06', '600000015', 'sergio@example.com'),
('66667777', 'Lorena', 'Molina', '1992-09-08', '600000006', 'lorena@example.com'),
('67899876', 'Lucía', 'Martín', '1992-03-19', '600000016', 'lucia@example.com'),
('77778888', 'Víctor', 'Campos', '1988-11-11', '600000007', 'victor@example.com'),
('78910987', 'Fernando', 'Ruiz', '1998-08-08', '600000017', 'fernando@example.com'),
('88889999', 'Elisa', 'Paredes', '1991-02-02', '600000008', 'elisa@example.com'),
('89021098', 'Inés', 'López', '1996-09-09', '600000018', 'ines@example.com'),
('90132109', 'Álvaro', 'García', '1990-12-21', '600000019', 'alvaro@example.com'),
('99990000', 'Rodrigo', 'Cruz', '1989-01-20', '600000009', 'rodrigo@example.com');

-- ----------------------------
-- Records of instructores
-- ----------------------------
INSERT INTO instructores (ci, nombre, apellido) VALUES 
('10111213', 'Andrés', 'Muñoz'),
('11121314', 'Verónica', 'Castro'),
('11223344', 'Isabel', 'Jiménez'),
('1231312', 'Mario', 'Lopez'),
('12345678', 'Carlos', 'Pérez'),
('22334455', 'Ricardo', 'Hernández'),
('23456789', 'María', 'Gómez'),
('33445566', 'Elena', 'Moreno'),
('34567890', 'Luis', 'Rodríguez'),
('44556677', 'Santiago', 'Ruiz'),
('45678901', 'Ana', 'Martínez'),
('55667788', 'Paula', 'Ortiz'),
('56789012', 'Jorge', 'Sánchez'),
('66778899', 'Miguel', 'Torres'),
('67890123', 'Lucía', 'Díaz'),
('77889900', 'Sara', 'Cruz'),
('78901234', 'Pedro', 'López'),
('88990011', 'Héctor', 'Ramos'),
('89012345', 'Marta', 'García'),
('90123456', 'Raúl', 'Fernández'),
('99001122', 'Patricia', 'Suárez');

-- ----------------------------
-- Records of actividades
-- ----------------------------
INSERT INTO actividades (id, descripcion, costo) VALUES 
(1, 'Esquí básico', 150.00),
(2, 'Snowboard avanzado', 300.00),
(3, 'Escalada en hielo', 250.00),
(4, 'Esquí de fondo', 120.00),
(5, 'Raquetas de nieve', 80.00),
(6, 'Snowboard principiante', 180.00),
(7, 'Montañismo', 200.00),
(8, 'Parapente', 400.00),
(9, 'Tiro con arco en nieve', 90.00),
(10, 'Paseos en trineo', 50.00),
(11, 'Esquí intermedio', 170.00),
(12, 'Snowboard freestyle', 350.00),
(13, 'Alpinismo', 220.00),
(14, 'Rutas en motos de nieve', 500.00),
(15, 'Senderismo guiado', 60.00),
(16, 'Buceo bajo el hielo', 550.00),
(17, 'Espeleología de nieve', 300.00),
(18, 'Patinaje en hielo', 70.00),
(19, 'Ski touring', 180.00),
(20, 'Campamento de invierno', 100.00);

-- ----------------------------
-- Records of clase
-- ----------------------------
INSERT INTO clase (id, ci_instructor, id_actividad, id_turno, dictada) VALUES 
(3, '34567890', 3, 3, 0),
(5, '56789012', 5, 5, 0),
(9, '90123456', 9, 9, 0);

-- ----------------------------
-- Records of equipamiento
-- ----------------------------
INSERT INTO equipamiento (id, id_actividad, descripcion, costo) VALUES 
(1, 1, 'Casco de esquí', 20.00),
(2, 2, 'Tabla de snowboard', 150.00),
(3, 3, 'Piolet de escalada', 80.00),
(4, 4, 'Esquís de fondo', 100.00),
(5, 5, 'Raquetas de nieve', 40.00),
(6, 6, 'Botas de snowboard', 60.00),
(7, 7, 'Crampones', 50.00),
(8, 8, 'Equipo de parapente', 300.00),
(9, 9, 'Arco y flechas', 30.00),
(10, 10, 'Trineo', 20.00),
(11, 11, 'Esquís', 120.00),
(12, 12, 'Botas de snowboard freestyle', 70.00),
(13, 13, 'Soga de alpinismo', 90.00),
(14, 14, 'Moto de nieve', 400.00),
(15, 15, 'Ropa térmica', 30.00),
(16, 16, 'Traje de buceo', 150.00),
(17, 17, 'Luz de casco', 20.00),
(18, 18, 'Patines', 40.00),
(19, 19, 'Pieles de foca', 50.00),
(20, 20, 'Saco de dormir', 30.00);

-- ----------------------------
-- Records of alumno_clase
-- ----------------------------
INSERT INTO alumno_clase (id_clase, ci_alumno, id_equipamiento) VALUES 
(3, '33334444', 3),
(5, '55556666', 5),
(9, '99990000', 9);
