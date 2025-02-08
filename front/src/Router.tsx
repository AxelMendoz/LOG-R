import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Dashboard";
import Registro from "./pages/Registro";
import './index.css';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default Router;
