// A02FuncState.js
import React, { useState } from 'react'

function A02FuncState() {
    const [name, setName] = useState('NolBu');
    const [age, setAge] = useState(30);
    const [isChecked, setIsChecked] = useState(true);
    const [user, setUser] = useState( {name: 'HungBu', age: 20} );
    const [ary, setAry] = useState( [10, 20, 30] );

    const changeName = () => setName('HungBu');
    const changeAge = (num) => {
        let value = Number(num);
        if(isNaN(value)) value = 0;
        setAge(value); 
    };
    const changeCheck = () => setIsChecked(!isChecked);

    // Array
    const addArray = () => {
        const data = Math.ceil(Math.random() * 100);
        setAry(ary.concat(data));
    };
    const updateArray = (index, value) => {
        const data = ary.map( (item, i) => index === i ? value : item );
        setAry(data);
    };
    const deleteArray = (index) => {
        const data = ary.filter( (item, i) => index !== i );
        setAry(data);
    };

    // Object
    const addObject = (key, value) => {
        const data = {...user, [key]: value};
        setUser(data);
    };
    const updateObject = (key, value) => {
        const data = {...user, [key]: value};
        setUser(data);
    }
    const deleteObject = (key) => {
        delete user[key];
        setUser( {...user} );
    }
    

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

            { ary.map( (item, i) => <span key={i}>{item}{' '}</span>) }

            <div>
                <button onClick={changeName}>Name</button>
                <button onClick={ () => changeAge(10) }>Age</button>
                <button onClick={changeCheck}>Boolean</button>

                <button onClick={ addArray }>Add Array</button>
                <button onClick={ () => updateArray(1, 1000) }>Update Array</button>
                <button onClick={ () => deleteArray(0) }>Delete Array</button>

                <button onClick={ () => addObject('address', 'Seoul') }>Add Object</button>
                <button onClick={ () => updateObject('address', 'Busan') }>Update Object</button>
                <button onClick={ () => deleteObject('address') }>Delete Object</button>
            </div>
        </div>
    )
}

export default A02FuncState
