import React from 'react'
import { increaseAction, decreaseAction } from './../modules/counterR'
import { useDispatch, useSelector } from 'react-redux'

function Counter(props) {

    // state의 변수 값 참조
    const { title, num } = useSelector(state => state.counterR);
    const dispatch = useDispatch();     // dispatch

    return (
        <div>
            <h3>{title}: {num}</h3>
            <button onClick={ () => dispatch(increaseAction(2)) }>+</button>        
            <button onClick={ () => dispatch(decreaseAction()) }>-</button> 
        </div>
    )
}

export default Counter
