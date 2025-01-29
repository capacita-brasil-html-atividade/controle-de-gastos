import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';"recharts";


const data = [
  { name: "Janeiro", despesa: 400, receita: 800 },
  { name: "Fevereiro", despesa: 300, receita: 700 },
  { name: "Março", despesa: 200, receita: 600 },
  { name: "Abril", despesa: 278, receita: 500 },
  { name: "Maio", despesa: 189, receita: 400 },
  { name: "Junho", despesa: 239, receita: 300 },
  { name: "Julho", despesa: 349, receita: 200 },
  { name: "Agosto", despesa: 400, receita: 800 },
  { name: "Setembro", despesa: 300, receita: 700 },
  { name: "Outubro", despesa: 200, receita: 600 },
  { name: "Novembro", despesa: 278, receita: 500 },
  { name: "Dezembro", despesa: 189, receita: 400 },
];

const Grafico = ({ dados }) => {
//   const [showDespesas, setShowDespesas] = useState(true);
//   const [showReceitas, setShowReceitas] = useState(true);

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart data={dados}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="despesa" stackId="a" fill="#8884d8" />
        <Bar dataKey="receita" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Grafico;
