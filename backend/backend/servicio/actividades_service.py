from flask import jsonify
from db_connection import get_db_connection

class ActividadesService:
    @staticmethod
    def listar_actividades():
        """
        Lista todas las actividades en la base de datos.
        """
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM actividades")
        actividades = cursor.fetchall()
        cursor.close()
        connection.close()
        return actividades

    @staticmethod
    def consultar_actividad(id):
        """
        Consulta una actividad específica por su ID.
        """
        #! validar id como entero antes de continuar
        if(type(id) != int):
            return jsonify({"error": "ID no válido"}), 400
        
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM actividades WHERE id = %s", (id,))
        actividad = cursor.fetchone()
        cursor.close()
        connection.close()
        if actividad:
            return {
                "id": actividad["id"],
                "descripcion": actividad["descripcion"],
                "costo": actividad["costo"]
            }
        return None

    @staticmethod
    def alta_actividad(descripcion, costo):
        """
        Crea una nueva actividad en la base de datos.
        """
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO actividades (descripcion, costo) VALUES (%s, %s)",
            (descripcion, costo)
        )
        connection.commit()
        rowId = cursor.lastrowid
        cursor.close()
        connection.close()
        return {
            "id": rowId,
            "descripcion": descripcion,
            "costo": costo
        }

    @staticmethod
    def modificacion_actividad(id, descripcion, costo):
        """
        Modifica una actividad existente en la base de datos.
        """
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            UPDATE actividades 
            SET descripcion = %s, costo = %s 
            WHERE id = %s
            """,
            (descripcion, costo, id)
        )
        connection.commit()
        cursor.close()
        connection.close()
        return {
            "id": id,
            "descripcion": descripcion,
            "costo": costo
        }

    @staticmethod
    def baja_actividad(id):
        """
        Elimina una actividad de la base de datos por su ID.
        """
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("DELETE FROM actividades WHERE id = %s", (id,))
        connection.commit()
        cursor.close()
        connection.close()
        return f"La actividad con ID {id} ha sido eliminada correctamente."