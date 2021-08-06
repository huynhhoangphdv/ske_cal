import './App.css';
import React from 'react';
import KeyPanel from './components/KeyPanel';
import DisplayPanel from './components/DisplayPanel';
import { useCalculate } from './hooks/useCalculate';


const App = () => {
  const { ex, handlePush, handleClear, handleCalculate } = useCalculate()

  return (
   <div className="wrapper">
      <div className="container">
        <DisplayPanel value={`${ex.tmpStr1}${ex.operator_string}${ex.tmpStr2}`}/>
        <KeyPanel onPush={handlePush} onClear={handleClear} onCalculate={handleCalculate}/>
      </div>
    </div> 
    
  );
}

export default App;
