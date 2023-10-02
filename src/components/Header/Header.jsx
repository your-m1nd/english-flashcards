import React from 'react';
import '../Header/Header.css';
import logo from '../assets/img/education.jpg'
function Header() {

      return <header>
        <h1>Let's start!</h1>
        <img src={logo} alt="logo" />
        <button>Start our journey!</button>
        </header>;
    }
  

export default Header;