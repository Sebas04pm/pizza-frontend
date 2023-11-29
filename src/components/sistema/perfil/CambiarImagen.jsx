import { useContext, useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import imgUsuario from "../../../assets/img/usuario.jpg";
import { url } from "../../../backend";

export const CambiarImagen = () => {
  const { usuario, cambiarImgPerfil } = useContext(AuthContext);
  const [cambiarImagen, setCambiarImagen] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState({ imagen: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    if (datos.imagen == "") {
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: "Debe cargar una imagen.",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#e7272d",
      });
      setCargando(false);
      return;
    }

    const formData = new FormData();
    formData.append("imagen", datos.imagen);

    await axios
      .put(`${url}api/usuarios/cargarImagen/${usuario._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(async function (response) {
        cambiarImgPerfil(response.data.update, usuario.token);
        setCambiarImagen(false);
        Swal.fire({
          title: "Exito!",
          icon: "success",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .catch(function (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return (
    <Col sx={12} md={6} lg={4} className="text-white text-center">
      {!cargando ? (
        <img
          src={usuario.imagen ? url + usuario.imagen.slice(7) : imgUsuario}
          alt="usuario"
          className="bg-light rounded p-3 w-75 mb-3"
        />
      ) : (
        <Spinner animation="border" variant="danger" />
      )}

      {!cambiarImagen ? (
        <Button
          variant="danger"
          className="rounded-pill text-white mb-3"
          onClick={() => {
            setCambiarImagen(true);
          }}
        >
          Cambiar Imagen
        </Button>
      ) : (
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".jpg, .jpeg"
                onChange={(e) => {
                  setDatos({ imagen: e.target.files[0] });
                }}
              />
            </Form.Group>

            <Button
              variant="danger"
              className="rounded-pill text-white me-3"
              type="submit"
            >
              Aceptar
            </Button>

            <Button
              variant="secondary"
              className="rounded-pill text-dark"
              onClick={() => {
                setCambiarImagen(false);
              }}
            >
              Cancelar
            </Button>
          </Form>
        </div>
      )}
    </Col>
  );
};
