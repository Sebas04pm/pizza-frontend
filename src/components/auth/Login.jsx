import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FormLogin } from "./FormLogin";
import { FormRegistro } from "./FormRegistro";
import { NavBar } from "../utils/NavBar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { usuario} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario && Object.keys(usuario).length !== 0) {
      
      navigate("/sistema");
    }
  }, []);

	const [registro, setRegistro] = useState(false);
  return (
    <>
			<NavBar />
      <div className="login">
        <Row className="vh-100">
          <Col className="bg-danger h-100"></Col>
          <Col className="d-none d-md-block"></Col>
        </Row>
      </div>

      <Row className="vh-100 w-100">
        <Col className="h-100 d-flex  justify-content-center align-items-center">
          <Card className="card-login bg-white py-5 px-3 ms-3">
						{!registro ? (<FormLogin setRegistro={setRegistro} />) : (<FormRegistro setRegistro={setRegistro} />)}
					</Card>
        </Col>
        <Col className="d-none d-md-block"></Col>
      </Row>
    </>
  );
};
