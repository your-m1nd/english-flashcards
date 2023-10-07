import React from 'react';
import Card from '../Card/Card';
import '../Card/Card.scss';
import './LearningPage.scss';
import { useState } from 'react';

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


function LearningPage() {
const [selectedId, setSelectedId] = useState(null);
const [isSelected, setSelected] = useState(null);
  const onClick = (id) => {
    setSelectedId(id);
    setSelected(id);
  }

      return (
      <section>
            <button className='arrow-left'></button>
        {
            words.map((word) => <Card key={word.id} id={word.id} name={word.name} transcription={word.transcription} translation={word.translation} onClick={onClick} selectedId={selectedId} isSelected={isSelected}/>
            ) }
            <button className='arrow-right'></button>
        </section>)
}

export default LearningPage;