import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/turnos';

// Obtener todos los turnos
export const getTurnos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener turnos:", error);
        throw error;
    }
};

// Obtener un turno por ID
export const getTurnoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar turno:", error);
        throw error;
    }
};

// Agregar un nuevo turno
export const addTurno = async (turno) => {
    try {
        const response = await axios.post(API_URL, turno);
        return response.data;
    } catch (error) {
        console.error("Error al agregar turno:", error);
        throw error;
    }
};

// Modificar un turno existente
export const updateTurno = async (id, turno) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, turno);
        return response.data;
    } catch (error) {
        console.error("Error al modificar turno:", error);
        throw error;
    }
};

// Eliminar un turno por ID
export const deleteTurno = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar turno:", error);
        throw error;
    }
};
