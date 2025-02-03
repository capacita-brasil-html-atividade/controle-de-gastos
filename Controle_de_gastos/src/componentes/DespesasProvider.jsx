import { useState,  createContext } from "react";

export const DespesasContext = createContext();

const DespesasProvider = ({children}) => {
    const [despesas, setDespesas] = useState([]);

    const adicionarDespesa = (nome, valor, data, categoria) => {
        const novaDespesa = {
            id: despesas.length + 1,
            nome,
            valor: parseFloat(valor),
            data,
            categoria,
        }

        setDespesas([...despesas, novaDespesa])
    }
  return (
    <DataContext.Provider value={{despesas, adicionarDespesa}}>
        {children}
    </DataContext.Provider>
  )
    
}

export default DespesasProvider;