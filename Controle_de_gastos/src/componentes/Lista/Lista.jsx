import React from 'react';
import { useGastos } from '../GastosContext';
import styles from '../Lista/Lista.module.css'

const Lista = () => {
  const { gastos } = useGastos();

  return (
    <div className={styles.containerMaior}>
      
        <div className={styles.containerMenor}>
          <h2>Lista de Gastos</h2>
          {gastos.length === 0 ? (
            <p>Nenhum gasto cadastrado.</p>
          ) : (
            <ul>
              {gastos.map((gasto, index) => (
                <li key={index}>
                  <strong>{gasto.name}</strong> - R$ {gasto.value.toFixed(2)} 
          
                </li>
              ))}
            </ul>
          )}
                
              </div>
        </div>
  );
};

export default Lista;
