from flask import Blueprint, jsonify, request
from servicio.actividades_service import ActividadesService

actividades_bp = Blueprint('actividades_bp', __name__)

@actividades_bp.route('/actividades', methods=['GET'])
def listar_actividades():
    """
    Endpoint para listar todas las actividades.
    """
    actividades = ActividadesService.listar_actividades()
    return jsonify(actividades)

#! 
@actividades_bp.route('/actividades/<int:id>', methods=['GET'])
def consultar_actividad(id):
    """
    Endpoint para consultar una actividad específica por su ID.
    """
    actividad = ActividadesService.consultar_actividad(id)
    if actividad:
        return jsonify(actividad)
    return jsonify({"error": "Actividad no encontrada"}), 404
#! 
@actividades_bp.route('/actividad', methods=['POST'])
def alta_actividad():
    """
    Endpoint para crear una nueva actividad.
    """
    data = request.json
    #! validar descripcion y costo antes de continuar
    if ';' in data['descripcion'] or 'AND' in data['descripcion'] or '--' in data['descripcion'] or 'OR' in data['descripcion']:
        return jsonify({"error": "Descripción no válida"}), 400
        
    nueva_actividad = ActividadesService.alta_actividad(
        data['descripcion'], data['costo']
    )
    return jsonify(nueva_actividad), 201
#! 
@actividades_bp.route('/actividad/<int:id>', methods=['PUT'])
def modificacion_actividad(id):
    """
    Endpoint para modificar una actividad existente.
    """
    data = request.json
    if ';' in data['descripcion'] or 'AND' in data['descripcion'] or '--' in data['descripcion'] or 'OR' in data['descripcion']:
        return jsonify({"error": "Descripción no válida"}), 400
    actividad_actualizada = ActividadesService.modificacion_actividad(
        id, data['descripcion'], data['costo']
    )
    return jsonify(actividad_actualizada)
#! 
@actividades_bp.route('/actividad/<int:id>', methods=['DELETE'])
def baja_actividad(id):
    """
    Endpoint para eliminar una actividad específica por su ID.
    """
    resultado = ActividadesService.baja_actividad(id)
    return jsonify({"message": resultado})