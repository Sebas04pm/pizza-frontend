export default function pizzasReducer(state, action) {
  switch (action.type) {
    case "CARGAR_PIZZAS":
      return action.payload;

    case "ELIMINAR_PIZZA":
      return state.filter((pizza) => pizza._id != action.payload);

    case "CREAR_PIZZA":
      return [...state, action.payload];

    case "EDITAR_PIZZA":
      return state.map(item => {
        if(item._id == action.payload._id) item = action.payload;
        return item;
      });

    default:
      break;
  }
}
