import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Dashboard";
import Registro from "./pages/Registro";
import './index.css';
import DashboardUsuario from "./pages/DashboardU";
import Proyectos from "./pages/Proyectos";
import Equipos from "./pages/Equipos";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboardU" element={<DashboardUsuario />} />
      <Route path="/proyectos" element={< Proyectos/>} />
      <Route path="/equipos" element={< Equipos/>} />
    </Routes>
  );
}

export default Router;
