import { Container, Row } from "react-bootstrap";
import Header from "../utils/Header";
import { NavBar } from "../utils/NavBar";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const pizzas = [
    "margarita",
    "americana",
    "napolitana",
    "primavera",
    "campestre",
    "dorada",
    "hawaiana",
    "pepproni",
    "siciliana",
    "vegetariana"
  ];
  return (
    <>
      <NavBar />
      <Header titulo="Menú" subtitulo="Disfruta de las mejores pizzas" />
      <Container className="my-5">
        <Row className="mt-5">
          {pizzas.map((pizza, i) => (
            <MenuItem key={i} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
};
