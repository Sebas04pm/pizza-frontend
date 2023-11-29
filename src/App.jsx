import { BrowserRouter } from "react-router-dom";
import { Rutas } from "./components/utils/Rutas";
import { AuthProvider } from "./context/AuthContext";
import { PizzasProvider } from "./context/PizzasContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PizzasProvider>
          <Rutas />
        </PizzasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
