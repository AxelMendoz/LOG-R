import React from 'react';
import '../Styles/Equipos.css';
import Sidebar from '../components/SideBar';
import { FaPlus, FaUsers } from 'react-icons/fa';

const Equipos = () => {
  return (
    <div className="equiposContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="equiposContent">
        <div className="titleContainer">
          <h1 className="title">EQUIPOS</h1>
        </div>

        <button className="newTeamButton">
          <span>Nuevo Equipo</span>
          <FaPlus />
        </button>

        <div className="equiposGrid">
          <div className="teamCard">
            <h3>FRONTEND TEAM</h3>
            <p>E-Commerce</p>
            <FaUsers />
            <p className="members-count">5 miembros</p>
          </div>

          <div className="teamCard">
            <h3>BACKEND TEAM</h3>
            <p>App Mobile</p>
            <FaUsers />
            <p className="members-count">2 miembros</p>
          </div>

          <div className="teamCard">
            <h3>DESIGN TEAM</h3>
            <p>UX/UI</p>
            <FaUsers />
            <p className="members-count">4 miembros</p>
          </div>

          <div className="teamCard">
            <h3>DEVOPS TEAM</h3>
            <p>Infrastructure</p>
            <FaUsers />
            <p className="members-count">3 miembros</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
