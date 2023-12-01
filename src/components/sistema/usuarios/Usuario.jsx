import { useContext, useState } from "react";
import { Accordion, Row, Col, Form, Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

import { AuthContext } from "../../../context/AuthContext";
import imgUsuario from "../../../assets/img/usuario.jpg";
import { BotonModalEditar } from "./BotonModalEditar";
import { url } from "../../../backend";
import axios from "axios";


export const Usuario = (props) => {
  const { usuario } = useContext(AuthContext);
  const [editarDatos, setEditarDatos] = useState(false);
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
          })
      }
    });
  };

  return (
    <Accordion.Item eventKey={props.usuario.nombres}>
      <Accordion.Header>
        <img
          src={imgUsuario}
          alt="imgUsuario"
          className="usuairo-item-img rounded-pill mx-3"
        />
        {props.usuario.nombres}
      </Accordion.Header>
      <Accordion.Body className="bg-dark-warning">
        <Card className="bg-dark text-light">
          <Form>
            <Card.Body>
              <Row className="w-100">
                <Col
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg={{ span: 4, offset: 0 }}
                >
                  <img
                    src={imgUsuario}
                    alt="imgUsuario"
                    className="rounded w-100 mb-3"
                  />
                </Col>
                <Col xs={12} md={6} lg={8}>
                  <Row>
                    <Col sx={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre y Apelido:</Form.Label>
                        <Form.Control disabled={!editarDatos} type="text" />
                      </Form.Group>
                    </Col>
                    <Col sx={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control disabled={!editarDatos} type="email" />
                      </Form.Group>
                    </Col>
                    <Col sx={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control disabled={!editarDatos} type="text" />
                      </Form.Group>
                    </Col>
                    <Col sx={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control disabled={!editarDatos} type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              {!editarDatos ? (
                <div>
                  <div className="text-end d-none d-md-block">
                    <Button
                      variant="warning rounded-pill  me-3 w-25"
                      onClick={() => setEditarDatos(true)}
                    >
                      Editar Datos
                    </Button>
                    <BotonModalEditar variant="warning rounded-pill me-3 w-25" />
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
                    <BotonModalEditar variant="warning rounded-pill w-100 mb-3" />
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
                  <div className="text-end d-none d-md-block">
                    <Button variant="warning rounded-pill  me-3 w-25">
                      Continuar
                    </Button>
                    <Button
                      variant="danger rounded-pill  me-3 w-25"
                      onClick={() => setEditarDatos(false)}
                    >
                      Cancelar
                    </Button>
                  </div>
                  <div className="d-block d-md-none">
                    <Button variant="warning rounded-pill  w-100 mb-3">
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
            </Card.Footer>
          </Form>
        </Card>
      </Accordion.Body>
    </Accordion.Item>
  );
};
