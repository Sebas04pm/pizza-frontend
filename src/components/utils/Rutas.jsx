import { Route, Routes } from "react-router-dom";
import { Err404 } from "./Err404";
import { Inicio } from "../home/Inicio";
import { Menu } from "../menu/Menu";
import { AcercaDe } from "../acerca/AcercaDe";
import { Login } from "../auth/Login";
import { Layout } from "../sistema/layout/Layout";
import * as MenuSistema from "../sistema/menu/Menu";
import { Perfil } from "../sistema/perfil/Perfil";
import { Usuarios } from "../sistema/usuarios/Usuarios";

export const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/cuenta" element={<Login />} />
        <Route path="/sistema" element={<Layout />}>
          <Route path="menu" element={<MenuSistema.Menu />} />
          <Route path="perfil" element={<Perfil/>} />
          <Route path="usuarios" element={<Usuarios/>} />
        </Route>


        <Route path="/*" element={<Err404 />} />
    </Routes>
  )
}
