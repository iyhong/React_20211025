
// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from 'react'
import styled from 'styled-components'

// CSS를 적용한 React 요소를 작성
// myBox extends Div
const MyBox = styled.div`
    background-color: ${props => props.color || 'lightgray'};
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding: 10px;
`

function A04StyledComponent() {
    return (
        <div>
            <h3>A04 Styled Component</h3>

            <MyBox color="orange">Hello World</MyBox>
            <MyBox>Hello World</MyBox>
        </div>
    )
}

export default A04StyledComponent
