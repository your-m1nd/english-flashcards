import React from 'react';
import '../Main/Main.scss';
import logo from '../Main/education.jpg';
import Button from '../comps/Button';

function Main() {

      return <Main>
        <img src={logo} alt="logo" />
        <p>{"Let's start our journey!"}</p>
        <div className='menu__container'>
        <Button name={'Learning'}></Button>
        <Button name={'Training'}></Button>
        </div>
        </Main>;
    }
  

export default Main;