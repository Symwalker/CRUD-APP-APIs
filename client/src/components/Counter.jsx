import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterMinusAction, counterPlusAction } from './store/action/counterAction';
// import { counterPlusAction } from './store/action/counterPlusAction'
function CounterCmp() {
  //dispatch kara action call karwanay ke liye  
 const dispatch = useDispatch()
//  const plusState  = useSelector(state => state.pluscounterReducer)
//  const minusState  = useSelector(state => state.minuscounterReucer)
//  console.log(plusState);
//  console.log(minusState);
const selector  = useSelector(state => state.counterReducer)
 const handler = () =>{
   dispatch(counterPlusAction("Shayan"))
  }
 const handler1 = () =>{
   dispatch(counterMinusAction("hanif"))
  }
  // const selector1  = useSelector(state=>state.minuscounterReucer)

  return (
    <>
    <h1 className=''>Counter</h1>
      <div className='myDiv'>
        <button onClick={handler1}>-</button>
        <p>{selector.counter}</p>
        <button onClick={handler}>+</button>
      </div>
    </>
  );
}

export default CounterCmp;
