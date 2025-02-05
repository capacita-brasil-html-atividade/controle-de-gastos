import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./componentes/Cadastro/Cadastro";
import Nav from "./componentes/Nav/Nav";
import Grafico from "./componentes/Grafico/Grafico";
import { GastosProvider } from "./componentes/GastosContext";
import Lista from "./componentes/Lista/Lista";
 

function App() {
  return (
      <GastosProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/grafico" element={<Grafico />} />
          <Route path="/lista" element={<Lista />}/>
        </Routes>
      </BrowserRouter>
      </GastosProvider>
      
    
  );
}

export default App;


