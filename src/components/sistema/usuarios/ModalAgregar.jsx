import { useContext, useState } from "react";
import {
  Button,
  Row,
  Col,
  Modal,
  Form,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../../../backend";
import { AuthContext } from "../../../context/AuthContext";

export const ModalAgregar = ({ show, onHide, cargarUsuarios }) => {
  const { usuario } = useContext(AuthContext);
  const estadoInicial = {
    nombres: "",
    correo: "",
    pass: "",
  };

  const [datos, setDatos] = useState(estadoInicial);
  const [passVisible, setPassVisible] = useState(true);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = new FormData();
    formData.append("nombres", datos.nombres);
    formData.append("correo", datos.correo);
    formData.append("password", datos.pass);

    axios
      .post(`${url}api/usuarios/`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: "Exito!",
          icon: "success",
          text: "Exito al crear la cuenta.",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#9e8901",
        });
        onHide();
        cargarUsuarios();
      })
      .catch((err) => {
        console.log(err.response.data.errors);
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
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="bg-success text-dark" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Crear cuenta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                name="nombres"
                autoComplete="off"
                onChange={handleChange}
                disabled={cargando}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                autoComplete="off"
                type="email"
                name="correo"
                onChange={handleChange}
                disabled={cargando}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type={!passVisible ? "text" : "password"}
                name="pass"
                onChange={handleChange}
                disabled={cargando}
              />
              <InputGroup.Text onClick={() => setPassVisible(!passVisible)}>
                {passVisible ? <EyeFill /> : <EyeSlashFill />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          {!cargando ? (
            <Row className="w-100">
              <Col>
                <Button
                  variant="warning rounded-phill w-100 mx-2"
                  type="submit"
                >
                  Continuar
                </Button>
              </Col>
              <Col>
                <Button
                  variant="danger rounded-phill w-100 mx-2"
                  onClick={onHide}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          ) : (
            <div className="text-center w-100">
              <Spinner animation="border" variant="warning" />
            </div>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
