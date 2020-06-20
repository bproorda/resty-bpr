import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/history">History</NavLink></li>
        </ul>
      </nav>
    );
  }