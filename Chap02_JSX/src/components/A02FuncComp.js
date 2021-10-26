// A02FuncComp.js
import React, { useState } from 'react'

function A02FuncComp() {
    const [name, setName] = useState('HungBu');
    let address = 'Seoul';

    const changeName = () => {
        setName('NolBu');
    }
    const changeAddress = () => {
        address = 'Busan'
    };

    return (
        <div>
            <h3>A02 function Component</h3>
            <div>
                This is Function Component<br />

                Name: {name}<br />
                Address: {address}<br />
                <button onClick={changeName}>Name</button>
                <button onClick={changeAddress}>Address</button>
            </div>
        </div>
    )
}
export default A02FuncComp;