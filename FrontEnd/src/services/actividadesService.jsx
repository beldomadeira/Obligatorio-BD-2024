import axios from 'axios';

const API_URL = 'https://xljt8pjs-5001.brs.devtunnels.ms/api/actividades';

// Obtener todas las actividades
export const getActividades = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener actividades:", error);
        throw error;
    }
};

// Obtener una actividad por ID
export const getActividadById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar actividad:", error);
        throw error;
    }
};

// Agregar una nueva actividad
export const addActividad = async (actividad) => {
    try {
        const response = await axios.post(API_URL, actividad);
        return response.data;
    } catch (error) {
        console.error("Error al agregar actividad:", error);
        throw error;
    }
};

// Modificar una actividad existente
export const updateActividad = async (id, actividad) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, actividad);
        return response.data;
    } catch (error) {
        console.error("Error al modificar actividad:", error);
        throw error;
    }
};

// Eliminar una actividad por ID
export const deleteActividad = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar actividad:", error);
        throw error;
    }
};
