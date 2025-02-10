import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/DashboardU.css';

function DashboardUsuario() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tasks = {
    notStarted: [
      'Realizar estudio de mercado',
      'Investigar tendencias tecnológicas',
      'Definir estrategia de branding',
      'Planear campañas publicitarias',
      'Analizar la competencia',
      'Establecer un plan financiero',
      'Buscar inversionistas potenciales'
    ],
    inProgress: [
      'Desarrollar prototipo de producto',
      'Implementar estrategia de SEO',
      'Diseñar la experiencia del usuario (UX)',
      'Optimizar velocidad de carga del sitio web',
      'Elaborar plan de marketing digital',
      'Negociar colaboraciones con influencers',
      'Desarrollar pruebas A/B para la página web'
    ],
    completed: [
      'Registrar la empresa oficialmente',
      'Definir valores y misión empresarial',
      'Seleccionar proveedores estratégicos',
      'Diseñar el logo y la identidad visual',
      'Lanzamiento de redes sociales',
      'Crear el primer MVP del producto',
      'Obtener feedback de usuarios iniciales'
    ]
  };

  return (
    <div className="dashboard-containerR">
      <Sidebar />
      
      <div className="dashboard-contentR">
        <div className="profile-cardR">
          <div className="profile-infoR">
            <h1>
              Usuario
              <div 
                className="user-icon-containerR"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <FaUserCircle className="user-iconR" />
                {dropdownOpen && (
                  <div className="dropdown-menuR">
                    <ul>
                      <li>Perfil</li>
                      <li>Editar perfil</li>
                      <li>Configuración</li>
                    </ul>
                  </div>
                )}
              </div>
            </h1>
          </div>
        </div>

        <div className="kanban-containerR">
          <div className="kanban-columnR not-startedR">
            <h3>Sin comenzar 🔴</h3>
            {tasks.notStarted.map((task, index) => (
              <div key={index} className="kanban-cardR">
                <p>{task}</p>
              </div>
            ))}
          </div>
          <div className="kanban-columnR in-progressR">
            <h3>En Progreso 🟡</h3>
            {tasks.inProgress.map((task, index) => (
              <div key={index} className="kanban-cardR">
                <p>{task}</p>
              </div>
            ))}
          </div>
          <div className="kanban-columnR completedR">
            <h3>Terminadas 🟢</h3>
            {tasks.completed.map((task, index) => (
              <div key={index} className="kanban-cardR">
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUsuario;
