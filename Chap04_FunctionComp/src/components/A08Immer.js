
import React, { useState } from 'react'
import produce from 'immer'

// npm i immer
function A08Immer() {
    const [person, setPerson] = useState({
        name: '',
        info: {
            address: '',
            tel: [10, 20, 30],
            etc: {
                one: '',
                two: ''
            }
        }
    });

    const changeName = () => setPerson({...person, name: 'HungBu'});
    const changeAddress = () => {
        setPerson({
            ...person,
            info: {
                ...person.info,
                address: 'Seoul'
            }
        })
    };
    const changeOne = () => {
        setPerson({
            ...person,
            info: {
                ...person.info,
                etc: {
                    ...person.info.etc,
                    one: 'ONE'
                }
            }
        })
    };
    const addArray = (value) => {
        setPerson({
            ...person,
            info: {
                ...person.info,
                tel: person.info.tel.concat(value)
            }
        })
    };

    // immer
    const changeNameImmer = () => {
        const data = produce(person, draft => {
            draft.name = 'BangJA'
        });
        setPerson(data);
    };
    const changeAddressImmer = () => {
        const data = produce(person, draft => {
            draft.info.address = 'Busan';
        });
        setPerson(data);
    };
    const changeOneImmer = () => {
        const data = produce(person, draft => {
            draft.info.etc.one = '간단하네...';
        });
        setPerson(data);
    };
    
    // Array
    const addArrayImmer = (value) => {
        const data = produce(person, draft => {
            draft.info.tel.push(value);
        });
        setPerson(data);
    };
    const updateArrayImmer = (index, value) => {
        const data = produce(person, draft => {
            draft.info.tel[index] = value;
        });
        setPerson(data);
    };
    const deleteArrayImmer = (index) => {
        const data = produce(person, draft => {
            draft.info.tel.splice(index, 1);
        });
        setPerson(data);
    };


    return (
        <div>
            <h3>A08. Immer</h3>
            
            Name: {person.name}<br />
            Address: {person.info.address}<br />
            One: {person.info.etc.one}<br />
            Ary: {person.info.tel.map( (item, i) => <span key={i}>{item} </span>)}

            <br />
            <button onClick={changeName}>Name</button>
            <button onClick={changeAddress}>Address</button>
            <button onClick={changeOne}>One</button>
            <button onClick={ () => addArray( Math.ceil(Math.random()*100) ) }>ADD</button>
            <br />

            <button onClick={changeNameImmer}>Name</button>
            <button onClick={changeAddressImmer}>Address</button>
            <button onClick={changeOneImmer}>One</button>

            <button onClick={ () => addArrayImmer( Math.ceil(Math.random()*100) ) }>ADD</button>
            <button onClick={ () => updateArrayImmer(0, 1000) }>UPDATE</button>
            <button onClick={ () => deleteArrayImmer(0) }>DELETE</button>
        </div>
    )
}

export default A08Immer
