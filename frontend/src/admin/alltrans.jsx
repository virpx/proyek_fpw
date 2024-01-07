import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, []);

  const sortTransactions = (sortBy) => {
    if (sortBy === 'latest') {
      const sortedTransactions = [...transactions].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setTransactions(sortedTransactions);
    } else if (sortBy === 'oldest') {
      const sortedTransactions = [...transactions].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      setTransactions(sortedTransactions);
    }
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSortBy(selectedValue);
    sortTransactions(selectedValue);
  };

  return (
    <div>
      <h2>List of Transactions</h2>
      <label>Sort by:</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id} style={{color:"black"}}>
            Transaction ID: {transaction._id} - Date: {transaction.createdAt} - Amount: {transaction.paid_amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
