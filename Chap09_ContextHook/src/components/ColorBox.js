
import React, { useContext } from 'react'
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorContextConsumer } from './../modules/SelectColorContext'

function ColorBox() {
    // useContext는 Context를 직접 참조해야 한다. Context 파일이 변경됨.
    const {title, color} = useContext(ColorBoxContext);
    const { state } = useContext(SelectColorContextConsumer)
    return (
        // ColorBoxContext가 사용할 DOM을 Consumer로 감싸 구성
        <div>
            <h3>{title}</h3>
            <div style={{width: '50px', height: '50px', background: color}}></div>
            <hr />

            <h4>{state.title}</h4>
            <div style={{width: '50px', height: '50px', background: state.color}}></div>
            <div style={{width: '50px', height: '50px', background: state.bgColor}}></div>
        </div>
    )
}

export default ColorBox
