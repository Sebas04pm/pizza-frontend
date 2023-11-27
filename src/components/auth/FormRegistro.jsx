import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import {
  Envelope,
  EyeFill,
  EyeSlashFill,
  Key,
  PersonFill,
} from "react-bootstrap-icons";

export const FormRegistro = ({ setRegistro }) => {
  const [passVisible, setPassVisible] = useState(false);
  return (
    <div className="text-center">
      <h4 className="mb-3 text-danger">Crear Cuenta</h4>

      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-danger">
            <PersonFill className="text-white" />
          </InputGroup.Text>
          <Form.Control placeholder="Nombre y apellido" type="text" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-danger">
            <Envelope className="text-white" />
          </InputGroup.Text>
          <Form.Control placeholder="Correo Electrónico:" type="email" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-danger">
            <Key className="text-white" />
          </InputGroup.Text>
          <Form.Control
            placeholder="Contraseña:"
            type={!passVisible ? "text" : "password"}
          />
          <InputGroup.Text onClick={() => setPassVisible(!passVisible)}>
            {passVisible ? <EyeFill /> : <EyeSlashFill />}
          </InputGroup.Text>
        </InputGroup>

        <Button variant="danger" className="w-100 my-3 text-white">
          Ingresar
        </Button>
      </Form>

      <p>
        Ya tienes cuenta? Inicia sesión{" "}
        <a
          href="#"
          className="text-decoration-none"
          onClick={() => setRegistro(false)}
        >
          aquí
        </a>
      </p>
    </div>
  );
};
