import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

  const [counter, setCounter] = useState(value);


  const handelAdd = (e) =>{
    setCounter(counter + 1); 
  }

  const handelSubstract = (e) =>{
    setCounter(counter - 1); 
  }

  const handelReset = (e) =>{
    setCounter(value); 
  }

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    <button onClick={ handelAdd }>+1</button>
    <button onClick={ handelReset }>Reset</button>
    <button onClick={ handelSubstract }>-1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}


export default CounterApp;