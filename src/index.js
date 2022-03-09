import React from "react";
import  ReactDOM  from "react-dom";
import CounterApp from './CounterApp';

//cuando es el archivo de css tienes que espesificar el file.css
import  './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={10}/>
    </React.StrictMode>, divRoot);