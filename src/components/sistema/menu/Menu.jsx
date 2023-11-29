import { Row, Spinner } from "react-bootstrap";
import { MenuItem } from "./MenuItem";
import { PizzasContext } from "../../../context/PizzasContext";
import { useContext, useEffect, useState } from "react";
import { BotonCrear } from "./BotonCrear";

export const Menu = () => {
  const { pizzas, listaPizzas } = useContext(PizzasContext);
  const [cargando, setCargando] = useState(false);
  const cargarPizzas = async () => {
    setCargando(true);
    await listaPizzas();
    setCargando(false);
  };
  useEffect(() => {
    cargarPizzas();
  }, []);
  return (
    <>
      <BotonCrear />
      <h1 className="text-center text-danger">MENÚ</h1>

      {cargando ? (
        <div className="text-center w-100 mt-3">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        ""
      )}

      {pizzas.length > 0 ? (
        <Row className="mt-5">
          {pizzas.map((pizza, i) => (
            <MenuItem key={i} pizza={pizza} />
          ))}
        </Row>
      ) : (
        <div className="text-center mt-5">
          <h1>No se encontraron productos.</h1>
        </div>
      )}
    </>
  );
};
