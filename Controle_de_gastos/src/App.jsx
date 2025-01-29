import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastro from './Cadastro'
import Nav from './Nav'
function App() {

  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element = {<Cadastro/>}/>
          <Route path='/grafico' element = {''}/>
        </Routes>
      </BrowserRouter>

     <h1>Controle Financeiro</h1>

     {/* < Grafico dados={data}/> */}
    </>
  )
}

export default App
