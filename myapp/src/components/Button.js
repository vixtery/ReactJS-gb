import React from 'react';
import './style/style.css';


export function Button(props) {
    const text = 'отправить';

    return (
      <button className="button" onClick={props.onClick}>{text}</button>
    )
   }