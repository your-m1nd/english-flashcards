import React from 'react';
import '../Main/Card.css';

function Card(props) {
    return (

        <div className="card">
            <div className="card-body">
                <p className="card-theme">{props.theme}</p>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-transcription">{props.transcription}</p>
                <p className="card-translation">{props.translation}</p>
            </div>
            <div className="card-footer">
                <button className="card-add">Добавить слово</button>
            </div>
        </div>
    );
}

export default Card;