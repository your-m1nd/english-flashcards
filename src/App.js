import './App.scss';
import React from 'react';
import Start from './components/Pages/Start';
import Learning from './components/Pages/Learning';
import Training from './components/Pages/Training';

function App() {

      return (
         <div className="App">
          <Start />
          <Learning />
          <Training />
         </div>
      );
  }

export default App;
