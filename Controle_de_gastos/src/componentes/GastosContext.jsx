

import React, { createContext, useState, useContext } from 'react';

const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([
    
]);

const adicionarGasto = (novoGasto) => {
  setGastos((prevGastos) => {
    const categoriaIndex = prevGastos.findIndex(g => g.name === novoGasto.categoria);

    if (categoriaIndex !== -1) {
      return prevGastos.map((gasto, index) =>
        index === categoriaIndex
          ? { ...gasto, value: gasto.value + novoGasto.value }
          : gasto
      );
    } else {
      return [...prevGastos, { name: novoGasto.categoria, value: novoGasto.value }];
    }
  });
};


  return (
    <GastosContext.Provider value={{ gastos, adicionarGasto }}>
      {children}
    </GastosContext.Provider>
  );
};
 export const useGastos = () => useContext(GastosContext);
 
 
