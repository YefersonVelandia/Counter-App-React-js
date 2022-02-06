import React, {useState} from 'react';
//import PropTypes from 'prop-types';

const CounterApp = ({ value}) => {
    //Uso de hook useState
const [counter, setCounter] = useState(0);

//funcion de incremento

const handleAdd = () =>{

    setCounter( counter + 1)

    //Si no se tiene acceso al valor de counter
    //setCounter( (c) => c + 1 );
}


const handleSubtract = () => {
    setCounter(counter -1)
}

const handleReset = () => {

    setCounter(value)
}


  return(   
            <div>
                <h1>CounterApp</h1>
                <h2> { counter }</h2>
                <button onClick={ handleAdd }>+1</button>
                <button onClick={ handleReset }>Reset</button>
                <button onClick={ handleSubtract}>-1</button>
            </div>
        )
};


export default CounterApp;

