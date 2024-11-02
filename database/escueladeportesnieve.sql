-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('user1@example.com', 'password123');
INSERT INTO `login` VALUES ('user10@example.com', 'password890');
INSERT INTO `login` VALUES ('user11@example.com', 'password111');
INSERT INTO `login` VALUES ('user12@example.com', 'password222');
INSERT INTO `login` VALUES ('user13@example.com', 'password333');
INSERT INTO `login` VALUES ('user14@example.com', 'password444');
INSERT INTO `login` VALUES ('user15@example.com', 'password555');
INSERT INTO `login` VALUES ('user16@example.com', 'password666');
INSERT INTO `login` VALUES ('user17@example.com', 'password777');
INSERT INTO `login` VALUES ('user18@example.com', 'password888');
INSERT INTO `login` VALUES ('user19@example.com', 'password999');
INSERT INTO `login` VALUES ('user2@example.com', 'password456');
INSERT INTO `login` VALUES ('user20@example.com', 'password000');
INSERT INTO `login` VALUES ('user3@example.com', 'password789');
INSERT INTO `login` VALUES ('user4@example.com', 'password012');
INSERT INTO `login` VALUES ('user5@example.com', 'password345');
INSERT INTO `login` VALUES ('user6@example.com', 'password678');
INSERT INTO `login` VALUES ('user7@example.com', 'password901');
INSERT INTO `login` VALUES ('user8@example.com', 'password234');
INSERT INTO `login` VALUES ('user9@example.com', 'password567');


-- ----------------------------
-- Records of turnos
-- ----------------------------
INSERT INTO `turnos` VALUES (3, 12, 14);
INSERT INTO `turnos` VALUES (5, 16, 18);
INSERT INTO `turnos` VALUES (9, 9, 11);

INSERT INTO `alumnos` VALUES ('00001111', 'Valeria', 'Ramos', '1996-12-15', '600000010', 'valeria@example.com');
INSERT INTO `alumnos` VALUES ('11112222', 'Javier', 'Santos', '1995-05-14', '600000001', 'javier@example.com');
INSERT INTO `alumnos` VALUES ('11223210', 'Adriana', 'Hernández', '1986-01-30', '600000020', 'adriana@example.com');
INSERT INTO `alumnos` VALUES ('12344321', 'Mateo', 'Soto', '1995-04-17', '600000011', 'mateo@example.com');
INSERT INTO `alumnos` VALUES ('22223333', 'Carmen', 'Gil', '1993-04-23', '600000002', 'carmen@example.com');
INSERT INTO `alumnos` VALUES ('23455432', 'Irene', 'Pérez', '1994-05-26', '600000012', 'irene@example.com');
INSERT INTO `alumnos` VALUES ('33334444', 'Eduardo', 'Romero', '1990-03-12', '600000003', 'eduardo@example.com');
INSERT INTO `alumnos` VALUES ('34566543', 'Alejandro', 'Vidal', '1991-10-10', '600000013', 'alejandro@example.com');
INSERT INTO `alumnos` VALUES ('44445555', 'Beatriz', 'Ríos', '1997-06-30', '600000004', 'beatriz@example.com');
INSERT INTO `alumnos` VALUES ('45677654', 'Natalia', 'Flores', '1993-11-24', '600000014', 'natalia@example.com');
INSERT INTO `alumnos` VALUES ('55556666', 'Gonzalo', 'Vega', '1985-07-18', '600000005', 'gonzalo@example.com');
INSERT INTO `alumnos` VALUES ('56788765', 'Sergio', 'Navarro', '1987-06-06', '600000015', 'sergio@example.com');
INSERT INTO `alumnos` VALUES ('66667777', 'Lorena', 'Molina', '1992-09-08', '600000006', 'lorena@example.com');
INSERT INTO `alumnos` VALUES ('67899876', 'Lucía', 'Martín', '1992-03-19', '600000016', 'lucia@example.com');
INSERT INTO `alumnos` VALUES ('77778888', 'Víctor', 'Campos', '1988-11-11', '600000007', 'victor@example.com');
INSERT INTO `alumnos` VALUES ('78910987', 'Fernando', 'Ruiz', '1998-08-08', '600000017', 'fernando@example.com');
INSERT INTO `alumnos` VALUES ('88889999', 'Elisa', 'Paredes', '1991-02-02', '600000008', 'elisa@example.com');
INSERT INTO `alumnos` VALUES ('89021098', 'Inés', 'López', '1996-09-09', '600000018', 'ines@example.com');
INSERT INTO `alumnos` VALUES ('90132109', 'Álvaro', 'García', '1990-12-21', '600000019', 'alvaro@example.com');
INSERT INTO `alumnos` VALUES ('99990000', 'Rodrigo', 'Cruz', '1989-01-20', '600000009', 'rodrigo@example.com');


-- ----------------------------
-- Records of instructores
-- ----------------------------
INSERT INTO `instructores` VALUES ('10111213', 'Andrés', 'Muñoz');
INSERT INTO `instructores` VALUES ('11121314', 'Verónica', 'Castro');
INSERT INTO `instructores` VALUES ('11223344', 'Isabel', 'Jiménez');
INSERT INTO `instructores` VALUES ('1231312', 'mario', 'lopez');
INSERT INTO `instructores` VALUES ('12345678', 'Carlos', 'Pérez');
INSERT INTO `instructores` VALUES ('22334455', 'Ricardo', 'Hernández');
INSERT INTO `instructores` VALUES ('23456789', 'María', 'Gómez');
INSERT INTO `instructores` VALUES ('33445566', 'Elena', 'Moreno');
INSERT INTO `instructores` VALUES ('34567890', 'Luis', 'Rodríguez');
INSERT INTO `instructores` VALUES ('44556677', 'Santiago', 'Ruiz');
INSERT INTO `instructores` VALUES ('45678901', 'Ana', 'Martínez');
INSERT INTO `instructores` VALUES ('55667788', 'Paula', 'Ortiz');
INSERT INTO `instructores` VALUES ('56789012', 'Jorge', 'Sánchez');
INSERT INTO `instructores` VALUES ('66778899', 'Miguel', 'Torres');
INSERT INTO `instructores` VALUES ('67890123', 'Lucía', 'Díaz');
INSERT INTO `instructores` VALUES ('77889900', 'Sara', 'Cruz');
INSERT INTO `instructores` VALUES ('78901234', 'Pedro', 'López');
INSERT INTO `instructores` VALUES ('88990011', 'Héctor', 'Ramos');
INSERT INTO `instructores` VALUES ('89012345', 'Marta', 'García');
INSERT INTO `instructores` VALUES ('90123456', 'Raúl', 'Fernández');
INSERT INTO `instructores` VALUES ('99001122', 'Patricia', 'Suárez');



-- ----------------------------
-- Records of actividades
-- ----------------------------
INSERT INTO `actividades` VALUES (1, 'Esquí básico', 150.00);
INSERT INTO `actividades` VALUES (2, 'Snowboard avanzado', 300.00);
INSERT INTO `actividades` VALUES (3, 'Escalada en hielo', 250.00);
INSERT INTO `actividades` VALUES (4, 'Esquí de fondo', 120.00);
INSERT INTO `actividades` VALUES (5, 'Raquetas de nieve', 80.00);
INSERT INTO `actividades` VALUES (6, 'Snowboard principiante', 180.00);
INSERT INTO `actividades` VALUES (7, 'Montañismo', 200.00);
INSERT INTO `actividades` VALUES (8, 'Parapente', 400.00);
INSERT INTO `actividades` VALUES (9, 'Tiro con arco en nieve', 90.00);
INSERT INTO `actividades` VALUES (10, 'Paseos en trineo', 50.00);
INSERT INTO `actividades` VALUES (11, 'Esquí intermedio', 170.00);
INSERT INTO `actividades` VALUES (12, 'Snowboard freestyle', 350.00);
INSERT INTO `actividades` VALUES (13, 'Alpinismo', 220.00);
INSERT INTO `actividades` VALUES (14, 'Rutas en motos de nieve', 500.00);
INSERT INTO `actividades` VALUES (15, 'Senderismo guiado', 60.00);
INSERT INTO `actividades` VALUES (16, 'Buceo bajo el hielo', 550.00);
INSERT INTO `actividades` VALUES (17, 'Espeleología de nieve', 300.00);
INSERT INTO `actividades` VALUES (18, 'Patinaje en hielo', 70.00);
INSERT INTO `actividades` VALUES (19, 'Ski touring', 180.00);
INSERT INTO `actividades` VALUES (20, 'Campamento de invierno', 100.00);

INSERT INTO `clase` VALUES (3, '34567890', 3, 3, 0);
INSERT INTO `clase` VALUES (5, '56789012', 5, 5, 0);
INSERT INTO `clase` VALUES (9, '90123456', 9, 9, 0);

INSERT INTO `equipamiento` VALUES (1, 1, 'Casco de esquí', 20.00);
INSERT INTO `equipamiento` VALUES (2, 2, 'Tabla de snowboard', 150.00);
INSERT INTO `equipamiento` VALUES (3, 3, 'Piolet de escalada', 80.00);
INSERT INTO `equipamiento` VALUES (4, 4, 'Esquís de fondo', 100.00);
INSERT INTO `equipamiento` VALUES (5, 5, 'Raquetas de nieve', 40.00);
INSERT INTO `equipamiento` VALUES (6, 6, 'Botas de snowboard', 60.00);
INSERT INTO `equipamiento` VALUES (7, 7, 'Crampones', 50.00);
INSERT INTO `equipamiento` VALUES (8, 8, 'Equipo de parapente', 300.00);
INSERT INTO `equipamiento` VALUES (9, 9, 'Arco y flechas', 30.00);
INSERT INTO `equipamiento` VALUES (10, 10, 'Trineo', 20.00);
INSERT INTO `equipamiento` VALUES (11, 11, 'Esquís', 120.00);
INSERT INTO `equipamiento` VALUES (12, 12, 'Botas de snowboard freestyle', 70.00);
INSERT INTO `equipamiento` VALUES (13, 13, 'Soga de alpinismo', 90.00);
INSERT INTO `equipamiento` VALUES (14, 14, 'Moto de nieve', 400.00);
INSERT INTO `equipamiento` VALUES (15, 15, 'Ropa térmica', 30.00);
INSERT INTO `equipamiento` VALUES (16, 16, 'Traje de buceo', 150.00);
INSERT INTO `equipamiento` VALUES (17, 17, 'Luz de casco', 20.00);
INSERT INTO `equipamiento` VALUES (18, 18, 'Patines', 40.00);
INSERT INTO `equipamiento` VALUES (19, 19, 'Pieles de foca', 50.00);
INSERT INTO `equipamiento` VALUES (20, 20, 'Saco de dormir', 30.00);

INSERT INTO `alumno_clase` VALUES (3, '33334444', 3);
INSERT INTO `alumno_clase` VALUES (5, '55556666', 5);
INSERT INTO `alumno_clase` VALUES (9, '99990000', 9);




