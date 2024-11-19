from db_connection import get_db_connection

class TurnosService:
    @staticmethod
    def get_all_turnos():
        connection=get_db_connection()
        cursor= connection.cursor(dictionary=True)
        cursor.execute("Select * from turnos")
        turnos= cursor.fetchall()
        cursor.close()
        connection.close()
        return turnos
    
    @staticmethod
    def get_turno(id):
        connection=get_db_connection()
        cursor= connection.cursor()
        cursor.execute("Select * from turnos where id=%s",(id,))
        turno= cursor.fetchone()
        cursor.close()
        connection.close()
        return {
            "id":turno[0],
            "hora_inicio":turno[1],
            "hora_fin":turno[2]
        }
    
    @staticmethod
    def add_turno(hora_inicio,hora_fin):
        connection=get_db_connection()
        cursor= connection.cursor()
        cursor.execute("INSERT INTO turnos (hora_inicio,hora_fin) VALUES (%s,%s)",(hora_inicio,hora_fin,))
        connection.commit()
        rowId=cursor.lastrowid
        cursor.close
        connection.close
        return {
            "id":rowId,
            "hora_inicio":hora_inicio,
            "hora_fin":hora_fin
        }
    
    @staticmethod
    def delete_turno(id):
        connection=get_db_connection()
        cursor = connection.cursor()
        cursor.execute("delete from turnos where id=%s",(id,))
        connection.commit()
        cursor.close
        connection.close
        return "Se elimino correctamente el turno"
    
    @staticmethod
    def update_turno(hora_inicio,hora_fin,id):
        connection=get_db_connection()
        cursor= connection.cursor()
        cursor.execute("UPDATE turnos SET hora_inicio = %s, hora_fin= %s WHERE id=%s",(hora_inicio,hora_fin,id,))
        connection.commit()
        cursor.close
        connection.close
        return {
           "id":id,
           "hora_inicio":hora_inicio,
           "hora_fin":hora_fin
        }