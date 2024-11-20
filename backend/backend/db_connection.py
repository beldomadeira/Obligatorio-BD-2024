import mysql.connector  
from config import config

def get_db_connection():
    connection= mysql.connector.connect(
        host=config.DB_HOST,
        user=config.DB_USER,
        password=config.DB_PASSWORD,
        database=config.DB_NAME,
        auth_plugin='mysql_native_password'
    )
    return connection