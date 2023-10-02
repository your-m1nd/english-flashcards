import React from 'react';
import { useState, useEffect } from 'react';
import './Card';

function Card() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);
  
    useEffect(() => {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setWords(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="card">
          {words.map(word=> (
            <div className="card-body">
            <h4 key={word.id}>New Card</h4>
            <p className="card-english">{word.english}</p>
            <p className="card-transcription">{word.transcription}</p>
            <p className="translation">{word.russian}</p>
            </div>
          ))}
          </div>
      );
    }
  }


export default Card;