import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const CreateAlumnoModal = ({ isOpen, onRequestClose, handleAddOrUpdateAlumno, editCi, initialData }) => {
    const [ci, setCi] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefonoContacto, setTelefonoContacto] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');

    useEffect(() => {
        if (initialData) {
            setCi(initialData.ci || '');
            setNombre(initialData.nombre || '');
            setApellido(initialData.apellido || '');
            setFechaNacimiento(initialData.fechaNacimiento ? new Date(initialData.fechaNacimiento).toISOString().split('T')[0] : '');
            setTelefonoContacto(initialData.telefonoContacto || '');
            setCorreoElectronico(initialData.correoElectronico || '');
        }
    }, [initialData]);

    const resetForm = () => {
        setCi('');
        setNombre('');
        setApellido('');
        setFechaNacimiento('');
        setTelefonoContacto('');
        setCorreoElectronico('');
        onRequestClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddOrUpdateAlumno({
            ci,
            nombre,
            apellido,
            fechaNacimiento,
            telefonoContacto,
            correoElectronico
        });
        resetForm();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={resetForm} contentLabel="Crear/Actualizar Alumno">
            <h2>{editCi ? "Actualizar Alumno" : "Agregar Alumno"}</h2>
            <form onSubmit={handleSubmit} className="alumno-form">
                <input type="text" placeholder="CI" value={ci} onChange={(e) => setCi(e.target.value)} required disabled={!!editCi} />
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                <input type="date" placeholder="Fecha de Nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                <input type="text" placeholder="Teléfono de Contacto" value={telefonoContacto} onChange={(e) => setTelefonoContacto(e.target.value)} required />
                <input type="email" placeholder="Correo Electrónico" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} required />
                <button type="submit">{editCi ? "Actualizar" : "Agregar"} Alumno</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default CreateAlumnoModal;