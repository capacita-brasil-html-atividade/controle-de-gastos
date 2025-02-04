

import React, { createContext, useState, useContext } from 'react';

const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([{ name: 'Alimentação', value: 400 },
    { name: 'Compras', value: 300 },
    { name: 'Cursos', value: 300 },
    { name: 'Streaming', value: 200 },
    { name: 'Transporte', value: 300},
]);

  const adicionarGasto = (novoGasto) => {
    setGastos((prevGastos) => [...prevGastos, novoGasto]);
  };

  return (
    <GastosContext.Provider value={{ gastos, adicionarGasto }}>
      {children}
    </GastosContext.Provider>
  );
};
 export const useGastos = () => useContext(GastosContext);
