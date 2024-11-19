from flask import Blueprint, jsonify, request
from servicio.alumnos_service import AlumnoService

alumnos_bp = Blueprint('alumnos_bp', __name__)

@alumnos_bp.route('/alumnos', methods=['GET'])
def listar_alumnos():
    """
    Endpoint para listar todos los alumnos.
    """
    alumnos = AlumnoService.listar_alumnos()
    return jsonify(alumnos)

@alumnos_bp.route('/alumnos/<string:ci>', methods=['GET'])
def consultar_alumno(ci):
    """
    Endpoint para consultar un alumno específico por su cédula.
    """
    alumno = AlumnoService.consulta_alumno(ci)
    if alumno:
        return jsonify(alumno)
    return jsonify({"error": "Alumno no encontrado"}), 404

@alumnos_bp.route('/alumno', methods=['POST'])
def alta_alumno():
    """
    Endpoint para registrar un nuevo alumno.
    """
    data = request.json
    nuevo_alumno = AlumnoService.alta_alumno(
        data['ci'], data['nombre'], data['apellido'], 
        data['fecha_nacimiento'], data['telefono_contacto'], data['correo_electronico']
    )
    return jsonify(nuevo_alumno), 201

@alumnos_bp.route('/alumno/<string:ci>', methods=['PUT'])
def modificacion_alumno(ci):
    """
    Endpoint para modificar la información de un alumno existente.
    """
    data = request.json
    alumno_actualizado = AlumnoService.modificacion_alumno(
        ci, data['nombre'], data['apellido'], 
        data['fecha_nacimiento'], data['telefono_contacto'], data['correo_electronico']
    )
    return jsonify(alumno_actualizado)

@alumnos_bp.route('/alumno/<string:ci>', methods=['DELETE'])
def baja_alumno(ci):
    """
    Endpoint para eliminar un alumno específico.
    """
    resultado = AlumnoService.baja_alumno(ci)
    return jsonify({"message": resultado})
