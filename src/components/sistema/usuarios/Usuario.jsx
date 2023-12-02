import { useContext, useState } from "react";
import {
  Accordion,
  Row,
  Col,
  Form,
  Card,
  Button,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

import { url } from "../../../backend";
import { AuthContext } from "../../../context/AuthContext";
import imgUsuario from "../../../assets/img/usuario.jpg";
import { BotonModalEditar } from "./BotonModalEditar";
import { FormularioEditar } from "./FormularioEditar";

export const Usuario = (props) => {
  const { usuario } = useContext(AuthContext);
  const estadoInicial = {
    nombres: "",
    correo: "",
    telefono: "",
    direccion: "",
    password: "",
  };
  const [editarDatos, setEditarDatos] = useState(false);
  const [editarPass, setEditarPass] = useState(false);
  const [datosEditar, setDatosEditar] = useState(estadoInicial);
  const [cargando, setCargando] = useState(false);

  const eliminar = async (id = props.usuario._id) => {
    Swal.fire({
      title: "Seguro?",
      text: "No se podra recuperar el usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e7272d",
      cancelButtonColor: "#444444",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const token = usuario.token;
        await axios
          .delete(`${url}api/usuarios/${id}`, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          })
          .then(async function (response) {
            Swal.fire({
              title: "Eliminado!",
              text: "El usuario ha sido eliminado con exito.",
              icon: "success",
              showConfirmButton: true,
              confirmButtonText: "Continuar",
              confirmButtonColor: "#9e8901",
            });
            props.cargarUsuarios();
          })
          .catch(function (error) {
            console.log(error.response);
          });
      }
    });
  };

  const cancelar = () => {
    setEditarDatos(false);
    setEditarPass(false);
    setDatosEditar(estadoInicial);
  };

  const handleChange = (e) => {
    setDatosEditar({ ...datosEditar, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = new FormData();
    let vacio = true;
    for (const [key, value] of Object.entries(datosEditar)) {
      if (value != "") {
        vacio = false;
        formData.append(key, value);
      }
    }

    if (vacio) return;

    await axios
      .put(`${url}api/usuarios/${props.usuario._id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(async function (response) {
        props.cargarUsuarios();
        cancelar();

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
    <Accordion.Item eventKey={props.usuario.nombres}>
      <Accordion.Header>
        <img
          src={
            props.usuario.imagen
              ? url + props.usuario.imagen.slice(7)
              : imgUsuario
          }
          alt="imgUsuario"
          className="usuairo-item-img rounded-pill mx-3"
        />
        {props.usuario.nombres}
      </Accordion.Header>
      <Accordion.Body className="bg-dark-warning">
        <Card className="bg-dark text-light">
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Row className="w-100">
                <Col
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg={{ span: 4, offset: 0 }}
                >
                  <img
                    src={
                      props.usuario.imagen
                        ? url + props.usuario.imagen.slice(7)
                        : imgUsuario
                    }
                    alt="imgUsuario"
                    className="rounded w-100 mb-3"
                  />
                </Col>
                <FormularioEditar
                  usuario={props.usuario}
                  editarDatos={editarDatos}
                  editarPass={editarPass}
                  datosEditar={datosEditar}
                  handleChange={handleChange}
                />
              </Row>
            </Card.Body>
            <Card.Footer>
              {!cargando ? (
                <div className="w-100">
                  {!editarDatos ? (
                    <div>
                      <div className="text-end d-none d-md-block">
                        <Button
                          variant="warning rounded-pill  me-3 w-25"
                          onClick={() => setEditarDatos(true)}
                        >
                          Editar Datos
                        </Button>
                        <BotonModalEditar
                          variant="warning rounded-pill me-3 w-25"
                          cargarUsuarios={props.cargarUsuarios}
                          idUsuario={props.usuario._id}
                        />
                        <Button
                          variant="danger rounded-pill text-white w-25"
                          onClick={() => eliminar()}
                        >
                          Eliminar
                        </Button>
                      </div>
                      <div className="d-block d-md-none">
                        <Button
                          variant="warning rounded-pill  w-100 mb-3"
                          onClick={() => setEditarDatos(true)}
                        >
                          Editar Datos
                        </Button>
                        <BotonModalEditar
                          variant="warning rounded-pill w-100 mb-3"
                          cargarUsuarios={props.cargarUsuarios}
                          idUsuario={props.usuario._id}
                        />
                        <Button
                          variant="danger rounded-pill text-white w-100 mb-3"
                          onClick={() => eliminar()}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-end d-none d-md-block w-100">
                        {!editarPass ? (
                          <div className="w-50 d-inline-block text-end pe-2">
                            <Button
                              variant="warning rounded-pill w-75"
                              onClick={() => setEditarPass(true)}
                            >
                              Editar Contraseña
                            </Button>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="w-25 d-inline-block pe-2">
                          <Button
                            variant="warning rounded-pill w-100"
                            type="submit"
                          >
                            Continuar
                          </Button>
                        </div>
                        <div className="w-25 d-inline-block">
                          <Button
                            variant="danger rounded-pill w-100"
                            onClick={cancelar}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </div>
                      <div className="d-block d-md-none">
                        <Button variant="warning rounded-pill  w-100 mb-3">
                          Editar Contraseña
                        </Button>
                        <Button
                          variant="warning rounded-pill  w-100 mb-3"
                          type="submit"
                        >
                          Continuar
                        </Button>
                        <Button
                          variant="danger rounded-pill  w-100 mb-3"
                          onClick={() => setEditarDatos(false)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <Spinner animation="border" variant="warning" />
                </div>
              )}
            </Card.Footer>
          </Form>
        </Card>
      </Accordion.Body>
    </Accordion.Item>
  );
};
