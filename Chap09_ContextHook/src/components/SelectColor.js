
import React, { useContext } from 'react'
import { SelectColorContextConsumer } from './../modules/SelectColorContext'

function SelectColor() {
    const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
    const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

    const {action} = useContext(SelectColorContextConsumer);

    return (
        <div>
            <div style={{display: 'flex'}}>
                { colors.map( color => <div key={color} 
                    style={ {...style, background: color } }
                    onClick={ () => action.setBgColor(color) }>{color}</div>)}
            </div>
        </div>
    )
}

export default SelectColor
