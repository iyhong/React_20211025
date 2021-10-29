
import React from 'react'
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorContextConsumer } from './../modules/SelectColorContext'

function ColorBox() {
    return (
        // ColorBoxContext가 사용할 DOM을 Consumer로 감싸 구성
        <ColorBoxContext.Consumer>
            { value => (
                <SelectColorContextConsumer>
                    { data => (
                        <div>
                            <h3>{value.title}</h3>
                            <div style={{width: '50px', height: '50px', background: value.color}}></div>
                            <hr />
        
                            <h4>{data.state.title}</h4>
                            <div style={{width: '50px', height: '50px', background: data.state.color}}></div>
                            <div style={{width: '50px', height: '50px', background: data.state.bgColor}}></div>
                        </div>
                    )}
                </SelectColorContextConsumer>
                 
            )}
        </ColorBoxContext.Consumer>
       
        
    )
}

export default ColorBox
