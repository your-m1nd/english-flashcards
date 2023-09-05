import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class CardList extends React.Component {
  render() {
      return (
          <React.Fragment>
            <Header></Header>
            <Main></Main>
          </React.Fragment>
      );
  }
}

export default CardList;
