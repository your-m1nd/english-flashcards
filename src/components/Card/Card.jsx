import React from 'react';
import './Card.scss';
import CardButton from '../CardButton/CardButton';
import { useState } from 'react';

function Card(props) { 

const {id, name, transcription, translation} = props;

const [selectedId, setSelectedId] = useState(null);
const [isSelected, setSelected] = useState(null);
const onClick = (id) => {
  setSelectedId(id);
  setSelected(id);
}

return (

  <div className={selectedId === id ?'card ' + (isSelected ? 'selected' :'card') : 'card'} key={id} onClick={()=>{onClick(id)}} >
    <h2 className='card__title'>{name}</h2>
    <p className='card__transcription'>{transcription}</p>
    <CardButton className={'card__button' ? 'open' : 'card__button'} name={'Показать перевод'}/>
    {selectedId === id ? <p className='card__translation'>{translation}</p> : <p className='card__translation'></p>} 
  </div>
  
)
}

export default Card;