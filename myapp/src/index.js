import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";

const Message = "Alexander"

ReactDOM.render( 
  <React.StrictMode>
    <App Message={Message} />
  </React.StrictMode>,
  document.getElementById('root')
);