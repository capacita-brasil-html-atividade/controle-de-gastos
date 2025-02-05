import React from 'react';
import { useGastos } from '../GastosContext';

const Lista = () => {
  const { gastos } = useGastos();

  return (
    <div>
      <h2>Lista de Gastos</h2>
      {gastos.length === 0 ? (
        <p>Nenhum gasto cadastrado.</p>
      ) : (
        <ul>
          {gastos.map((gasto, index) => (
            <li key={index}>
              <strong>{gasto.name}</strong> - R$ {gasto.value.toFixed(2)} - {gasto.categoria}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Lista;
