import React from 'react'
import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from './../modules/counterR'

function Counter(props) {

    const { title, num, increase, decrease } = props;

    return (
        <div>
            <h3>{title}: {num}</h3>
            <button onClick={ () => increase(2) }>+</button>        
            <button onClick={ () => decrease() }>-</button> 
        </div>
    )
}

export default connect(
    // 값을 받아 props에 지정한 이름으로 주입
    state => ({
        title: state.counterR.title,
        num: state.counterR.num
    }),
    // 값을 받아 지정한 이름으로 함수 참조 변수 생성 후 주입
    dispatch => ({
        increase: (num) => dispatch(increaseAction(num)),
        decrease: () => dispatch(decreaseAction())
    })
)(Counter)
