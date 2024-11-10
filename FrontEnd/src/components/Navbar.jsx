import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Escuela de Deportes de Nieve</h2>
            <ul className="navbar-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/alumnos">Alumnos</Link></li>
                <li><Link to="/clases">Clases</Link></li>
                <li><Link to="/reportes">Reportes</Link></li>
                <li><Link to="/actividades">Actividades</Link></li>
                <li><Link to="/instructores">Instructores</Link></li>
                <li><Link to="/turnos">Turnos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
