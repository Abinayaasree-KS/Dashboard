// Home.jsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import DashboardData from './dashboardData.json';

function Home({ fromDate, toDate }) {
  const { giftCountByDate, giftCountByStore } = DashboardData;

  // Filter data based on date range
  const filteredData = giftCountByDate.filter(item => {
    const date = new Date(item.date);
    return date >= new Date(fromDate) && date <= new Date(toDate);
  });

  // Calculate total gift count
  const totalGiftCount = 1000;

  // Calculate total used gift count
  const totalUsedGiftCount = 450;

  // Calculate total unused gift count
  const totalUnusedGiftCount = totalGiftCount - totalUsedGiftCount;

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Gift Messages</h3>
          </div>
          <h1>{totalGiftCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Gift Messages Used</h3>
          </div>
          <h1>{totalUsedGiftCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Gift Messages Unused</h3>
          </div>
          <h1>{totalUnusedGiftCount}</h1>
        </div>
      </div>

      <div className='charts'>
        <div className='chart'>
          <h3>Total Gift Count by Date</h3>
          <LineChart
            width={500}
            height={300}
            data={filteredData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='count' stroke='#8884d8' activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div className='chart'>
          <h3>Gift Count by Store</h3>
          <BarChart
            width={500}
            height={300}
            data={giftCountByStore}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='store' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill='#82ca9d' />
          </BarChart>
        </div>
      </div>
    </main>
  );
}

export default Home;
