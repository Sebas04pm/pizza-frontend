export default function authReducer(state, action) {
  switch (action.type) {
    case "INICIAR_SESION":
      return action.payload;

    case "CAMBIAR_DATOS":
      return action.payload;

    case "CAMBIAR_IMAGEN":
      return action.payload;

    case "CERRAR_SESION":
      return {};
    default:
      break;
  }
}
