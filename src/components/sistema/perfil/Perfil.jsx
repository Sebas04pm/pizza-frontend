import { Container, Row} from "react-bootstrap";
import { CambiarImagen } from "./CambiarImagen";
import { FormularioDatos } from "./FormularioDatos";

export const Perfil = () => {
  return (
    <>
      <h1 className="text-center text-danger mb-5">Perfil</h1>

      <Container>
        <Row>
          <CambiarImagen />
          <FormularioDatos />
        </Row>
      </Container>
    </>
  );
};
