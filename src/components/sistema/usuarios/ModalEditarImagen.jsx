import { useContext, useState } from "react";
import axios from "axios";
import { Button, Row, Col, Modal, Form, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { url } from "../../../backend";
import { AuthContext } from "../../../context/AuthContext";

export const ModalEditarImagen = ({
  show,
  onHide,
  cargarUsuarios,
  idUsuario,
}) => {
  const { usuario } = useContext(AuthContext);
  const [datos, setDatos] = useState({ imagen: "" });
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    if (datos.imagen == "") {
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: "Debe cargar una imagen.",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#9e8901",
      });
      setCargando(false);
      return;
    }

    const formData = new FormData();
    formData.append("imagen", datos.imagen);

    let listaNueva = [];
    await axios
      .put(`${url}api/usuarios/cargarImagen/${idUsuario}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(async function (response) {
        cargarUsuarios();
        Swal.fire({
          title: "Exito!",
          icon: "success",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .catch(function (error) {
				console.log(error);
        Swal.fire({
          title: "Error!",
          icon: "error",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .finally(() => {
        setCargando(false);
        onHide();
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="bg-warning text-dark" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar Imagen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form.Group className="mb-3">
            <Form.Label>Imagen:</Form.Label>
            <Form.Control
              type="file"
              accept=".jpg, .jpeg"
              onChange={(e) => {
                setDatos({ imagen: e.target.files[0] });
              }}
            />
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
            <div className="w-100 text-center">
              <Spinner animation="border" variant="warning" />
            </div>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
