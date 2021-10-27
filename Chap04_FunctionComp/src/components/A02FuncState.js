// A02FuncState.js
import React, { useState } from 'react'

function A02FuncState() {
    const [name, setName] = useState('NolBu');
    const [age, setAge] = useState(30);
    const [isChecked, setIsChecked] = useState(true);
    const [user, setUser] = useState( {name: 'HungBu', age: 20} );
    const [ary, setAry] = useState( [10, 20, 30] );

    const changeName = () => setName('HungBu');

    return (
        <div>
            <h3>A02 Function State</h3>

            <div>
                String: {name}<br />
                Number: {age}<br />
                Object: {user.name} / {user.age} / {user.address}<br />
                Array: {ary[0]} / {ary[1]} / {ary[2]} / {ary[3]}<br />
                Boolean: {isChecked ? 'T' : 'F'}<br />
            </div>
            <br />

            <div>
                <button onClick={changeName}>Name</button>
                <button>Age</button>
                <button>Boolean</button>

                <button>Add Array</button>
                <button>Update Array</button>
                <button>Delete Array</button>

                <button>Add Object</button>
                <button>Update Object</button>
                <button>Delete Object</button>
            </div>
        </div>
    )
}

export default A02FuncState
