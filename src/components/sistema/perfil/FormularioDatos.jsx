import { useContext, useState } from "react";
import { Col, Form, InputGroup, Row, Button, Spinner } from "react-bootstrap";
import {
  EnvelopeFill,
  HouseDoorFill,
  PersonVcard,
  TelephoneFill,
  EyeFill,
  EyeSlashFill,
  KeyFill,
} from "react-bootstrap-icons";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../../../backend";

export const FormularioDatos = () => {
  const { usuario, cambiarDatos } = useContext(AuthContext);
  const estadoInicial = {
    nombres: usuario.nombres,
    correo: usuario.correo,
    telefono: usuario.telefono ? usuario.telefono : "",
    direccion: usuario.direccion ? usuario.direccion : "",
    password: "",
  };
  const [editar, setEditar] = useState(false);
  const [datos, setDatos] = useState(estadoInicial);
  const [cargando, setCargando] = useState(false);
  const [editarPass, setEditarPass] = useState(false);
  const [passVisible, setPassVisible] = useState(true);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = new FormData();
    for (const [key, value] of Object.entries(datos)) {
      if (key != "imagen") {
        formData.append(key, value);
      }
    }
    await axios
      .put(`${url}api/usuarios/${usuario._id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(async function (response) {
        const resultado = response.data.actualizado;
        cambiarDatos(resultado, usuario.token);
        setDatos({
          nombres: resultado.nombres,
          correo: resultado.correo,
          telefono: resultado.telefono ? resultado.telefono : "",
          direccion: resultado.direccion ? resultado.direccion : "",
        });
        setEditar(false);
        setEditarPass(false);
        Swal.fire({
          title: "Exito!",
          icon: "success",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .catch(function (err) {
        const errors = err.response.data.errors;

        let htmlErrors = "";
        errors.map((i) => {
          htmlErrors += `<p>${i.msg}</p>`;
        });

        Swal.fire({
          title: "Error!",
          icon: "error",
          html: htmlErrors,
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return (
    <Col sx={12} md={6} lg={8} className="text-white">
      {!cargando ? (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} lg={6}>
              <p>Nombre y Apellido:</p>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-warning">
                  <PersonVcard />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  disabled={!editar}
                  name="nombres"
                  value={datos.nombres}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
            <Col xs={12} lg={6}>
              <p>Corre electrónico:</p>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-warning">
                  <EnvelopeFill />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  name="correo"
                  disabled={!editar}
                  value={datos.correo}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
            <Col xs={12} lg={6}>
              <p>Teléfono:</p>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-warning">
                  <TelephoneFill />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="telefono"
                  disabled={!editar}
                  value={datos.telefono}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
            <Col xs={12} lg={6}>
              <p>Dirección:</p>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-warning">
                  <HouseDoorFill />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  disabled={!editar}
                  name="direccion"
                  value={datos.direccion}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Row>
          {editarPass ? (
            <Col sx={12}>
              <p>Contraseña:</p>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-warning">
                  <KeyFill />
                </InputGroup.Text>
                <Form.Control
                  name="password"
                  type={!passVisible ? "text" : "password"}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={() => setPassVisible(!passVisible)}>
                  {passVisible ? <EyeFill /> : <EyeSlashFill />}
                </InputGroup.Text>
              </InputGroup>
            </Col>
          ) : (
            ""
          )}

          <div className="w-100 text-center">
            {!editar ? (
              <Button
                variant="warning"
                className="my-3 me-3 rounded-pill"
                onClick={() => {
                  setEditar(true);
                }}
              >
                Editar Datos
              </Button>
            ) : (
              <div>
                <Row className="mt-3">
                  {!editarPass ? (
                    <Col sx={12} lg={4} className="px-1">
                      <Button
                        variant="warning"
                        className="w-100 mb-3 rounded-pill"
                        onClick={() => setEditarPass(true)}
                      >
                        Editar Contraseña
                      </Button>
                    </Col>
                  ) : (
                    ""
                  )}

                  <Col sx={12} lg={!editarPass ? 4 : 6} className="px-1">
                    <Button
                      variant="warning"
                      className="w-100 mb-3 rounded-pill"
                      type="submit"
                    >
                      Aceptar
                    </Button>
                  </Col>
                  <Col sx={12} lg={!editarPass ? 4 : 6} className="px-1">
                    <Button
                      variant="danger"
                      className="rounded-pill text-dark w-100 mb-3"
                      onClick={() => {
                        setEditarPass(false);
                        setEditar(false);
                        setDatos(estadoInicial);
                      }}
                    >
                      Cancelar
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Form>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </Col>
  );
};
