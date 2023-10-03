import React from 'react';
import '../Header/Header.css';
import logo from '../Header/education.jpg';
import Button from '../Button/Button';

function Header() {

      return <header>
        <h1>Let's start!</h1>
        <img src={logo} alt="logo" />
        <Button name={"Let's start our journey!"} />
        </header>;
    }
  

export default Header;