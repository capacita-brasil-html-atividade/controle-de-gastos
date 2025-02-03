import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Grafico.css'

const data = [
  { name: 'Janeiro', lazer: 400, compras: 300, streamings: 200, transporte: 278, alimentacao: 189 },
  { name: 'Fevereiro', lazer: 300, compras: 200, streamings: 100, transporte: 178, alimentacao: 89 },
  { name: 'Março', lazer: 200, compras: 278, streamings: 189, transporte: 400, alimentacao: 239 },
  { name: 'Abril', lazer: 278, compras: 200, streamings: 400, transporte: 300, alimentacao: 349 },
  
];

const Grafico = ({ dados }) => {
  return (
    <div className='container-grafico'>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="alimentacao" stackId="a" fill="#8884d8" />
            <Bar dataKey="compras" stackId="a" fill="#82ca9d" />
            <Bar dataKey="cursos" stackId="a" fill="#ffc658" />
            <Bar dataKey="streamings" stackId="a" fill="#ff8042" />
            <Bar dataKey="transporte" stackId="a" fill="#a4de6c" />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Grafico;

