import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart'

const CombinedChart = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUsers = await axios.get('http://localhost:3000/users');
        const responseTransactions = await axios.get('http://localhost:3000/transactions');

        setUsers(responseUsers.data);
        setTransactions(responseTransactions.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to get monthly user registration data
  const getMonthlyUserData = () => {
    const monthlyData = {};

    users.forEach(user => {
      const date = new Date(user.createdAt);
      const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;

      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = 1;
      } else {
        monthlyData[monthYear] += 1;
      }
    });

    return monthlyData;
  };

  // Function to get monthly transaction data
  const getMonthlyTransactionData = () => {
    const monthlyData = {};

    transactions.forEach(transaction => {
      const date = new Date(transaction.createdAt);
      const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;

      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = 1;
      } else {
        monthlyData[monthYear] += 1;
      }
    });

    return monthlyData;
  };

  // Combine user and transaction data
  const combinedData = () => {
    const userData = getMonthlyUserData();
    const transactionData = getMonthlyTransactionData();

    const combined = Object.keys(userData).map(key => ({
      monthYear: key,
      newUser: userData[key],
      transaction: transactionData[key] || 0,
    }));

    return combined;
  };

  const data = combinedData();

  if (data.length > 0) {
    return (
      <div>
        <h2>Combined Users and Transactions Chart</h2>
        <LineChart
          data={data}
          xAxis={[{ dataKey: "monthYear" }]}
          series={[
            {
              dataKey: "newUser",
              name: "New Users",
              // Pastikan data newUser tidak kosong
              data: data.map(item => item.newUser || 0),
            },
            {
              dataKey: "transaction",
              name: "Transactions",
              // Pastikan data transaction tidak kosong
              data: data.map(item => item.transaction || 0),
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    );
  } else {
    // Penanganan jika data kosong
    return <div>Data not available</div>;
  }
}
export default CombinedChart;
