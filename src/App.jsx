// App.jsx

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import dashboardData from './dashboardData.json';

function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleDateFilter = (startDate, endDate) => {
      setFromDate(startDate);
      setToDate(endDate);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} onDateFilter={handleDateFilter} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Home fromDate={fromDate} toDate={toDate} />
        </div>
    );
}

export default App;
