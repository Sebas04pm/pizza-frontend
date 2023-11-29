import { createContext, useReducer } from "react";
import { url } from "../backend";
import axios from "axios";
import pizzasReducer from "./PizzasReducer";
import Swal from "sweetalert2";

const initialState = [];

export const PizzasContext = createContext(initialState);

export const PizzasProvider = ({ children }) => {
  const [pizzas, dispath] = useReducer(pizzasReducer, initialState);

  const listaPizzas = async () => {
    await axios
      .get(`${url}api/pizzas/`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(async function (response) {
        const datos = response.data;
        dispath({ type: "CARGAR_PIZZAS", payload: datos });
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  const eliminarPizza = async (token, id) => {
    Swal.fire({
      title: "Estas seguro de eliminar este producto?",
      text: "No podras revertir estos cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${url}api/pizzas/${id}`, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          })
          .then(async function () {
            dispath({ type: "ELIMINAR_PIZZA", payload: id });
          })
          .catch(function (error) {
            console.log(error.response);
          });
      }
    });
  };

  const crearPizza = async (token, datos) => {
    const formData = new FormData();
    let respuesta = {};
    for (const [key, value] of Object.entries(datos)) {
      formData.append(key, value);
    }

    if (datos.imagen == "") {
      return {
        estado: false,
        errors: [{ msg: "Ingrese una imagen", param: "imagen" }],
      };
    }
    await axios
      .post(`${url}api/pizzas/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async function (response) {
        const datos = response.data;
        dispath({ type: "CREAR_PIZZA", payload: datos });
        respuesta = { estado: true };
      })
      .catch(function (error) {
        console.log(error.response);
        respuesta = { estado: false, errors: error.response.data.errors };
      });

    return respuesta;
  };

  const editarPizza = async (token, datos, id) => {
    
    const formData = new FormData();
    let respuesta = {};
    for (const [key, value] of Object.entries(datos)) {
      if (key != "imagen") {
        formData.append(key, value);
      }
    }
    let datosGuardar = {}
    await axios
      .put(`${url}api/pizzas/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async function (response) {
        const data = response.data;
        datosGuardar = data.actualizado;
        
        if (datos.imagen != "") {
          const imagen = new FormData();
          imagen.append("imagen", datos.imagen);

          await axios.put(`${url}api/pizzas/imagen/${id}`, imagen, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          })
          .then(async function (response) {
            datosGuardar = response.data.update;
          })
          .catch(function (error) {
            console.log(error.response);
          })
        }
      })
      .catch(function (error) {
        console.log(error.response);
        respuesta = { estado: false, errors: error.response.data.errors };
      }).finally(()=>{
        dispath({ type: "EDITAR_PIZZA", payload: datosGuardar });
        respuesta = { estado: true };
      });

    return respuesta;
  };

  return (
    <PizzasContext.Provider
      value={{ pizzas, listaPizzas, eliminarPizza, crearPizza, editarPizza }}
    >
      {children}
    </PizzasContext.Provider>
  );
};
