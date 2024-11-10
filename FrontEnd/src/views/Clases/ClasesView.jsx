import React, { useState, useEffect } from 'react';
import { getClases, addClase, updateClase, deleteClase } from '../../services/clasesService';
import './ClasesView.css';

function ClasesView() {
    const [clases, setClases] = useState([]);
    const [ciInstructor, setCiInstructor] = useState('');
    const [idActividad, setIdActividad] = useState('');
    const [idTurno, setIdTurno] = useState('');
    const [dictada, setDictada] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchClases();
    }, []);

    const fetchClases = async () => {
        try {
            const data = await getClases();
            setClases(data);
        } catch (error) {
            console.error("Error al obtener clases:", error);
        }
    };

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        const clase = { ci_instructor: ciInstructor, id_actividad: idActividad, id_turno: idTurno, dictada };
        try {
            if (editId) {
                await updateClase(editId, clase);
            } else {
                await addClase(clase);
            }
            resetForm();
            fetchClases();
        } catch (error) {
            console.error("Error al agregar o actualizar clase:", error);
        }
    };

    const handleEdit = (clase) => {
        setEditId(clase.id);
        setCiInstructor(clase.ci_instructor);
        setIdActividad(clase.id_actividad);
        setIdTurno(clase.id_turno);
        setDictada(clase.dictada);
    };

    const handleDelete = async (id) => {
        try {
            await deleteClase(id);
            fetchClases();
        } catch (error) {
            console.error("Error al eliminar clase:", error);
        }
    };

    const resetForm = () => {
        setCiInstructor('');
        setIdActividad('');
        setIdTurno('');
        setDictada(false);
        setEditId(null);
    };

    return (
        <div className="clases-view">
            <h1>Clases</h1>

            <form onSubmit={handleAddOrUpdate} className="clase-form">
                <input type="text" placeholder="CI Instructor" value={ciInstructor} onChange={(e) => setCiInstructor(e.target.value)} required />
                <input type="number" placeholder="ID Actividad" value={idActividad} onChange={(e) => setIdActividad(e.target.value)} required />
                <input type="number" placeholder="ID Turno" value={idTurno} onChange={(e) => setIdTurno(e.target.value)} required />
                <label>
                    Dictada:
                    <input type="checkbox" checked={dictada} onChange={(e) => setDictada(e.target.checked)} />
                </label>
                <button type="submit">{editId ? "Actualizar" : "Agregar"} Clase</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>

            <ul className="clase-list">
                {clases.map((clase) => (
                    <li key={clase.id} className="clase-item">
                        <span>Instructor: {clase.ci_instructor}, Actividad: {clase.id_actividad}, Turno: {clase.id_turno}, Dictada: {clase.dictada ? "Sí" : "No"}</span>
                        <button onClick={() => handleEdit(clase)}>Editar</button>
                        <button onClick={() => handleDelete(clase.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClasesView;
