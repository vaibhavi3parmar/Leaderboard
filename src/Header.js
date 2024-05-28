// src/Header.js
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import image from './logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>
        <div className="icons">
          <FaBell className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>
      <nav className="navigation">
        <a href="#">LeaderBoard</a>
        <a href="#">Historical Trading</a>
        <a href="#">Historical Chart</a>
        <a href="#">Scanners</a>
        <a href="#">Alerts</a>
        <a href="#">Basic Backtest</a>
        <a href="#">Advanced Backtest</a>
        <a href="#">Pricing</a>
        <a href="#">My Earnings</a>
      </nav>
    </header>
  );
};

export default Header;
