import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { PizzasContext } from "../../../context/PizzasContext";
import { Button, Form, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

export const Formulario = ({ opcion, pizza, onHide }) => {
  const { usuario } = useContext(AuthContext);
  const { crearPizza, editarPizza } = useContext(PizzasContext);
  const [cargando, setCargando] = useState(false);

  const datosIniciales =
    opcion == "crear"
      ? {
          nombre: "",
          cantidad: "",
          familiar: "",
          mediana: "",
          pequena: "",
          porcion: "",
          ingredientes: "",
          imagen: "",
        }
      : {
          nombre: pizza.nombre,
          cantidad: pizza.cantidad,
          familiar: pizza.familiar,
          mediana: pizza.mediana,
          pequena: pizza.pequena,
          porcion: pizza.porcion,
          ingredientes: pizza.ingredientes,
          imagen: "",
        };
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({ estado: false, msg: {} });

  function handleChange(e) {
    if (e.target.name === "imagen") {
      setDatos({ ...datos, [e.target.name]: e.target.files[0] });
    } else {
      setDatos({ ...datos, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (opcion == "crear") {
      setCargando(true);
      const enviar = await crearPizza(usuario.token, datos);
      setCargando(false);
      if (!enviar.estado) {
        let msg = {};
        enviar.errors.map((item) => {
          msg[item.param] = item.msg;
        });
        setErrores({ estado: true, msg });
        Swal.fire({
          icon: "error",
          title: "Error",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      } else {
        onHide();
        Swal.fire({
          icon: "success",
          title: "Exito",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      }
    } else {
      setCargando(true);
      const enviar = await editarPizza(usuario.token, datos, pizza._id);
      setCargando(false);
      if (!enviar.estado) {
        let msg = {};
        enviar.errors.map((item) => {
          msg[item.param] = item.msg;
        });
        setErrores({ estado: true, msg });
        Swal.fire({
          icon: "error",
          title: "Error",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      } else {
        onHide();
        Swal.fire({
          icon: "success",
          title: "Exito",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      }
    }
  };
  return (
    <>
      {cargando ? (
        <Spinner animation="border" role="status" variant="danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="text"
              placeholder="Nombre de la pizza"
              name="nombre"
              value={datos.nombre}
              onChange={handleChange}
              isInvalid={errores.msg.nombre ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.nombre ? errores.msg.nombre : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="number"
              placeholder="Cantidad disponible"
              name="cantidad"
              value={datos.cantidad}
              onChange={handleChange}
              isInvalid={errores.msg.cantidad ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.cantidad ? errores.msg.cantidad : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="number"
              placeholder="Precio del tamaño familiar"
              name="familiar"
              value={datos.familiar}
              onChange={handleChange}
              isInvalid={errores.msg.familiar ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.familiar ? errores.msg.familiar : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="number"
              placeholder="Precio del tamaño mediano"
              name="mediana"
              value={datos.mediana}
              onChange={handleChange}
              isInvalid={errores.msg.mediana ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.mediana ? errores.msg.mediana : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="number"
              placeholder="Precio del tamaño pequeño"
              name="pequena"
              value={datos.pequena}
              onChange={handleChange}
              isInvalid={errores.msg.pequena ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.pequena ? errores.msg.pequena : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="number"
              placeholder="Precio de la porción"
              name="porcion"
              value={datos.porcion}
              onChange={handleChange}
              isInvalid={errores.msg.porcion ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.porcion ? errores.msg.porcion : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              type="text"
              placeholder="Ingredientes"
              name="ingredientes"
              value={datos.ingredientes}
              onChange={handleChange}
              isInvalid={errores.msg.ingredientes ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.imagen ? errores.msg.imagen : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="imagen" className="mb-3">
            <Form.Control
              type="file"
              accept=".jpg, .jpeg"
              name="imagen"
              onChange={handleChange}
              isInvalid={errores.msg.imagen ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errores.msg.imagen ? errores.msg.imagen : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="danger" type="submit" className="me-3 text-white">
            {opcion == "crear" ? "Agregar" : "Editar"}
          </Button>
        </Form>
      )}
    </>
  );
};
