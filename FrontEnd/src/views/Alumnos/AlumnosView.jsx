import React, { useState, useEffect } from 'react';
import { getAlumnos, addAlumno, updateAlumno, deleteAlumno } from '../../services/alumnosService';
import './AlumnosView.css';
import { FaPen,FaRegTrashAlt,FaPlusSquare  } from "react-icons/fa";
import CreateAlumnoModal from './CreateAlumnoModal';


function AlumnosView() {
    const [alumnos, setAlumnos] = useState([]);
    const [ci, setCi] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefonoContacto, setTelefonoContacto] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [editCi, setEditCi] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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
        // e.preventDefault();
        const alumno = {
            ci: e.ci,
            nombre: e.nombre,
            apellido: e.apellido,
            fecha_nacimiento: e.fechaNacimiento,
            telefono_contacto: e.telefonoContacto,
            correo_electronico: e.correoElectronico
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
        if(alumno==-1){
            setIsOpen(true);
            setEditCi(null);
        }
        else{
        setIsOpen(true);
        setEditCi(alumno.ci);
        setCi(alumno.ci);
        setNombre(alumno.nombre);
        setApellido(alumno.apellido);
        setFechaNacimiento(alumno.fecha_nacimiento);
        setTelefonoContacto(alumno.telefono_contacto);
        setCorreoElectronico(alumno.correo_electronico);
    }
    };

    const handleDelete = async (ci) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este alumno?")) {
            try {
            await deleteAlumno(ci);
            fetchAlumnos();
            } catch (error) {
            console.error("Error al eliminar alumno:", error);
            }
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
            <div class="title-container">

            <h1>Alumnos</h1> <button class="create-button" onClick={() => handleEdit(-1)}><FaPlusSquare  /> Crear nuevo</button>
            </div>

         <CreateAlumnoModal isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        initialData={{ ci, nombre, apellido, fechaNacimiento, telefonoContacto, correoElectronico }}
        editCi={editCi}
        handleAddOrUpdateAlumno={handleAddOrUpdateAlumno}
        resetForm={resetForm}
        
         >

        </CreateAlumnoModal>

            <table className="alumno-table">
                <thead>
                    <tr>
                        <th>CI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Teléfono de Contacto</th>
                        <th>Correo Electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno) => (
                        <tr key={alumno.ci}>
                            <td>{alumno.ci}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellido}</td>
                            <td>{new Date(alumno.fecha_nacimiento).toUTCString()}</td>
                            <td>{alumno.telefono_contacto}</td>
                            <td>{alumno.correo_electronico}</td>
                            <td>
                                <div class="Button-container">
                                <button onClick={() => handleEdit(alumno)}><FaPen /> Editar</button>
                                <button onClick={() => handleDelete(alumno.ci)}><FaRegTrashAlt /> Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AlumnosView;
