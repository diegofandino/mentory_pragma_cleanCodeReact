import React, { useRef, useState } from 'react';
import './styles.scss';
const VariableNames = () => {

    const inputCalculator = useRef(null);
    const [resultOfCalculate, setResultOfCalculate] = useState(0)
    
    // Good version
    const calculateAreaRectangle = (side) => {
        return side * side;
    }

    const handleSubmit = (event, sideForCalculate) => {
        event.preventDefault();
        if(sideForCalculate) {
            setResultOfCalculate(calculateAreaRectangle(sideForCalculate));
        } else {
            setResultOfCalculate(calculateAreaRectangle(0));
        }
    }


  return (
    <div className='calculate'>
        <form onSubmit={(event) => handleSubmit(event, inputCalculator.current?.value)} className='calculate__form'>
            <label aria-labelledby='sideArea'> Calculate rectangle area </label>  
            <input ref={inputCalculator} type="number" name="sideArea" className='calculate__input' />
            <button style={{ padding: '10px 30px' }} type="submit"> Calculate </button>
        </form>

        {resultOfCalculate !== 0 && 
        (
            <div className='calculate__result'>
                <h4>{resultOfCalculate}</h4>
            </div>
        )
        }

    </div>
  )
}

export default VariableNames;