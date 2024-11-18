import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.css';
import { FaRegUser,FaBook,FaFileAlt,FaSnowboarding ,FaChalkboardTeacher,FaBusinessTime      } from 'react-icons/fa';

function HomeView() {
    return (
        <div className="home-view">
            <h1>Bienvenido a la Escuela de Deportes de Nieve</h1>
            <p>Selecciona una sección para administrar los datos.</p>

            <div className="home-links">
            <Link to="/alumnos"style={{ textDecoration: 'none' }}>
                <div className="links">
                    <FaRegUser size={50} />
                    <div className="card-name">Alumnos</div>
                </div>
                </Link>
                <Link to="/clases"style={{ textDecoration: 'none' }}>
                <div className="links">
                    <FaBook size={50} />
                    <div className="card-name">Clases</div>
                </div>
                </Link>
                <Link to="/reportes"style={{ textDecoration: 'none' }}>
                <div className="links">
                    <FaFileAlt size={50} />
                    <div className="card-name">Reportes</div>
                </div>
                </Link>
                <Link to="/actividades"style={{ textDecoration: 'none' }}>
                <div className="links">
                    <FaSnowboarding size={50} />
                    <div className="card-name">Actividades</div>
                </div>
                </Link>
                <Link to="/instructores"style={{ textDecoration: 'none' }}>
                <div className="links">
                    <FaChalkboardTeacher size={50} />
                    <div className="card-name">Instructores</div>
                </div>
                </Link>
                <Link to="/turnos"style={{ textDecoration: 'none' }}>
                <div className="links">
                    <FaBusinessTime size={50} />
                    <div className="card-name">Turnos</div>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default HomeView;
