
// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from 'react'
// import styled from 'styled-components'
import {MyBox, MyButton} from './css/A04MyStyle'
import { Button, Input } from 'reactstrap'
import { MdAccessibility, MdAppBlocking } from 'react-icons/md'

// CSS를 적용한 React 요소를 작성
// myBox extends Div
/*
const MyBox = styled.div`
    background-color: ${props => props.color || 'lightgray'};
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding: 10px;
`;
const MyButton = styled.button`
    background-color: ${props => props.bgColor || 'lightgray'};
    border: 1px solid orange;
    color: white;
    padding: 5px;

    &:hover {
        background-color: white;
        color: orange;
    }

    & + & {
        margin: 10px;
    }
`
*/

function A04StyledComponent() {
    return (
        <div>
            <h3>A04 Styled Component</h3>

            <MyBox color="orange">Hello World</MyBox>
            <MyBox>Hello World</MyBox>

            <MyButton bgColor="black">Click</MyButton>
            <MyButton>Click</MyButton>
            <br />

            <Input />
            <Button color="primary" size="sm">Click</Button>
            <br />

            <MdAccessibility style={{fontSize: '24pt', color: 'red'}}/>
            <MdAppBlocking />
        </div>
    )
}


export default A04StyledComponent
