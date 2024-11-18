import axios from 'axios';

const API_URL = 'https://xljt8pjs-5001.brs.devtunnels.ms/api/reportes';

// Obtener actividades que generan más ingresos
export const getActividadesMasIngresos = async () => {
    try {
        const response = await axios.get(`${API_URL}/actividades-mas-ingresos`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener actividades con más ingresos:", error);
        throw error;
    }
};

// Obtener actividades con más alumnos inscritos
export const getActividadesConMasAlumnos = async () => {
    try {
        const response = await axios.get(`${API_URL}/actividades-con-mas-alumnos`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener actividades con más alumnos:", error);
        throw error;
    }
};

// Obtener turnos con más clases dictadas
export const getTurnosConMasClasesDictadas = async () => {
    try {
        const response = await axios.get(`${API_URL}/turnos-con-mas-clases-dictadas`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener turnos con más clases dictadas:", error);
        throw error;
    }
};
