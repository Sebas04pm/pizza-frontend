import { Route, Routes } from "react-router-dom";
import { Err404 } from "./Err404";
import { Inicio } from "../home/Inicio";
import { Menu } from "../menu/Menu";
import { AcercaDe } from "../acerca/AcercaDe";

export const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/cuenta" element={<h1>LOGIN</h1>} />
        <Route path="/*" element={<Err404 />} />
    </Routes>
  )
}
