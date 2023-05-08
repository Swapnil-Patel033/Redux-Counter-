import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,Cahname } from '../src/IncrimentDecriment'

function Counter() {
    const count = useSelector((state) => state.LoginValue);
    const dispatch = useDispatch();
  console.log(count)
  return (
    <div>
    <h1>Value :{count.Name}</h1>
    <h1>{count.value}</h1>

    <button
    onClick={()=>{dispatch(decrement()) 
     }}> - </button>  
   
   
   
     <button onClick={()=>{
        dispatch(increment()) 

     }} > + </button>
     <button onClick={()=>{dispatch(Cahname())}}>Name</button>

    </div>
  )
}

export default Counter
