// Header.jsx

import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar, onDateFilter }) {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedStore, setSelectedStore] = useState('All Stores');

  const toggleEmail = () => {
    setShowEmail(!showEmail);
    setShowPhone(false);
  };

  const togglePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
  };

  const handleDateFilter = () => {
    const startDate = prompt('Enter start date (YYYY-MM-DD):');
    const endDate = prompt('Enter end date (YYYY-MM-DD):');
    if (startDate && endDate) {
      onDateFilter(startDate, endDate);
    }
  };

  const handleStoreChange = (e) => {
    setSelectedStore(e.target.value);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <button className="date-filter-button" onClick={handleDateFilter}>Date Filter</button>
        <select className="store-filter" onChange={handleStoreChange} value={selectedStore}>
          <option value="All Stores">All Stores</option>
          <option value="Store 1">Store 1</option>
          <option value="Store 2">Store 2</option>
          <option value="Store 3">Store 3</option>
          {/* Add more options if needed */}
        </select>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' onClick={toggleEmail} />
        <BsPersonCircle className='icon' onClick={togglePhone} />
        {showEmail && <span>Contact Email: support@example.com</span>}
        {showPhone && <span>Contact Number: +1 (123) 456-7890</span>}
      </div>
    </header>
  );
}

export default Header;
