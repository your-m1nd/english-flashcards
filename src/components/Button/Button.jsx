import React, {useState} from "react";

function Button(props) {
const {name, onClick} = props;
const [pressed, setPressed] = useState(false);

const handleChange = () => {
    setPressed(!pressed);
}

    return (
        <button className="button" onClick={handleChange}>{pressed ? "Начинаем обучение" : name}</button>
    )
}

export default Button;