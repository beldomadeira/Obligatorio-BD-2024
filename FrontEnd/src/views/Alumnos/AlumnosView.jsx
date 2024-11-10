import React, { useState, useEffect } from 'react';
import { getAlumnos, addAlumno, updateAlumno, deleteAlumno } from '../../services/alumnosService';
import './AlumnosView.css';

function AlumnosView() {
    const [alumnos, setAlumnos] = useState([]);
    const [ci, setCi] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefonoContacto, setTelefonoContacto] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [editCi, setEditCi] = useState(null);

    useEffect(() => {
        fetchAlumnos();
    }, []);

    const fetchAlumnos = async () => {
        try {
            const data = await getAlumnos();
            setAlumnos(data);
        } catch (error) {
            console.error("Error al obtener alumnos:", error);
        }
    };

    const handleAddOrUpdateAlumno = async (e) => {
        e.preventDefault();
        const alumno = {
            ci,
            nombre,
            apellido,
            fecha_nacimiento: fechaNacimiento,
            telefono_contacto: telefonoContacto,
            correo_electronico: correoElectronico
        };
        try {
            if (editCi) {
                await updateAlumno(editCi, alumno);
            } else {
                await addAlumno(alumno);
            }
            resetForm();
            fetchAlumnos();
        } catch (error) {
            console.error("Error al agregar o actualizar alumno:", error);
        }
    };

    const handleEdit = (alumno) => {
        setEditCi(alumno.ci);
        setCi(alumno.ci);
        setNombre(alumno.nombre);
        setApellido(alumno.apellido);
        setFechaNacimiento(alumno.fecha_nacimiento);
        setTelefonoContacto(alumno.telefono_contacto);
        setCorreoElectronico(alumno.correo_electronico);
    };

    const handleDelete = async (ci) => {
        try {
            await deleteAlumno(ci);
            fetchAlumnos();
        } catch (error) {
            console.error("Error al eliminar alumno:", error);
        }
    };

    const resetForm = () => {
        setCi('');
        setNombre('');
        setApellido('');
        setFechaNacimiento('');
        setTelefonoContacto('');
        setCorreoElectronico('');
        setEditCi(null);
    };

    return (
        <div className="alumnos-view">
            <h1>Alumnos</h1>

            <form onSubmit={handleAddOrUpdateAlumno} className="alumno-form">
                <input type="text" placeholder="CI" value={ci} onChange={(e) => setCi(e.target.value)} required disabled={!!editCi} />
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                <input type="date" placeholder="Fecha de Nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                <input type="text" placeholder="Teléfono de Contacto" value={telefonoContacto} onChange={(e) => setTelefonoContacto(e.target.value)} required />
                <input type="email" placeholder="Correo Electrónico" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} required />
                <button type="submit">{editCi ? "Actualizar" : "Agregar"} Alumno</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>

            <ul className="alumno-list">
                {alumnos.map((alumno) => (
                    <li key={alumno.ci} className="alumno-item">
                        <span>{alumno.nombre} {alumno.apellido} - {alumno.ci}</span>
                        <button onClick={() => handleEdit(alumno)}>Editar</button>
                        <button onClick={() => handleDelete(alumno.ci)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlumnosView;
