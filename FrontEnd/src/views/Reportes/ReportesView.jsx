import React, { useEffect, useState } from 'react';
import { getActividadesMasIngresos, getActividadesConMasAlumnos, getTurnosConMasClasesDictadas } from '../../services/reportesService';
import './ReportesView.css';

function ReportesView() {
    const [actividadesIngresos, setActividadesIngresos] = useState([]);
    const [actividadesAlumnos, setActividadesAlumnos] = useState([]);
    const [turnosClases, setTurnosClases] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataIngresos = await getActividadesMasIngresos();
                setActividadesIngresos(dataIngresos);

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

            <section>
                <h3>Actividades que Más Ingresos Generan</h3>
                <ul>
                    {actividadesIngresos.map((actividad, index) => (
                        <li key={index}>
                            {actividad.actividad} - Ingresos Totales: $
                            {typeof actividad.total_ingresos === 'number'
                                ? actividad.total_ingresos.toFixed(2)
                                : '0.00'}
                        </li>
                    ))}
                </ul>
            </section>

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
        </div>
    );
}

export default ReportesView;
