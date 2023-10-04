import React from 'react';
import Card from '../Card/Card';
import '../Card/Card.scss';
import '../Main/Main.scss';

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

function Main() {
      return (<main>
            <button className='arrow-left'></button>
        {
            words.map((word) => <Card key={word.id} id={word.id} name={word.name} transcription={word.transcription} translation={word.translation} />
            ) }
            <button className='arrow-right'></button>
        </main>)
}

export default Main;