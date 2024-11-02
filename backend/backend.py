from flask import Flask
from db_connection import get_db_connection
from config import config
from controller.instructores_controller import instructor_bp
from controller.turnos_controller import turnos_bp
# instalar mysql-connector-python en lugar de mysql-connector

app= Flask(__name__)

app.register_blueprint(instructor_bp, url_prefix='/api')
app.register_blueprint(turnos_bp,url_prefix='/api')


app.run()