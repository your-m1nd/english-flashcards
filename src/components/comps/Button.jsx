import React from "react";
import { useState } from "react";

function Button(props) {
const {name} = props;
const [open, setOpen] = useState(false);
const onClick = () => {
    setOpen(!open);
  }

    return (
        
        <button className={open ?  'open': 'card__button'} onClick={onClick}>
        {name}
        </button>
    )
}

export default Button;