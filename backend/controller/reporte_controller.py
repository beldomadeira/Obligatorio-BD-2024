from flask import Blueprint, jsonify
from servicio.reporte_service import ReporteService

reporte_bp = Blueprint('reporte_bp', __name__)

@reporte_bp.route('/reportes/actividades-mas-ingresos', methods=['GET'])
def actividades_mas_ingresos():
    """
    Endpoint para obtener las actividades que más ingresos generan.
    """
    actividades = ReporteService.actividades_mas_ingresos()
    return jsonify(actividades)

@reporte_bp.route('/reportes/actividades-con-mas-alumnos', methods=['GET'])
def actividades_con_mas_alumnos():
    """
    Endpoint para obtener las actividades con más alumnos inscritos.
    """
    actividades = ReporteService.actividades_con_mas_alumnos()
    return jsonify(actividades)

@reporte_bp.route('/reportes/turnos-con-mas-clases-dictadas', methods=['GET'])
def turnos_con_mas_clases_dictadas():
    """
    Endpoint para obtener los turnos con más clases dictadas.
    """
    turnos = ReporteService.turnos_con_mas_clases_dictadas()
    return jsonify(turnos)