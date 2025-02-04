import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Registro from "./pages/Registro"

function Router() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router
