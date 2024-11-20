import React, { useEffect, useState } from 'react';
import { getActividadesMasIngresos, getActividadesConMasAlumnos, getTurnosConMasClasesDictadas } from '../../services/reportesService';
import './ReportesView.css';
import { FaArrowDown } from "react-icons/fa";

function ReportesView() {
    const [actividadesIngresos, setActividadesIngresos] = useState([]);
    const [actividadesAlumnos, setActividadesAlumnos] = useState([]);
    const [turnosClases, setTurnosClases] = useState([]);
    const [showIngresos, setShowIngresos] = useState(false);
    const [showAlumnos, setShowAlumnos] = useState(false);
    const [showTurnos, setShowTurnos] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataIngresos = await getActividadesMasIngresos();
                setActividadesIngresos(dataIngresos);
                console.log("hola",dataIngresos)

                const dataAlumnos = await getActividadesConMasAlumnos();
                setActividadesAlumnos(dataAlumnos);

                const dataTurnos = await getTurnosConMasClasesDictadas();
                setTurnosClases(dataTurnos);
            } catch (error) {
                console.error("Error al obtener los reportes:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="reportes-view">
            <h2>Reportes de la Escuela de Deportes de Nieve</h2>
            <div className="report-container">
                <div className="report" onClick={() => setShowIngresos(!showIngresos)}>
                    <div className="card-name">Actividades que Más Ingresos Generan</div>
    
                </div>
                

                <div className="report" onClick={() => setShowAlumnos(!showAlumnos)}>
                    <div className="card-name">Actividades con Más Alumnos</div>
                  
                </div>
               

                <div className="report" onClick={() => setShowTurnos(!showTurnos)}>
                    <div className="card-name">Turnos con Más Clases Dictadas</div>
              
                </div>
            </div>
            <div class="report-details">
                 {showIngresos && (
                    <section>
                        <h3>Actividades que Más Ingresos Generan</h3>
                        <ul>
                            {actividadesIngresos.map((actividad, index) => (
                                <li key={index}>
                                    {actividad.actividad} - Ingresos Totales: ${actividad.total_ingresos}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {showAlumnos && (
                    <section>
                        <h3>Actividades con Más Alumnos</h3>
                        <ul>
                            {actividadesAlumnos.map((actividad, index) => (
                                <li key={index}>
                                    {actividad.actividad} - Alumnos Totales: {actividad.total_alumnos || 0}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {showTurnos && (
                    <section>
                        <h3>Turnos con Más Clases Dictadas</h3>
                        <ul>
                            {turnosClases.map((turno, index) => (
                                <li key={index}>
                                    Turno {turno.id} ({turno.hora_inicio} - {turno.hora_fin}) - Clases Dictadas: {turno.total_clases_dictadas || 0}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}

export default ReportesView;
