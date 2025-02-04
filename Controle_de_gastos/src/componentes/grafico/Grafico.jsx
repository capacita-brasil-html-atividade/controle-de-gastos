import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useGastos } from '../GastosContext';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#3F8042', '#00E56E'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${payload.name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Grafico () {
    const { gastos } = useGastos(); 
    console.log('gastos no grafico', gastos);
    

    useEffect(() => {
      console.log('Gastos atualizados no Grafico:', gastos);
    }, [gastos]);
    
    return (
        <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={gastos}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {gastos.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    )
}

export default Grafico;