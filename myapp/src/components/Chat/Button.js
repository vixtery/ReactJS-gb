import React from 'react';
import '../style/style.css';


function Button(props) {
    const text = 'Отправить';

    return (
      <button className="button" onClick={props.onClick}>{text}</button>
    )
   };
   export default Button;