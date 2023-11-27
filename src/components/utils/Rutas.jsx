import { Route, Routes } from "react-router-dom";
import { Err404 } from "./Err404";
import { Inicio } from "../home/Inicio";

export const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<h1>MENU</h1>} />
        <Route path="/acerca" element={<h1>ACERCA DE</h1>} />
        <Route path="/cuenta" element={<h1>LOGIN</h1>} />
        <Route path="/*" element={<Err404 />} />
    </Routes>
  )
}
