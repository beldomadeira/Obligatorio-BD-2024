import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/Home/HomeView';
import AlumnosView from './views/Alumnos/AlumnosView';
import ClasesView from './views/Clases/ClasesView';
import ReportesView from './views/Reportes/ReportesView';
import ActividadesView from './views/Actividades/ActividadesView';
import InstructoresView from './views/Instructores/InstructoresView';
import TurnosView from './views/Turnos/TurnosView';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/alumnos" element={<AlumnosView />} />
          <Route path="/clases" element={<ClasesView />} />
          <Route path="/reportes" element={<ReportesView />} />
          <Route path="/actividades" element={<ActividadesView />} />
          <Route path="/instructores" element={<InstructoresView />} />
          <Route path="/turnos" element={<TurnosView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
