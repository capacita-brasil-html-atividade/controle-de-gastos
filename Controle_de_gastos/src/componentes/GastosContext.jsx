

import React, { createContext, useState, useContext } from 'react';

const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([{ name: 'alimentação', value: 400 },
    { name: 'compras', value: 300 },
    { name: 'cursos', value: 300 },
    { name: 'streaming', value: 200 },
    { name: 'transporte', value: 300},
]);

  const adicionarGasto = (novoGasto) => {
    console.log('Adicioando Gasto:', novoGasto);
    
    setGastos((prevGastos) => [...prevGastos, novoGasto]);
  };

  return (
    <GastosContext.Provider value={{ gastos, adicionarGasto }}>
      {children}
    </GastosContext.Provider>
  );
};
 export const useGastos = () => useContext(GastosContext);
