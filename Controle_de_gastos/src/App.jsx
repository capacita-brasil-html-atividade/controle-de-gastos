import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Grafico from './componentes/Grafico/Grafico'
function App() {
  const data = [
    { name: 'Janeiro', despesa: 400, receita: 800 },
    { name: 'Fevereiro', despesa: 300, receita: 700 },
    { name: 'Março', despesa: 200, receita: 600 },
    { name: 'Abril', despesa: 278, receita: 500 },
    { name: 'Maio', despesa: 189, receita: 400 },
    { name: 'Junho', despesa: 239, receita: 300 },
    { name: 'Julho', despesa: 349, receita: 200 },
    { name: 'Agosto', despesa: 400, receita: 800 },
    { name: 'Setembro', despesa: 300, receita: 700 },
    { name: 'Outubro', despesa: 200, receita: 600 },
    { name: 'Novembro', despesa: 278, receita: 500 },
    { name: 'Dezembro', despesa: 189, receita: 400 },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>

     <h1>Controle Financeiro</h1>

     < Grafico dados={data}/>
    </>
  )
}

export default App
