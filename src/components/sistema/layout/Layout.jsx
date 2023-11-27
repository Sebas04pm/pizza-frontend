import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { url } from "../../../backend";
import { Container } from "react-bootstrap";
import { NavBar } from "../utils/NavBar";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!usuario) {
      navigate("cuenta");
    } else {
      const token = usuario.token;

      axios
        .get(`${url}api/usuarios/verificar/usuario`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("usuario");
          navigate("../cuenta");
        });
    }

    if (
    	location.pathname === "/sistema" ||
    	location.pathname === "/sistema/"
    ) {
    	navigate("/sistema/menu");
    }
    setAuth(true);
  }, []);
  return (
    <div>
      {auth ? (
        <>
          <NavBar/>

          <Container>
            <Outlet />
          </Container>
        </>
      ) : (
        <div className="w-100 d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
    </div>
  );
};
