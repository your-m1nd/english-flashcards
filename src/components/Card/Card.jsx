import React from 'react';
import './Card.scss';
import Button from '../Button/Button';

function Card(props) { 

const {id, name, transcription, translation} = props;

return (
  <div className='card' key={id}>
    <h2 className='card__title'>{name}</h2>
    <p className='card__transcription'>{transcription}</p>
    <Button className='card__button' name='Показать перевод'/>
    <p className='card__translation'>{translation}</p>
  </div>
  
)
}

export default Card;