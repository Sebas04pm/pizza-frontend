import axios from "axios";
import { useContext, useState } from "react";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { Envelope, EyeFill, EyeSlashFill, Key } from "react-bootstrap-icons";
import { url } from "../../backend";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

export const FormLogin = ({ setRegistro }) => { 
  const estadoInicial = {
    correo: "",
    pass: "",
  };

  const { iniciarSesion } = useContext(AuthContext);
 
  const [datos, setDatos] = useState(estadoInicial);
  const [passVisible, setPassVisible] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);

    const formData = new FormData();
    formData.append("correo", datos.correo);
    formData.append("password", datos.pass);

    axios
      .post(`${url}api/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const token = res.data.token;
        iniciarSesion(token, "sistema")
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: err.response.data.msg,
          confirmButtonText: "Continuar",
          confirmButtonColor: "#e7272d",
        });
      })
      .finally(() => {
        setCargando(false);
      });
  };
  return (
    <div className="text-center">
      <h4 className="mb-3 text-danger">Iniciar Sesión</h4>

      <Form onSubmit={handleSubmit} noValidate>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-danger">
            <Envelope className="text-white" />
          </InputGroup.Text>
          <Form.Control
            placeholder="Correo Electrónico"
            type="email"
            name="correo"
            onChange={handleChange}
            disabled={cargando}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-danger">
            <Key className="text-white" />
          </InputGroup.Text>
          <Form.Control
            placeholder="Contraseña"
            type={!passVisible ? "password" : "text"}
            name="pass"
            onChange={handleChange}
            disabled={cargando}
          />
          <InputGroup.Text onClick={() => setPassVisible(!passVisible)}>
            {passVisible ? <EyeSlashFill /> : <EyeFill />}
          </InputGroup.Text>
        </InputGroup>

        <Button
          variant="danger"
          type="submit"
          className="w-100 my-3 text-white"
          disabled={cargando}
        >
          {cargando ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Ingresar"
          )}
        </Button>
      </Form>

      <p>
        No tienes cuenta? Registrate{" "}
        <a
          href="#"
          className="text-decoration-none"
          onClick={() => setRegistro(true)}
        >
          aquí
        </a>
      </p>
    </div>
  );
};
