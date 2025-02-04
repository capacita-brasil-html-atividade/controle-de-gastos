import React, { useState } from 'react';
import { useGastos } from '../GastosContext';
import '../Cadastro/Cadastro.css';

function Cadastro () {
  const { adicionarGasto } = useGastos();
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && valor && data && categoria) {
      const novoGasto = { nome, valor: parseFloat(valor), data, categoria };
      adicionarGasto(novoGasto);
      setNome('');
      setValor('');
      setData('');
      setCategoria('');
    }
  };

  return (
    <div className="cadastro">
      <h2>Cadastro de Gastos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do gasto"
        />
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Valor"
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecione a categoria</option>
          <option value="compras">Compras</option>
          <option value="streaming">Streaming</option>
          <option value="cursos">Cursos</option>
          <option value="alimentacao">Alimentação</option>
          <option value="transporte">Transporte</option>
        </select>
        <button type="submit">Adicionar Gasto</button>
      </form>
    </div>
  );
};

export default Cadastro;
