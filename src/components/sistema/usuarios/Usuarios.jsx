import { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Container,
  Spinner,
  Alert,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { Usuario } from "./Usuario";
import { url } from "../../../backend";
import { useNavigate } from "react-router-dom";
import { BotonModalAgregar } from "./BotonModalAgregar";

export const Usuarios = () => {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const [cargando, setCargando] = useState(false);

  const [items, setItems] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);

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
        setItems(lista);
      })
      .catch(function (error) {
        console.log(error.response);
      })
      .finally(() => {
        setCargando(false);
      });
  };

  const handleChange = (e) => {
    const re = new RegExp(e.target.value, "i");
    setItems(listaUsuarios.filter((usuario) => re.test(usuario.nombres)));
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
          <div className="mb-3 w-100">
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Buscar por nombre"
            />
          </div>

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
                {items.map((usuarioData, k) => {
                  if (usuario._id != usuarioData._id) {
                    return (
                      <Usuario
                        key={k}
                        usuario={usuarioData}
                        cargarUsuarios={cargarUsuarios}
                      />
                    );
                  }
                })}
              </Accordion>
            </>
          )}
        </Container>
      )}

      <BotonModalAgregar cargarUsuarios={cargarUsuarios} />
    </>
  );
};
