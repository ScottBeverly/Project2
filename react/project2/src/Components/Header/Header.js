import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='Head'>
      <Link to='/'>
          <h2>Home</h2>
      </Link>
      <Link to ='/Dash'>
          <h2>Dashboard</h2>
      </Link>
      <Link to='/'>
          <span className='NASA'>NASA</span>
      </Link>
    </div>
  );
}

export default Header;