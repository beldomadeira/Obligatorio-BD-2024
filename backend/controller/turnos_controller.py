from flask import Blueprint, jsonify, request
from servicio.turnos_service import TurnosService
from datetime import datetime

turnos_bp=Blueprint('turnos_bp',__name__)

@turnos_bp.route('/turnos',methods=['GET'])
def get_all_turnos():
    turnos= TurnosService.get_all_turnos()
    return jsonify(turnos)

@turnos_bp.route('/turnos/<int:id>',methods=['GET'])
def get_turno(id):
    turno= TurnosService.get_turno(id)
    return jsonify(turno)

@turnos_bp.route('/turno',methods=['POST'])
def add_turno():
    data=request.json
    return TurnosService.add_turno(data['hora_inicio'],data['hora_fin'])

@turnos_bp.route('/turno/<int:id>',methods=['DELETE'])
def delete_turno(id):
    return TurnosService.delete_turno(id)

@turnos_bp.route('/turno/<int:id>',methods=['PUT'])
def update_turno(id):
    data=request.json
    return TurnosService.update_turno(data['hora_inicio'],data['hora_fin'],id)
