from db_connection import get_db_connection

class AlumnoService:
    @staticmethod
    def alta_alumno(ci, nombre, apellido, fecha_nacimiento, telefono_contacto, correo_electronico):
        """
        Registra un nuevo alumno en la base de datos (Alta).
        """
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            INSERT INTO alumnos (ci, nombre, apellido, fecha_nacimiento, telefono_contacto, correo_electronico)
            VALUES (%s, %s, %s, %s, %s, %s)
            """,
            (ci, nombre, apellido, fecha_nacimiento, telefono_contacto, correo_electronico)
        )
        connection.commit()
        cursor.close()
        connection.close()
        return {
            "ci": ci,
            "nombre": nombre,
            "apellido": apellido,
            "fecha_nacimiento": fecha_nacimiento,
            "telefono_contacto": telefono_contacto,
            "correo_electronico": correo_electronico
        }

    @staticmethod
    def baja_alumno(ci):
        """
        Elimina un alumno específico de la base de datos por su cédula (Baja).
        """
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("DELETE FROM alumnos WHERE ci = %s", (ci,))
        connection.commit()
        cursor.close()
        connection.close()
        return f"El alumno con CI {ci} ha sido eliminado correctamente."

    @staticmethod
    def modificacion_alumno(ci, nombre, apellido, fecha_nacimiento, telefono_contacto, correo_electronico):
        """
        Modifica la información de un alumno existente (Modificación).
        """
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            UPDATE alumnos 
            SET nombre = %s, apellido = %s, fecha_nacimiento = %s, 
                telefono_contacto = %s, correo_electronico = %s 
            WHERE ci = %s
            """,
            (nombre, apellido, fecha_nacimiento, telefono_contacto, correo_electronico, ci)
        )
        connection.commit()
        cursor.close()
        connection.close()
        return {
            "ci": ci,
            "nombre": nombre,
            "apellido": apellido,
            "fecha_nacimiento": fecha_nacimiento,
            "telefono_contacto": telefono_contacto,
            "correo_electronico": correo_electronico
        }

    @staticmethod
    def consulta_alumno(ci):
        """
        Consulta la información de un alumno específico por su cédula (Consulta).
        """
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM alumnos WHERE ci = %s", (ci,))
        alumno = cursor.fetchone()
        cursor.close()
        connection.close()
        if alumno:
            return {
                "ci": alumno["ci"],
                "nombre": alumno["nombre"],
                "apellido": alumno["apellido"],
                "fecha_nacimiento": alumno["fecha_nacimiento"],
                "telefono_contacto": alumno["telefono_contacto"],
                "correo_electronico": alumno["correo_electronico"]
            }
        return None

    @staticmethod
    def listar_alumnos():
        """
        Lista todos los alumnos registrados en la base de datos (Consulta de todos).
        """
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM alumnos")
        alumnos = cursor.fetchall()
        cursor.close()
        connection.close()
        return alumnos
