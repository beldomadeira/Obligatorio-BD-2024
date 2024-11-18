import axios from 'axios';

const API_URL = 'https://xljt8pjs-5001.brs.devtunnels.ms/api/alumnos';
// se coloca la url distinta para las consultas que modifican alumno en especifico y no alumnos
const API_URL_ALUMNO= 'https://xljt8pjs-5001.brs.devtunnels.ms/api/alumno';

// Obtener todos los alumnos
export const getAlumnos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener alumnos:", error);
        throw error;
    }
};

// Obtener un alumno por CI
export const getAlumnoByCi = async (ci) => {
    try {
        const response = await axios.get(`${API_URL}/${ci}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar alumno:", error);
        throw error;
    }
};

// Agregar un nuevo alumno
export const addAlumno = async (alumno) => {
    try {
        const response = await axios.post(API_URL_ALUMNO, alumno);
        return response.data;
    } catch (error) {
        console.error("Error al agregar alumno:", error);
        throw error;
    }
};

// Modificar un alumno existente
export const updateAlumno = async (ci, alumno) => {
    try {
        const response = await axios.put(`${API_URL_ALUMNO}/${ci}`, alumno);
        return response.data;
    } catch (error) {
        console.error("Error al modificar alumno:", error);
        throw error;
    }
};

// Eliminar un alumno por CI
export const deleteAlumno = async (ci) => {
    try {
        const response = await axios.delete(`${API_URL_ALUMNO}/${ci}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar alumno:", error);
        throw error;
    }
};
