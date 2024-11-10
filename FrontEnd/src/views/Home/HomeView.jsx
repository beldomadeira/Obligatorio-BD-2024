import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.css';

function HomeView() {
    return (
        <div className="home-view">
            <h1>Bienvenido a la Escuela de Deportes de Nieve</h1>
            <p>Selecciona una sección para administrar los datos.</p>

            <div className="home-links">
                <Link to="/alumnos" className="home-link">Alumnos</Link>
                <Link to="/clases" className="home-link">Clases</Link>
                <Link to="/reportes" className="home-link">Reportes</Link>
                <Link to="/actividades" className="home-link">Actividades</Link>
                <Link to="/instructores" className="home-link">Instructores</Link>
                <Link to="/turnos" className="home-link">Turnos</Link>
            </div>
        </div>
    );
}

export default HomeView;
