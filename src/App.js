import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import WordsList from './components/WordsList/WordsList';

const words = [
  {
    id: 14426,
    name: "bag",
    transcription: "[bæg]",
    translation: "сумка",
  }
  ,
   {
    id: 14428,
    name: "hamster",
    transcription: "[ˈhæmstə]",
    translation: "хомяк",
   },

   {
    id: 14429,
    name: "elephant",
    transcription: "[ˈelɪfənt]",
    translation: "слон",
   },
];

function learningFlashCards() {
      return (
         <div className="App">
          <Header />
          {
            words.map((word) => <Card key={word.id} id={word.id} name={word.name} transcription={word.transcription} translation={word.translation} />)
          }
          <WordsList />
         </div>
      );
  }

export default learningFlashCards;
