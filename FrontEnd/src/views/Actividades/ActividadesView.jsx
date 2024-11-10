import React, { useState, useEffect } from 'react';
import { getActividades, addActividad, updateActividad, deleteActividad } from '../../services/actividadesService';
import './ActividadesView.css';

function ActividadesView() {
    const [actividades, setActividades] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [costo, setCosto] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchActividades();
    }, []);

    const fetchActividades = async () => {
        try {
            const data = await getActividades();
            setActividades(data);
        } catch (error) {
            console.error("Error al obtener actividades:", error);
        }
    };

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        const actividad = { descripcion, costo };
        try {
            if (editId) {
                await updateActividad(editId, actividad);
            } else {
                await addActividad(actividad);
            }
            setDescripcion('');
            setCosto('');
            setEditId(null);
            fetchActividades();
        } catch (error) {
            console.error("Error al agregar o actualizar actividad:", error);
        }
    };

    const handleEdit = (actividad) => {
        setEditId(actividad.id);
        setDescripcion(actividad.descripcion);
        setCosto(actividad.costo);
    };

    const handleDelete = async (id) => {
        try {
            await deleteActividad(id);
            fetchActividades();
        } catch (error) {
            console.error("Error al eliminar actividad:", error);
        }
    };

    const resetForm = () => {
        setDescripcion('');
        setCosto('');
        setEditId(null);
    };

    return (
        <div className="actividades-view">
            <h1>Actividades</h1>

            <form onSubmit={handleAddOrUpdate} className="actividad-form">
                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Costo"
                    value={costo}
                    onChange={(e) => setCosto(e.target.value)}
                    required
                />
                <button type="submit">{editId ? "Actualizar" : "Agregar"} Actividad</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>

            <ul className="actividad-list">
                {actividades.map((actividad) => (
                    <li key={actividad.id} className="actividad-item">
                        <span>{actividad.descripcion} - ${actividad.costo}</span>
                        <button onClick={() => handleEdit(actividad)}>Editar</button>
                        <button onClick={() => handleDelete(actividad.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActividadesView;
