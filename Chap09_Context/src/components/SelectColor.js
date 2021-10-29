
import React from 'react'
import { SelectColorContextConsumer } from './../modules/SelectColorContext'

function SelectColor() {
    const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
    const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

    return (
        <SelectColorContextConsumer>
            { data => (
                <div style={{display: 'flex'}}>
                    { colors.map( color => <div key={color} 
                        style={ {...style, background: color } }
                        onClick={ () => data.action.setBgColor(color) }>{color}</div>)}
                </div>
            )}
        </SelectColorContextConsumer>
    )
}

export default SelectColor
