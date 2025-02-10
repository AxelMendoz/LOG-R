import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaUserCircle } from 'react-icons/fa';
import '../Styles/Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Proyectos Realizados',
        data: [5, 10, 8, 15, 20, 18],
        borderColor: '#F472B6',
        backgroundColor: 'rgba(244, 114, 182, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Barra lateral */}
      <Sidebar />

      <div className="dashboard-content">
        {/* Contenedor del icono de usuario */}
        <div className="user-container">
          <div
            className="user-icon-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <FaUserCircle className="user-icon" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li>Ver Perfil</li>
                  <li>editar perfil</li>
                  <li>Configuración</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Información del perfil */}
        <div className="profile-card">
          <div className="profile-info">
            <h1>Administrador</h1>
          </div>
        </div>

        {/* Métricas */}
        <div className="metrics">
          <div className="metric-card">
            <h3>Proyectos Totales</h3>
            <p>120</p>
          </div>
          <div className="metric-card">
            <h3>Tareas Pendientes</h3>
            <p>25</p>
          </div>
          <div className="metric-card">
            <h3>Usuarios Activos</h3>
            <p>15</p>
          </div>
        </div>

        {/* Gráfico de proyectos realizados por mes */}
        <div className="chart-container">
          <h3>Proyectos Realizados por Mes</h3>
          <Line data={data} />
        </div>

        <div className="latest-projects">
          <h3>Últimos Proyectos Registrados</h3>
          <table className="projects-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E-COMMERCE</td>
                <td>2023-10-01</td>
                <td>Completado</td>
              </tr>
              <tr>
                <td>APP MOBILE</td>
                <td>2023-10-05</td>
                <td>En Progreso</td>
              </tr>
              <tr>
                <td>E-COMMERCE 2</td>
                <td>2023-10-10</td>
                <td>Pendiente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
