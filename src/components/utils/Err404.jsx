import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Err404 = () => {
  return (
    <div className="vh-100">
      <Container className="text-center mt-5 pt-5">
        <h1
          className="text-warning"
          style={{ fontFamily: "heavitas", fontSize: "3em" }}
        >
          ERROR 404
        </h1>
        <h4>
          <Link to="/" className="text-danger font-weight-bold">
            Regresar al Inicio
          </Link>
        </h4>
      </Container>
    </div>
  );
};
