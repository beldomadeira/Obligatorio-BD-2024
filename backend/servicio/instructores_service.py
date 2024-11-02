from db_connection import get_db_connection

class InstructorService:
    @staticmethod
    def get_all_instructors():
        connection=get_db_connection()
        cursor= connection.cursor(dictionary=True)
        cursor.execute("Select * from instructores")
        instructores= cursor.fetchall()
        cursor.close()
        connection.close()
        return instructores
    
    @staticmethod
    def get_instructor(ci):
        connection=get_db_connection()
        cursor= connection.cursor()
        cursor.execute("Select * from instructores where ci=%s",(ci,))
        instructor= cursor.fetchone()
        cursor.close()
        connection.close()
        return instructor
    
    @staticmethod
    def add_instructor(ci,nombre,apellido):
        connection=get_db_connection()
        cursor= connection.cursor()
        cursor.execute("INSERT INTO instructores (ci,nombre,apellido) VALUES (%s,%s,%s)",(ci,nombre,apellido,))
        connection.commit()
        cursor.close
        connection.close
        return {
            "ci":ci,
            "nombre":nombre,
            "apellido":apellido
        }
    
    @staticmethod
    def delete_instructor(ci):
        connection=get_db_connection()
        cursor = connection.cursor()
        cursor.execute("delete from instructores where ci=%s",(ci,))
        connection.commit()
        cursor.close
        connection.close
        return "Se elimino correctamente el instructor"
    
    @staticmethod
    def update_instructor(nombre,apellido,ci):
        connection=get_db_connection()
        cursor= connection.cursor()
        cursor.execute("UPDATE instructores SET nombre = %s, apellido= %s WHERE ci=%s",(nombre,apellido,ci,))
        connection.commit()
        cursor.close
        connection.close
        return {
            "ci":ci,
            "nombre":nombre,
            "apellido":apellido
        }