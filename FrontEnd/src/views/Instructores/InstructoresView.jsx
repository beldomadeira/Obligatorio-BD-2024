import React, { useState, useEffect } from 'react';
import { getInstructores, addInstructor, updateInstructor, deleteInstructor } from '../../services/instructoresService';
import './InstructoresView.css';

function InstructoresView() {
    const [instructores, setInstructores] = useState([]);
    const [ci, setCi] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [editCi, setEditCi] = useState(null);

    useEffect(() => {
        fetchInstructores();
    }, []);

    const fetchInstructores = async () => {
        try {
            const data = await getInstructores();
            setInstructores(data);
        } catch (error) {
            console.error("Error al obtener instructores:", error);
        }
    };

    const handleAddOrUpdateInstructor = async (e) => {
        e.preventDefault();
        const instructor = { ci, nombre, apellido };
        try {
            if (editCi) {
                await updateInstructor(editCi, instructor);
            } else {
                await addInstructor(instructor);
            }
            resetForm();
            fetchInstructores();
        } catch (error) {
            console.error("Error al agregar o actualizar instructor:", error);
        }
    };

    const handleEdit = (instructor) => {
        setEditCi(instructor.ci);
        setCi(instructor.ci);
        setNombre(instructor.nombre);
        setApellido(instructor.apellido);
    };

    const handleDelete = async (ci) => {
        try {
            await deleteInstructor(ci);
            fetchInstructores();
        } catch (error) {
            console.error("Error al eliminar instructor:", error);
        }
    };

    const resetForm = () => {
        setCi('');
        setNombre('');
        setApellido('');
        setEditCi(null);
    };

    return (
        <div className="instructores-view">
            <h1>Instructores</h1>

            <form onSubmit={handleAddOrUpdateInstructor} className="instructor-form">
                <input type="text" placeholder="CI" value={ci} onChange={(e) => setCi(e.target.value)} required disabled={!!editCi} />
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                <button type="submit">{editCi ? "Actualizar" : "Agregar"} Instructor</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>

            <ul className="instructor-list">
                {instructores.map((instructor) => (
                    <li key={instructor.ci} className="instructor-item">
                        <span>{instructor.nombre} {instructor.apellido} - CI: {instructor.ci}</span>
                        <button onClick={() => handleEdit(instructor)}>Editar</button>
                        <button onClick={() => handleDelete(instructor.ci)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InstructoresView;
