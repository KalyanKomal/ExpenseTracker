import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Typography } from '@mui/material';
import { useTransactions } from '../Context/TransactionContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Statistics = () => {
      const { transactions } = useTransactions();

    console.log("Transactions received in Statistics:", transactions);

    if (!transactions || transactions.length === 0) {
    return <Typography>No data</Typography>;
  }
    return (
        <div>
      <h3>Spending Distribution</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={transactions}
          dataKey="amount"
          nameKey="title"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {transactions.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </div>
    );};
    export default Statistics;
