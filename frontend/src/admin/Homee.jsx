import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts';

const MyChart = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalKursus, setTotalKursus] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUsers = await axios.get('http://localhost:5173/users');
        const responseKursus = await axios.get('http://localhost:5173/kursus');
  
        console.log('Response Users:', responseUsers.data);
        console.log('Response Kursus:', responseKursus.data);
  
        if (responseUsers.data.users && responseKursus.data.kursus) {
          setTotalUsers(responseUsers.data.users.length);
          setTotalKursus(responseKursus.data.kursus.length);
        } else {
          console.error('Data not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const chartData = [
    {
      data: [
        { name: 'Total Users', value: totalUsers },
        { name: 'Total Kursus', value: totalKursus },
      ],
    },
  ];

  return (
    <div>
      <h2>Total Users dan Total Kursus</h2>
      {totalUsers > 0 && totalKursus > 0 ? (
        <LineChart data={chartData} />
      ) : (
        <p>Loading or empty data...</p>
      )}
    </div>
  );
};

export default MyChart;
