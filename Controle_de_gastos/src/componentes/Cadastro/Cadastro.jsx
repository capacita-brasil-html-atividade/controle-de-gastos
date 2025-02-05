import React, { useState } from 'react';
import { useGastos } from '../GastosContext';
import  styles from '../Cadastro/cadastro.module.css'
import Grafico from '../Grafico/Grafico';
import ListaDeGastos from '../Lista/Lista';


function Cadastro () {
  const { adicionarGasto } = useGastos();
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && valor && data && categoria) {
      const dataAtual = new Date();
      const dataGasto = new Date(data);

    if (dataGasto.getMonth() === dataAtual.getMonth() && dataGasto.getFullYear() === dataAtual.getFullYear()) {
      const categoriasExistentes = ['compras', 'streaming', 'cursos', 'alimentacao', 'transporte'];
      const categoriaValida = categoriasExistentes.includes(categoria) ? categoria : 'Outros';

      const novoGasto = { name: nome, value: parseFloat(valor), data, categoria: categoriaValida };
      console.log('Novo Gasto:', novoGasto);

      adicionarGasto(novoGasto);
      setNome('');
      setValor('');
      setData('');
      setCategoria('');
    } else {
      alert('O gasto deve estar no mês atual.');
    }
  }
  }

  

  return (
    <div className={styles.cadastro}>
      <h2>Cadastro de Gastos</h2>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.containerInputs}>
          <div className={styles.divisorDeInputs}>
            <label htmlFor="">Nome do gasto: </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do gasto"
              id='nome'
            />
          </div>
          <div className={styles.divisorDeInputs}>
            <label htmlFor="valor">Valor do gasto: </label>
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Valor"
              id='valor'
            />
          </div>
          <div className={styles.divisorDeInputs}>
            <label htmlFor="data">Data de pagamento: </label> 
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              id='data'
            />
          </div>
          <div className={styles.divisorDeInputs}>
            <label htmlFor="categoria">Categoria do gasto: </label>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} id='cateogria'>
              <option value="">Selecione a categoria</option>
              <option value="compras">Compras</option>
              <option value="streaming">Streaming</option>
              <option value="cursos">Cursos</option>
              <option value="alimentacao">Alimentação</option>
              <option value="transporte">Transporte</option>
            </select>
          </div>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    <Grafico></Grafico>
    <ListaDeGastos/>
    </div>
  );
};


export default Cadastro;
