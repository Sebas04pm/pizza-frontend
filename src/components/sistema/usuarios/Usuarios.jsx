import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Usuario } from "./Usuario";

export const Usuarios = () => {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <h1 className="text-center text-warning mb-5">Usuarios</h1>

      <Container className="my-5">
        <Accordion>
          {lista.map((item, k) => <Usuario key={k} item={item} /> )}
        </Accordion>
      </Container>
    </>
  );
};
