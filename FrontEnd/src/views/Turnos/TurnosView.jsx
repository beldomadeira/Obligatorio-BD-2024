import React, { useState, useEffect } from 'react';
import { getTurnos, addTurno, updateTurno, deleteTurno } from '../../services/turnosService';
import './TurnosView.css';

function TurnosView() {
    const [turnos, setTurnos] = useState([]);
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchTurnos();
    }, []);

    const fetchTurnos = async () => {
        try {
            const data = await getTurnos();
            setTurnos(data);
        } catch (error) {
            console.error("Error al obtener turnos:", error);
        }
    };

    const handleAddOrUpdateTurno = async (e) => {
        e.preventDefault();
        const turno = { hora_inicio: horaInicio, hora_fin: horaFin };
        try {
            if (editId) {
                await updateTurno(editId, turno);
            } else {
                await addTurno(turno);
            }
            resetForm();
            fetchTurnos();
        } catch (error) {
            console.error("Error al agregar o actualizar turno:", error);
        }
    };

    const handleEdit = (turno) => {
        setEditId(turno.id);
        setHoraInicio(turno.hora_inicio);
        setHoraFin(turno.hora_fin);
    };

    const handleDelete = async (id) => {
        try {
            await deleteTurno(id);
            fetchTurnos();
        } catch (error) {
            console.error("Error al eliminar turno:", error);
        }
    };

    const resetForm = () => {
        setHoraInicio('');
        setHoraFin('');
        setEditId(null);
    };

    return (
        <div className="turnos-view">
            <h1>Turnos</h1>

            <form onSubmit={handleAddOrUpdateTurno} className="turno-form">
                <input type="number" placeholder="Hora de Inicio" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} required />
                <input type="number" placeholder="Hora de Fin" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} required />
                <button type="submit">{editId ? "Actualizar" : "Agregar"} Turno</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>

            <ul className="turno-list">
                {turnos.map((turno) => (
                    <li key={turno.id} className="turno-item">
                        <span>Turno {turno.id}: {turno.hora_inicio} - {turno.hora_fin}</span>
                        <button onClick={() => handleEdit(turno)}>Editar</button>
                        <button onClick={() => handleDelete(turno.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TurnosView;
