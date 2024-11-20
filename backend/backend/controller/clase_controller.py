from flask import Blueprint, jsonify, request
from servicio.clase_service import ClaseService

clase_bp = Blueprint('clase_bp', __name__)

@clase_bp.route('/clases', methods=['GET'])
def get_all_clases():
    """
    Endpoint para obtener todas las clases.
    """
    clases = ClaseService.get_all_clases()
    return jsonify(clases)

@clase_bp.route('/clases/<int:id>', methods=['GET'])
def get_clase(id):
    """
    Endpoint para obtener una clase específica por ID.
    """
    clase = ClaseService.get_clase(id)
    if clase:
        return jsonify(clase)
    return jsonify({"error": "Clase no encontrada"}), 404

@clase_bp.route('/clase', methods=['POST'])
def add_clase():
    """
    Endpoint para agregar una nueva clase.
    """
    data = request.json
    nueva_clase = ClaseService.add_clase(
        data['ci_instructor'], data['id_actividad'], data['id_turno'], data.get('dictada', False)
    )
    return jsonify(nueva_clase), 201

@clase_bp.route('/clase/<int:id>', methods=['PUT'])
def update_clase(id):
    """
    Endpoint para actualizar una clase existente.
    """
    data = request.json
    clase_actualizada = ClaseService.update_clase(
        data['ci_instructor'], data['id_actividad'], data['id_turno'], data['dictada'], id
    )
    return jsonify(clase_actualizada)

@clase_bp.route('/clase/<int:id>', methods=['DELETE'])
def delete_clase(id):
    """
    Endpoint para eliminar una clase específica.
    """
    resultado = ClaseService.delete_clase(id)
    return jsonify({"message": resultado})