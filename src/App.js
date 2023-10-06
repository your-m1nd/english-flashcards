import './App.scss';
import React from 'react';
import StartPage from './components/StartPage/StartPage';
import LearningPage from './components/LearningPage/LearningPage';
import TrainingPage from './components/TrainingPage/TrainingPage';

function learningFlashCards() {
      return (
         <div className="App">
          <StartPage />
          <LearningPage />
          <TrainingPage />
         </div>
      );
  }

export default learningFlashCards;
