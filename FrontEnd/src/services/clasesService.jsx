import axios from 'axios';

const API_URL = 'https://xljt8pjs-5001.brs.devtunnels.ms/api/clases';

// Obtener todas las clases
export const getClases = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener clases:", error);
        throw error;
    }
};

// Obtener una clase por ID
export const getClaseById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar clase:", error);
        throw error;
    }
};

// Agregar una nueva clase
export const addClase = async (clase) => {
    try {
        const response = await axios.post(API_URL, clase);
        return response.data;
    } catch (error) {
        console.error("Error al agregar clase:", error);
        throw error;
    }
};

// Modificar una clase existente
export const updateClase = async (id, clase) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, clase);
        return response.data;
    } catch (error) {
        console.error("Error al modificar clase:", error);
        throw error;
    }
};

// Eliminar una clase por ID
export const deleteClase = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar clase:", error);
        throw error;
    }
};
