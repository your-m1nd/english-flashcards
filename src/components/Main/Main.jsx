import React from 'react';
import '../Main/Main.scss';
import logo from '../Main/education.jpg';
import Button from '../Button/Button';

function Main() {

      return <main>
        <img src={logo} alt="logo" />
        <Button name={"Let's start our journey!"} />
        </main>;
    }
  

export default Main;