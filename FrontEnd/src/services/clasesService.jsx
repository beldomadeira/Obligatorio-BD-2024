import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL+'/api/clases';
const API_EDIT_URL= process.env.REACT_APP_BACKEND_URL+'/api/clase';

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
        const response = await axios.post(API_EDIT_URL, clase);
        return response.data;
    } catch (error) {
        console.error("Error al agregar clase:", error);
        throw error;
    }
};

// Modificar una clase existente
export const updateClase = async (id, clase) => {
    try {
        const response = await axios.put(`${API_EDIT_URL}/${id}`, clase);
        return response.data;
    } catch (error) {
        console.error("Error al modificar clase:", error);
        throw error;
    }
};

// Eliminar una clase por ID
export const deleteClase = async (id) => {
    try {
        const response = await axios.delete(`${API_EDIT_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar clase:", error);
        throw error;
    }
};
