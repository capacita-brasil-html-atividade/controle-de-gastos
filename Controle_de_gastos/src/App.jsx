import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./componentes/Cadastro/Cadastro";
import Nav from "./componentes/Nav/Nav";
import Grafico from "./componentes/Grafico/Grafico";
import { GastosProvider } from "./componentes/GastosContext";
 // Verifique se o import está correto

function App() {
  return (
      <GastosProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/grafico" element={<Grafico />} />
        </Routes>
        <h1>Controle Financeiro</h1>
      </BrowserRouter>
      </GastosProvider>
      
    
  );
}

export default App;


