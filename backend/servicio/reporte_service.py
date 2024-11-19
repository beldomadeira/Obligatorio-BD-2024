from db_connection import get_db_connection

class ReporteService:
    @staticmethod
    def actividades_mas_ingresos():
        """
        Consulta las actividades que generan más ingresos sumando el costo de equipamiento.
        """
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        query = """
            SELECT a.id, a.descripcion AS actividad, SUM(e.costo) AS total_ingresos
            FROM actividades a
            JOIN equipamiento e ON a.id = e.id_actividad
            GROUP BY a.id, a.descripcion
            ORDER BY total_ingresos DESC
            limit 5
        """
        cursor.execute(query)
        actividades = cursor.fetchall()
        cursor.close()
        connection.close()
        return actividades

    @staticmethod
    def actividades_con_mas_alumnos():
        """
        Consulta las actividades con mayor cantidad de alumnos inscritos.
        """
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        query = """
            SELECT a.id, a.descripcion AS actividad, COUNT(ac.ci_alumno) AS total_alumnos
            FROM actividades a
            JOIN clase c ON a.id = c.id_actividad
            JOIN alumno_clase ac ON c.id = ac.id_clase
            GROUP BY a.id, a.descripcion
            ORDER BY total_alumnos DESC
            limit 5
        """
        cursor.execute(query)
        actividades = cursor.fetchall()
        cursor.close()
        connection.close()
        return actividades

    @staticmethod
    def turnos_con_mas_clases_dictadas():
        """
        Consulta los turnos con más clases dictadas.
        """
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        query = """
            SELECT t.id, t.hora_inicio, t.hora_fin, COUNT(c.id) AS total_clases_dictadas
            FROM turnos t
            JOIN clase c ON t.id = c.id_turno
            WHERE c.dictada = TRUE
            GROUP BY t.id, t.hora_inicio, t.hora_fin
            ORDER BY total_clases_dictadas DESC
            limit 5
        """
        cursor.execute(query)
        turnos = cursor.fetchall()
        cursor.close()
        connection.close()
        return turnos