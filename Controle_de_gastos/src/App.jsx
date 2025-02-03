import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, data} from 'react-router-dom'
import Cadastro from './Cadastro'
import Nav from './Nav'
import Grafico from './componentes/Grafico/Grafico'
function App() {

  const [dados, setDados] = useState([
    { name: 'Janeiro', lazer: 400, compras: 300, streamings: 200, transporte: 278, alimentacao: 189 },
    { name: 'Fevereiro', lazer: 300, compras: 200, streamings: 100, transporte: 178, alimentacao: 89 },
    { name: 'Março', lazer: 200, compras: 278, streamings: 189, transporte: 400, alimentacao: 239 },
    { name: 'Abril', lazer: 278, compras: 200, streamings: 400, transporte: 300, alimentacao: 349 }])
  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element = {<Cadastro/>}/>
          <Route path='/grafico' element = {<Grafico dados={dados} />}/>
        </Routes>
      </BrowserRouter>

     <h1>Controle Financeiro</h1>
    </>
  )
}

export default App
