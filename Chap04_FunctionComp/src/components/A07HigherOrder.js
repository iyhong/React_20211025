
import React from 'react'
import A07WithComp from './A07WithComp'

function A07HigherOrder(props) {
    const { age, name, changeName } = props;

    return (
        <div>
            <h3>A07 Higher Order Component</h3>
            props: {age} / {name} <br />
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default A07WithComp(A07HigherOrder, 'ABC');
