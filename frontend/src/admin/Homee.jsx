import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts';

const MyChart = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalKursus, setTotalKursus] = useState(0);
const [loading,setloading] = useState("belum")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUsers = await axios.get('http://localhost:3000/users');
        const responseKursus = await axios.get('http://localhost:3000/kursus');
  
        console.log('Response Users:', responseUsers.data);
        console.log('Response Kursus:', responseKursus.data);
  
        if (responseUsers.data.length > 0 && responseKursus.data.length >0) {
          setTotalUsers(responseUsers.data.length);
          setTotalKursus(responseKursus.data.length);
          setloading("sudah")
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
        { name: 'Total Users', value: 12 },
        { name: 'Total Kursus', value: 13 },
      ],
    },
  ];

  return (
    <div>
      <h2>Total Users dan Total Kursus</h2>
      <h1 style={{color:"black"}}>cok : {totalKursus}</h1>
      {/* {totalUsers > 0 && totalKursus > 0 ? (
        <LineChart data={chartData} />
      ) : (
        <p>Loading or empty data...</p>
      )} */}
    </div>
  );
};

export default MyChart;
