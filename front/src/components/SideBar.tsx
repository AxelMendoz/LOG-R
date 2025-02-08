import React from 'react';
import { FaHome, FaProjectDiagram, FaUsers, FaToolbox, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        await fetch('http://localhost:3000/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      }

      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="sidebar">
      <h2 onClick={() => handleNavigation('/dashboard')} className="sidebar-header">
        <FaHome className="icon" /> INICIO
      </h2>
      <ul>
        <li onClick={() => handleNavigation('/proyectos')}>
          <FaProjectDiagram className="icon" /> PROYECTOS
        </li>
        <li onClick={() => handleNavigation('/equipos')}>
          <FaUsers className="icon" /> EQUIPOS
        </li>
        <li onClick={() => handleNavigation('/recursos')}>
          <FaToolbox className="icon" /> RECURSOS
        </li>
      </ul>
      <div className="logout" onClick={handleLogout}>
        <FaSignOutAlt className="icon" /> CERRAR SESIÓN
      </div>
    </div>
  );
};

export default Sidebar;