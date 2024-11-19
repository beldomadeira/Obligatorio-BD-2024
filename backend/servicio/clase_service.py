from db_connection import get_db_connection

class ClaseService:
    @staticmethod
    def get_all_clases():
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM clase")
        clases = cursor.fetchall()
        cursor.close()
        connection.close()
        return clases

    @staticmethod
    def get_clase(id):
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM clase WHERE id = %s", (id,))
        clase = cursor.fetchone()
        cursor.close()
        connection.close()
        if clase:
            return {
                "id": clase["id"],
                "ci_instructor": clase["ci_instructor"],
                "id_actividad": clase["id_actividad"],
                "id_turno": clase["id_turno"],
                "dictada": clase["dictada"]
            }
        return None

    @staticmethod
    def add_clase(ci_instructor, id_actividad, id_turno, dictada=False):
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO clase (ci_instructor, id_actividad, id_turno, dictada) VALUES (%s, %s, %s, %s)",
            (ci_instructor, id_actividad, id_turno, dictada)
        )
        connection.commit()
        rowId = cursor.lastrowid
        cursor.close()
        connection.close()
        return {
            "id": rowId,
            "ci_instructor": ci_instructor,
            "id_actividad": id_actividad,
            "id_turno": id_turno,
            "dictada": dictada
        }

    @staticmethod
    def delete_clase(id):
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("DELETE FROM clase WHERE id = %s", (id,))
        connection.commit()
        cursor.close()
        connection.close()
        return "Se eliminó correctamente la clase"

    @staticmethod
    def update_clase(ci_instructor, id_actividad, id_turno, dictada, id):
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            "UPDATE clase SET ci_instructor = %s, id_actividad = %s, id_turno = %s, dictada = %s WHERE id = %s",
            (ci_instructor, id_actividad, id_turno, dictada, id)
        )
        connection.commit()
        cursor.close()
        connection.close()
        return {
            "id": id,
            "ci_instructor": ci_instructor,
            "id_actividad": id_actividad,
            "id_turno": id_turno,
            "dictada": dictada
        }