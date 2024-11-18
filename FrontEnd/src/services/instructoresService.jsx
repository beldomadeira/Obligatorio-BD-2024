import axios from 'axios';

const API_URL = 'https://xljt8pjs-5001.brs.devtunnels.ms/api/instructores';

// Obtener todos los instructores
export const getInstructores = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener instructores:", error);
        throw error;
    }
};

// Obtener un instructor por CI
export const getInstructorByCi = async (ci) => {
    try {
        const response = await axios.get(`${API_URL}/${ci}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar instructor:", error);
        throw error;
    }
};

// Agregar un nuevo instructor
export const addInstructor = async (instructor) => {
    try {
        const response = await axios.post(API_URL, instructor);
        return response.data;
    } catch (error) {
        console.error("Error al agregar instructor:", error);
        throw error;
    }
};

// Modificar un instructor existente
export const updateInstructor = async (ci, instructor) => {
    try {
        const response = await axios.put(`${API_URL}/${ci}`, instructor);
        return response.data;
    } catch (error) {
        console.error("Error al modificar instructor:", error);
        throw error;
    }
};

// Eliminar un instructor por CI
export const deleteInstructor = async (ci) => {
    try {
        const response = await axios.delete(`${API_URL}/${ci}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar instructor:", error);
        throw error;
    }
};
