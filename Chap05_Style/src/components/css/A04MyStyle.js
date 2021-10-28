import styled from 'styled-components'

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
export { MyBox, MyButton }