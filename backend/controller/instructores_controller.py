from flask import Blueprint, jsonify, request
from servicio.instructores_service import InstructorService

instructor_bp=Blueprint('instructor_bp',__name__)

@instructor_bp.route('/instructores',methods=['GET'])
def get_all_instructors():
    instructors= InstructorService.get_all_instructors()
    return jsonify(instructors)

@instructor_bp.route('/instructor/<int:ci>',methods=['GET'])
def get_instructor(ci):
    instructor= InstructorService.get_instructor(ci)
    return jsonify(instructor)

@instructor_bp.route('/instructor',methods=['POST'])
def add_instructor():
    data=request.json
    return InstructorService.add_instructor(data['ci'],data['nombre'],data['apellido'])

@instructor_bp.route('/instructor/<int:ci>',methods=['DELETE'])
def delete_instructor(ci):
    return InstructorService.delete_instructor(ci)

@instructor_bp.route('/instructor/<int:ci>',methods=['PUT'])
def update_instructor(ci):
    data=request.json
    return InstructorService.update_instructor(data['nombre'],data['apellido'],ci)
