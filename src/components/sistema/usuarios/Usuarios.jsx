import { useContext, useEffect, useState } from "react";
import { Accordion, Container, Spinner, Alert, Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { Usuario } from "./Usuario";
import { url } from "../../../backend";
import { useNavigate } from "react-router-dom";
import { BotonModalAgregar } from "./BotonModalAgregar";

export const Usuarios = () => {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);

  const cargarUsuarios = async () => {
    setCargando(true);
    const token = usuario.token;

    await axios
      .get(`${url}api/usuarios/`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async function (response) {
        const lista = response.data;
        setListaUsuarios(lista);
      })
      .catch(function (error) {
        console.log(error.response);
      })
      .finally(() => {
        setCargando(false);
      });
  };

  useEffect(() => {
    if (usuario.rol != "admin") {
      navigate("/sistema/menu");
    }
    cargarUsuarios();
  }, []);

  return (
    <>
      <h1 className="text-center text-warning mb-5">Usuarios</h1>

      {cargando ? (
        <div className="text-center w-100">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <Container className="my-5">
          {listaUsuarios.length < 1 ? (
            <div className="w-100 mt-5">
              <Alert variant="warning" className="text-center">
                <span>
                  <strong>NO</strong> se encontraron usuairos
                </span>
              </Alert>
            </div>
          ) : (
            <>

              <Accordion>
                {listaUsuarios.map((usuario, k) => (
                  <Usuario key={k} usuario={usuario} cargarUsuarios={cargarUsuarios} />
                ))}
              </Accordion>
            </>
          )}
        </Container>
      )}

      <BotonModalAgregar cargarUsuarios={cargarUsuarios} />
    </>
  );
};
