import { Row } from "react-bootstrap";
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
    "vegetariana",
    "española",
  ];
  return (
    <>
      <h1 className="text-center text-danger">MENÚ</h1>

      <Row className="mt-5">
        {pizzas.map((pizza, i) => (
          <MenuItem key={i} pizza={pizza} />
        ))}
      </Row>
    </>
  );
};
