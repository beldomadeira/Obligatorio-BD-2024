from flask import Flask
from db_connection import get_db_connection
from config import config
from controller.instructores_controller import instructor_bp
from controller.turnos_controller import turnos_bp
from controller.alumnos_controller import alumnos_bp
from controller.actividades_controller import actividades_bp
from controller.clase_controller import clase_bp
from controller.reporte_controller import reporte_bp
from flask_cors import CORS
# instalar mysql-connector-python en lugar de mysql-connector

app= Flask(__name__)
CORS(app,
    origins='https://basededatos-38cb7.web.app',)

app.register_blueprint(instructor_bp, url_prefix='/api')
app.register_blueprint(turnos_bp,url_prefix='/api')
app.register_blueprint(alumnos_bp, url_prefix='/api')
app.register_blueprint(actividades_bp, url_prefix='/api')
app.register_blueprint(clase_bp, url_prefix='/api')
app.register_blueprint(reporte_bp, url_prefix='/api')

@app.route("/ping")
def ping():
    return "pong", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)

app.run()